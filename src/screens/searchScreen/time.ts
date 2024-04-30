import moment from 'moment';

export function formatTime(time: number) {
  const currentTime = moment();
  const diffTime = currentTime.diff(time, 'minutes');
  const diffTimeHours = currentTime.diff(time, 'hours');
  const diffTimeDays = currentTime.diff(time, 'days');
  if (diffTime < 1) {
    return 'Vừa xong';
  } else if (diffTimeHours < 1) {
    return `${diffTime} phút trước`;
  } else if (diffTimeDays < 1) {
    return `${diffTimeHours} giờ trước`;
  } else {
    return moment(time).format('DD/MM/YYYY');
  }
}
