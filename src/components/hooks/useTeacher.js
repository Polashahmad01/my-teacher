export const useTeacher = (props) => {
  const { id, creationDate, lastModifiedDate, accepted, cancelled, expired, paid, paymentOverdue, rejected, teacherInfo: { firstName }, offer: { price }} = props.teacher

  const dateFormatter = (dateToFormate) => {
    const unixTimestamp = parseFloat(dateToFormate);
    const date = new Date(unixTimestamp * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return { day, month, year }
  }

  const extractCharFromId = (inputString) => inputString.substring(0, 4)

  const formattedId = extractCharFromId(id)
  const { day, month, year } = dateFormatter(creationDate)
  const { day: lastModifiedDay, month: lastModifiedMonth, year: lastModifiedYear  } = dateFormatter(lastModifiedDate)

  return {
    formattedId,
    day,
    month,
    year,
    lastModifiedDay,
    lastModifiedMonth,
    lastModifiedYear,
    accepted,
    cancelled,
    expired,
    paid,
    paymentOverdue,
    rejected,
    firstName,
    price
  }
}
