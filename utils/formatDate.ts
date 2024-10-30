import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export const formatDate = (era: number): string => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  return dayjs.unix(era).format('DD.MM.YYYY, hh:mm');
};
