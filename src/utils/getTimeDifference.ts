import moment, { Moment } from 'moment'

// A util to get time difference between date and now
export const getTimeDifference = (date: Moment) => {
  const diff = moment().diff(date, 'minutes')

  if (diff < 1) {
    return 'less than 1 minute ago'
  } else if (diff < 60) {
    return `${diff} minutes ago`
  } else if (diff < 1440) {
    return `${moment().diff(date, 'hours')} hours ago`
  } else {
    return `${moment().diff(date, 'days')} days ago`
  }
}
