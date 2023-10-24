import { useState } from "react"

import { RecentTeacherItem } from "./RecentTeacherItem"

const teachersLists = [
  {
    id: 1,
    teacherName: "Sofia Jame",
    imageUrl: "https://pbs.twimg.com/profile_images/1637814189598154752/6QOMappK_400x400.jpg",
    subject: "Maths / 14-04-2023",
  },
  {
    id: 2,
    teacherName: "Jason Sims",
    imageUrl: "https://pbs.twimg.com/profile_images/1607694212522278915/DNH7uSB4_400x400.jpg",
    subject: "Programming / 20-04-2022"
  },
  {
    id: 3,
    teacherName: "Robert M. Ryan",
    imageUrl: "https://pbs.twimg.com/profile_images/1567704552283193345/wMLFemzm_400x400.jpg",
    subject: "Chemistry"
  },
  {
    id: 4,
    teacherName: "Nicole Robichaud",
    imageUrl: "https://pbs.twimg.com/profile_images/1607694212522278915/DNH7uSB4_400x400.jpg",
    subject: "Physics / 25-06-2020"
  }
]

export const RecentTeachersList = () => {
  const [teacherDetails, setTeacherDetails] = useState(teachersLists)

  return (
    <div className="bg-white px-6 py-8 border rounded-lg w-full">
      <h1 className="mb-8 font-medium">Recent Teachers</h1>
      <div className="mb-8">
        {teacherDetails.map((teacher) => (
          <RecentTeacherItem
            key={teacher.id}
            teacher={teacher}
          />
        ))}
      </div>
      <button className="w-full rounded-full py-2 border-2 border-[#3359C1] text-[#3359C1] text-sm">See Full List</button>
    </div>
  )
}
