import moment from 'moment'

export const TIME_DISPLAY_FORMAT = 'hh:mm'

export const isBeforeCurrentTime = (time) => {
  const now = moment().format()
  return moment(time).isBefore(now)
}

export const mapUtcFormat = (time) => {
  return moment(time).format(TIME_DISPLAY_FORMAT)
}

export const stringSortComparator = (first, second) => {
  const firstName = first.name.toLowerCase()
  const secondName = second.name.toLowerCase()
  if (firstName < secondName)
    return -1;
  if (firstName > secondName)
    return 1;
  return 0;
}

export const stringSortComparatorReverse = (first, second) => {
  const firstName = first.name.toLowerCase()
  const secondName = second.name.toLowerCase()
  if (firstName < secondName)
    return 1;
  if (firstName > secondName)
    return -1;
  return 0;
}

export const timeSortComparatorReverse = (first, second) => {
  return moment(first.time).isBefore(second.time)
}

export const timeSortComparator = (first, second) => {
  return moment(second.time).isBefore(first.time)
}

export const currentTimeDiff = (time) => {
  const now = moment()
  const momentTime = moment(time)
  return momentTime.diff(now)
}

export default mapUtcFormat
