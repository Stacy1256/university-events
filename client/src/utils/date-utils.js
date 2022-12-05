import moment from "moment";

const humanizeHoldingTime = (start, end) => {
  const locale = 'uk';
  const duration = moment.duration(end - start).locale(locale).humanize();
  const endString = (start.toDateString() === end.toDateString())
    ? end.toLocaleTimeString(locale)
    : end.toLocaleString(locale);

  return `${start.toLocaleString(locale)} - ${endString} (${duration})`
};
export default humanizeHoldingTime;