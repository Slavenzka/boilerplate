import { SelectCustomOptionType } from 'components/molecules/SelectCustom/SelectCustom.spec'
import { CALENDAR_START_YEAR, MONTHS } from 'utils/const'

export const debounce = <FunctionType>(func: FunctionType, delay = 500) => {
  let isCoolDown = false

  return function (...args: unknown[]) {
    if (isCoolDown) return null;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line prefer-rest-params
    func.apply(this, args)

    isCoolDown = true

    setTimeout(() => {
      isCoolDown = false
    }, delay)
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function throttle<T>(func: (...args: T[]) => void, ms = 500): (...args: T[]) => void {
  let isThrottled = false,
    savedArgs: T[] | null,
    savedThis: unknown;

  function wrapper(...args: T[]) {
    if (isThrottled) { // (2)
      savedArgs = args;
      savedThis = null;
      return;
    }
    isThrottled = true;

    func.apply(null, [...args]); // (1)

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper
}

export const covertFileToBase64: (file: File) => Promise<string> = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result as string)
  reader.onerror = error => reject(error)
})

export function convertFileAndProcessEncoding (file: File): Promise<string> {
  return covertFileToBase64(file)
    .then(base64code => {
      const query = `;base64,`
      return base64code.slice(base64code.indexOf(query) + query.length)
    })
}

export const generateTimeOptions: (range: number) => SelectCustomOptionType<number>[] = range => new Array(range)
  .fill(``)
  .map((_, index) => ({
    label: index,
    value: index
  }))

export function addZeroToSingleDigit (value: string | number): string | number {
  return !Number.isNaN(+value) && +value < 10
    ? `0${value}`
    : value
}

export function getFormattedDate (inputDate: number | Date | null, isTimeRequired?: boolean, divider = `.`) {
  if (!inputDate) return ``

  const date = new Date(inputDate)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  if (!isTimeRequired) {
    return `${addZeroToSingleDigit(day)}${divider}${addZeroToSingleDigit(month + 1)}${divider}${year}`
  }

  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${addZeroToSingleDigit(day)}${divider}${addZeroToSingleDigit(month + 1)}${divider}${year} ${addZeroToSingleDigit(hours)}:${addZeroToSingleDigit(minutes)}`
}

export function getCalendarHighlightedDates ({
                                               from,
                                               to
                                             }: {
  from?: number | null,
  to?: number | null
}) {
  if (!from || !to) return []

  const highlightFrom = new Date(from)
  const highlightTo = new Date(to)
  const highlightRange = [highlightFrom]

  while (+highlightRange[highlightRange.length - 1] < +highlightTo) {
    const lastAddedDate = highlightRange[highlightRange.length - 1]
    const nextDate = new Date(lastAddedDate)
    nextDate.setDate(nextDate.getDate() + 1)
    highlightRange.push(nextDate)
  }

  return highlightRange
}

export function getCalendarRangeValue ({
                                         from,
                                         to
                                       }: {
  from?: number | null,
  to?: number | null
}) {
  if (from && !to) {
    const formattedFrom = getFormattedDate(from, false, `/`)

    return (
      `${formattedFrom} - N/A`
    )
  }

  if (!from && to) {
    const formattedTo = getFormattedDate(to, false, `/`)

    return (
      `N/A - ${formattedTo}`
    )
  }

  if (from && to) {
    const formattedFrom = getFormattedDate(from, false, `/`)
    const formattedTo = getFormattedDate(to, false, `/`)

    return (
      `${formattedFrom} - ${formattedTo}`
    )
  }

  return ``
}

export function getSimplifiedDateTimestamp (timestamp: number) {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  return new Date(year, month, day)
}

export const getYearOptions = () => {
  const currentYear = (new Date()).getFullYear()

  return new Array(currentYear - CALENDAR_START_YEAR + 1)
    .fill(``)
    .map((_, index) => ({
      label: currentYear - index,
      value: currentYear - index
    }))
}

export const monthOptions = new Array(MONTHS.length)
  .fill(``)
  .map((_, index) => ({
    label: MONTHS[index],
    value: MONTHS[index]
  }))

export function getSimplifiedDate (timestamp: number) {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  return new Date(year, month, day)
}