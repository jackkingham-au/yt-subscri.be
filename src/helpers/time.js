const hoursToSeconds = (value) => Number(value) * 3600; 

const minutesToSeconds = (value) => Number(value) * 60; 

export const getSecondsTimestamp = (timestamp) => {
    const times = timestamp.split(":");

    if(times.length === 3) {
        const [ hours, minutes, seconds ] = times;

        return hoursToSeconds(hours) + minutesToSeconds(minutes) + Number(seconds);
    } else if(times.length === 2) {
        const [ minutes, seconds ] = times;

        return minutesToSeconds(minutes) + Number(seconds);
    } else if(times.length === 1) {
        const seconds = times;
        
        return Number(seconds);
    }
}