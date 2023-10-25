import { useHomeScreen } from "./hooks/useHomeScreen"
import { TableOfTeachers } from "../components/TableOfTeachers"
import { StudentDetails } from "../components/StudentDetails"
import { RecentTeachersList } from "../components/RecentTeachersList"
import { LoadingSpinner } from "../components/LoadingSpinner"
import { TeacherError } from "../components/TeacherError"
import { StudentError } from "../components/StudentError"
import { RecentTeacherError } from "../components/RecentTeacherError"

export const HomeScreen = () => {
  const { 
    teachersList,
    studentData,
    recentTeacherData,
    showLoadingUIForTableOfTeacher,
    showErrorUIForTableOfTeacher,
    showUIForTableOfTeacher,
    showLoadingUIForStudentDetails,
    showErrorUIForStudentDetails,
    showUIForStudentDetails,
    showLoadingUIForRecentTeacher,
    showErrorUIForRecentTeacher,
    showUIForRecentTeacher,
   } = useHomeScreen()

  return (
    <div className="-mt-6">
      <h1 className="font-bold text-2xl">Order List</h1>
      <div className="mt-4">
        <div className="flex justify-between">
          <div className="basis-8/12">
            {showLoadingUIForTableOfTeacher && <LoadingSpinner /> }
            {showErrorUIForTableOfTeacher && <TeacherError />}
            {showUIForTableOfTeacher && <TableOfTeachers teachersList={teachersList} />}
          </div>
          <div>
            <div className="w-full">
              {showLoadingUIForStudentDetails && <LoadingSpinner />}
              {showErrorUIForStudentDetails && <StudentError />}
              {showUIForStudentDetails && <StudentDetails studentInfo={studentData} />}
              <div className="mt-8">
                {showLoadingUIForRecentTeacher && <LoadingSpinner />}
                {showErrorUIForRecentTeacher && <RecentTeacherError />}
                {showUIForRecentTeacher && <RecentTeachersList recentTeacherData={recentTeacherData} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
