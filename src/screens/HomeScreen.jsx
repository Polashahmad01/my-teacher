import { useState } from "react"

import { TableOfTeachers } from "../components/TableOfTeachers"
import { StudentDetails } from "../components/StudentDetails"
import { RecentTeachersList } from "../components/RecentTeachersList"

const studentData = {
  type: "Student",
  imageUrl: "https://pbs.twimg.com/profile_images/1637814189598154752/6QOMappK_400x400.jpg",
  studentName: "Mark Johnson",
  mobile: "Mobile",
  mobileValue: "(12) 23 243 3445",
  dateOfBirth: "Date Of Birth",
  dateOfBirthValue: "21 Feb 1990",
  email: "Email",
  emailValue: "markjohnson@gmail.com",
  country: "Country",
  countryValue: "U.S.A",
  subscription: "Premium",
  subscriptionValue: "True"
}

export const HomeScreen = () => {
  const [studentDetails, setStudentDetails] = useState(studentData)

  return (
    <div className="-mt-6">
      <h1 className="font-bold text-2xl">Order List</h1>
      <div className="mt-4">
        <div className="flex justify-between">
          <div className="basis-8/12">
            <TableOfTeachers />
          </div>
          <div>
            <div className="w-full">
              <StudentDetails studentInfo={studentDetails} />
              <div className="mt-8">
                <RecentTeachersList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}