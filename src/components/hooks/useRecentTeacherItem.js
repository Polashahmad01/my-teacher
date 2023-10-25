export const useRecentTeacherItem = (props) => {
  const { firstName, lastName, photo, subjects } = props.teacher

  const fullName = firstName + " " + lastName
  const subject = subjects[0]?.name

  return {
    fullName,
    photo,
    subject
  }
}

