import moment from 'moment';

export function formatPostTime(postTime: Date) {
    const currentTime = moment();
    const diffMinutes = currentTime.diff(postTime, 'minutes');
    const diffHours = currentTime.diff(postTime, 'hours');
    const diffDays = currentTime.diff(postTime, 'days');

    if (diffMinutes < 1)    {
        return 'Vừa xong';
    } else if (diffHours < 1) {
        return `${diffMinutes} phút trước`;
    } else if (diffDays < 5) {
        return `${diffHours} giờ trước`;
    } else {
        return moment(postTime).format('DD/MM/YYYY');
    }
}
