import { Duration } from 'luxon';

export const convertMinutesToSeconds = (minutes: number): number => minutes * 60;

export const convertSecondsToString = (seconds: number, format: string = 'mm:ss'): string => Duration.fromObject({ second: seconds }).toFormat(format).toString(); 
