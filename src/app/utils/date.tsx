import { parseISO, format, fromUnixTime } from 'date-fns';

export function DateFormat(dateString: string | Date | number) {
    if(typeof(dateString) !== 'string'){
        dateString = String(dateString)
    }

  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

// export function DateFromTimestamp(timestamp: number) {
//   const dateNew = fromUnixTime(timestamp);
//   const formattedDate = format(dateNew, 'LLLL d, yyyy');
//   return <time dateTime={dateNew.toISOString()}>{formattedDate}</time>;
// }

export function DateFromTimestamp(timestamp: number) {
  try {
    // Verifica que el timestamp sea un número válido y que esté en un rango razonable
    if (isNaN(timestamp) || timestamp <= 0 || timestamp > Date.now() / 1000) {
      throw new Error('Invalid timestamp value');
    }

    const dateNew = fromUnixTime(timestamp);
    const formattedDate = format(dateNew, 'LLLL d, yyyy');
    return <time dateTime={dateNew.toISOString()}>{formattedDate}</time>;
  } catch (error) {
    console.error('Error formatting date:', error);
    return <span>Invalid date</span>;
  }
}

 