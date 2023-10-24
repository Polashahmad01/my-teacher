
export const Teacher = (props) => {
  const { id, teacherName, createdAt, lastModifiedAt, price, status } = props.teacher

  return (
    <tr className="bg-[white] border-t border-b rounded-b-lg">
      <td className="px-6 py-4 whitespace-no-wrap text-sm flex items-center gap-2">
        <input type="checkbox" />
        <span className=" text-blue-500">{id}</span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm">
        {teacherName}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm">
        {createdAt}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm">
        {lastModifiedAt}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm">
        {price}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm">
        <span className={status?.toLowerCase() === "accepted" ? "text-blue-600" : "" || status?.toLowerCase() === "rejected" ? "text-red-600" : "" || status?.toLowerCase() === "paid" ? "text-green-600" : "" || status?.toLowerCase() === "expired" ? " opacity-40" : "" || status?.toLowerCase() === "paymentoverdue" ? "text-amber-400" : "" || status?.toLowerCase() === "canceled" ? "text-red-800" : ""}>{status}</span>
      </td>
    </tr>
  )
}