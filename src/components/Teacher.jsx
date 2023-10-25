import { useTeacher } from "./hooks/useTeacher"

export const Teacher = (props) => {
  const { 
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
  } = useTeacher(props)

  return (
    <tr className="bg-[white] border-t border-b rounded-b-lg">
      <td className="px-6 py-4 whitespace-no-wrap text-sm flex items-center gap-2">
        <input type="checkbox" />
        <span className=" text-blue-500">#{formattedId}</span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm">
        {firstName}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm">
        {day}-{month}-{year}        
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm">
        {lastModifiedDay}-{lastModifiedMonth}-{lastModifiedYear}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm">
        {price}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm">
        <span
          className={(accepted === true && paid === false) ? "text-blue-600" : "" || (accepted === true && paid === true) ? "text-green-600" : "" || cancelled === true ? "text-red-800" : "" || expired === true ? "opacity-40" : "" || paymentOverdue === true ? "text-amber-400" : "" || rejected === true ? "text-red-600" : ""}
        >
          {accepted && !paid && "Accepted"}
          {accepted && paid && "Paid"}
          {cancelled && "Cancelled"}
          {expired && "Expired"}
          {paymentOverdue && "paymentOverdue"}
          {rejected && "Rejected"}
        </span>
      </td>
    </tr>
  )
}
