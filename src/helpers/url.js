import { getSecondsTimestamp } from "./time";
import axios from 'axios';

const getChannelUrl = async (url) => {
    try {
        const { data, status } = await axios.get('/.netlify/functions/getYoutubeChannelId', {
            params: { url }
        })
    
        return (data.serverStatus != 200) ? url : 'youtube.com/channel/' + data.channelId;    
    } catch(error) {
        return false;
    }
}

export const shortenUrl = (fields) => {
    const { video } = fields;
    const videoId = video.split('?v=')[1];
    let timestamp;
    
    if(typeof videoId === 'undefined') return { error: true }

    let url = 'youtu.be/' + videoId

    if(fields?.startAtTime) {
        timestamp = getSecondsTimestamp(fields.startAtTime);
        url += '?t=' + timestamp;
    }

    if(fields?.loop) {
        url += (url.includes('?t=')) ? '&loop=true' : '?loop=true'; 
    }

    return { url, videoId, timestamp, error: false };
} 

export const getSubscribeLink = async (url) => {
    const channelUrl = await getChannelUrl(url);

    if(channelUrl == false || !url.match(/youtube|youtu.be/)) return false;  

    return channelUrl + '?sub_confirmation=1';
}