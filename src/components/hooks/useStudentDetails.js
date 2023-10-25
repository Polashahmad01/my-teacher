export const useStudentDetails = (props) => {
  const { firstName, lastName, mobile, email, premium, country, dateOfBirth, photo } = props.studentInfo

  const fullName = firstName + " " + lastName

  const formatDate = (inputDate) => {
    const [year, month, day] = inputDate.split('-');
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      return "Invalid Date";
    }

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${day}-${months[parseInt(month) - 1]}-${year}`;
    
    return formattedDate;
  }

  const formattedDateOfBirth = formatDate(dateOfBirth)

  return {
    fullName,
    mobile,
    email,
    premium,
    country,
    formattedDateOfBirth,
    photo
  }
}
