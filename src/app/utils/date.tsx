import { parseISO, format } from 'date-fns';

export default function DateFormat(dateString: string | Date) {
    if(typeof(dateString) !== 'string'){
        dateString = String(dateString)
    }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}