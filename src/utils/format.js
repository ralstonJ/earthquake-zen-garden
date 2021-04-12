import moment from 'moment';

export const formatTimeByMMMd = (time) =>
  moment(time).format('MMM D, YYYY, hh:mm a');
