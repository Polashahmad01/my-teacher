import { RecentTeacherItem } from "./RecentTeacherItem"

export const RecentTeachersList = ({ recentTeacherData, onSeeFullListHandler, showFullRecentTeacherData }) => {

  return (
    <div className="bg-white px-6 py-8 border rounded-lg w-full">
      <h1 className="mb-8 font-medium">Recent Teachers</h1>
      <div className="mb-8">
        {recentTeacherData.map(item => (
          <RecentTeacherItem
            key={item.id}
            teacher={item}
          />
        ))}
      </div>
      <button onClick={onSeeFullListHandler} className="w-full rounded-full py-2 border-2 border-[#3359C1] text-[#3359C1] text-sm">{showFullRecentTeacherData ? "Show Less" : "See Full List"}</button>
    </div>
  )
}
