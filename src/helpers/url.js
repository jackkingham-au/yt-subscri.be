import { getSecondsTimestamp } from "./time";
import axios from 'axios';

const getChannelUrl = async (url) => {
    const { data, status } = await axios.get('/.netlify/functions/getYoutubeChannelId', {
        params: { url }
    })

    return (data.serverStatus != 200) ? url : 'youtube.com/channel/' + data.channelId;
}

export const shortenUrl = (fields) => {
    const { video } = fields;
    const videoId = video.split('?v=')[1];
    
    let url = 'youtu.be/' + videoId

    if(fields?.startAtTime) {
        const timestamp = getSecondsTimestamp(fields.startAtTime);
        url += '?t=' + timestamp;
    }

    if(fields?.loop) {
        url += (url.includes('?t=')) ? '&loop=true' : '?loop=true'; 
    }

    return url;
} 

export const getSubscribeLink = async (url) => {
    const channelUrl = await getChannelUrl(url);

    return channelUrl + '?sub_confirmation=1';
}