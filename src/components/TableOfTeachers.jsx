import { Teacher } from "./Teacher"

export const TableOfTeachers = ({ teachersList }) => {

  return (
    <div className="w-full">
      <table className="min-w-full bg-[#FAFBFF] border-collapse rounded-lg py-2">
        <thead>
          <tr>
            <th className="px-6 py-4 text-left text-xs leading-4 font-medium flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-base">ID</span>
            </th>
            <th className="px-6 py-4 text-left text-xs leading-4 font-medium">
              <span className="text-base">Teacher</span>
            </th>
            <th className="px-6 py-4 text-left text-xs leading-4 font-medium ">
              <span className="text-base">Creation Date</span>
            </th>
            <th className="px-6 py-4 text-left text-xs leading-4 font-medium ">
              <span className="text-base">Last Modified Date</span>
            </th>
            <th className="px-6 py-4 text-left text-xs leading-4 font-medium ">
              <span className="text-base">Offer</span>
            </th>
            <th className="px-6 py-4 text-left text-xs leading-4 font-medium ">
              <span className="text-base">Description Status</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {teachersList.map(teacher => (
            <Teacher
              key={teacher.id}
              teacher={teacher}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
