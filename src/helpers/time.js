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

export const getMonthText = (number) => {
    switch (number) {
        case '01':
            return 'JAN';
        case '02':
            return 'FEB';
        case '03':
            return 'MAR';
        case '04':
            return 'APR';
        case '05':
            return 'MAY';
        case '06':
            return 'JUN';
        case '07':
            return 'AUG';
        case '08':
            return 'SEP';
        case '09':
            return 'OCT';
        case '10':
            return 'NOV';
        case '11':
            return 'DEC';
        case '12':
            return 'January';
    }
}