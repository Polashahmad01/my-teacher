import { useState } from "react"
import { Teacher } from "./Teacher"

const teacherLists = [
  {
    id: "#233",
    teacherName: "Dave Potter",
    createdAt: "16-12-2023",
    lastModifiedAt: "04-02-2023",
    price: 20,
    status: "Accepted"
  },
  {
    id: "#234",
    teacherName: "Linda Hatchell",
    createdAt: "04-02-2023",
    lastModifiedAt: "12-03-2023",
    price: 30,
    status: "Rejected"
  },
  {
    id: "#235",
    teacherName: "Philip Ainsworth",
    createdAt: "16-12-2023",
    lastModifiedAt: "05-12-2023",
    price: 20,
    status: "Paid"
  },
  {
    id: "#236",
    teacherName: "Eric Gibson",
    createdAt: "09-12-2023",
    lastModifiedAt: "15-12-2023",
    price: 40,
    status: "Expired"
  },
  {
    id: "#237",
    teacherName: "Floyd Garcia",
    createdAt: "22-12-2023",
    lastModifiedAt: "25-12-2023",
    price: 50,
    status: "paymentOverdue"
  },
  {
    id: "#238",
    teacherName: "Michelle Benjamin",
    createdAt: "29-10-2023",
    lastModifiedAt: "11-11-2023",
    price: 20,
    status: "Canceled"
  },
  {
    id: "#239",
    teacherName: "Alexander Reed",
    createdAt: "21-09-2023",
    lastModifiedAt: "10-10-2023",
    price: 30,
    status: "Accepted"
  },
  {
    id: "#240",
    teacherName: "Quinton Chacon",
    createdAt: "22-11-2023",
    lastModifiedAt: "12-12-2023",
    price: 50,
    status: "Paid"
  },
  {
    id: "#241",
    teacherName: "Sara Ahmad",
    createdAt: "25-11-2023",
    lastModifiedAt: "03-12-2023",
    price: 40,
    status: "Paid"
  },
  {
    id: "#242",
    teacherName: "Genevieve Clarke",
    createdAt: "22-10-2023",
    lastModifiedAt: "11-11-2023",
    price: 30,
    status: "Paid"
  },
  {
    id: "#243",
    teacherName: "Stephaine Osborne",
    createdAt: "20-11-2023",
    lastModifiedAt: "12-12-2023",
    price: 20,
    status: "Canceled"
  },
  {
    id: "#244",
    teacherName: "Michael Roy",
    createdAt: "22-12-2023",
    lastModifiedAt: "23-12-2023",
    price: 20,
    status: "Paid"
  }
]

export const TableOfTeachers = () => {
  const [teachers, setTeachers] = useState(teacherLists)

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
          {teachers.map((teacher) => (
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






    

