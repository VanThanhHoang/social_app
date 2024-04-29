import moment from 'moment';
export function formatPostTime(postTime: Date) {
  const currentTime = moment();
  const diffMinutes = currentTime.diff(postTime, 'minutes');
  const diffHours = currentTime.diff(postTime, 'hours');
  const diffDays = currentTime.diff(postTime, 'days');

  if (diffMinutes < 1) {
    return 'Vừa xong';
  } else if (diffHours < 1) {
    return `${diffMinutes} phút trước`;
  } else if (diffDays < 1) {
    return `${diffHours} giờ trước`;
  } else {
    const formattedTime = moment(postTime).format('DD/MM/YYYY');
    const formattedHour = moment(postTime).format('HH');
    const formattedMinute = moment(postTime).format('mm');
    return `${formattedTime} ${formattedHour}:${formattedMinute}`;
  }
}