const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

exports.handler = async (event, context) => {
    const url = event.queryStringParameters.url;

    const { data, status } = await axios.get(url);

    const { window } = new JSDOM(data);

    const channelId = window.document.querySelector('meta[itemprop="channelId"]').content;

    return {
        statusCode: 200,
        body: JSON.stringify({
            channelId,
            serverStatus: status,
        }),
    }
}