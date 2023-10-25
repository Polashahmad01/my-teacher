import { useState, useEffect } from "react"

import { getOrdersData, getCurrentUser, getTeachersData } from "../../api/api"

export const useHomeScreen = () => {
  const [teachersList, setTeachersList] = useState([])
  const [studentData, setStudentData] = useState({})
  const [recentTeacherData, setRecentTeacherData] = useState([])
  const [isTeacherListLoading, setIsTeacherListLoading] = useState(false)
  const [isStudentDataLoading, setIsStudentDataLoading] = useState(false)
  const [isRecentTeacherDataLoading, setIsRecentTeacherDataLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [showFullRecentTeacherData, setShowFullRecentTeacherData] = useState(false)
  const recentTeacherDataToShow = showFullRecentTeacherData ? recentTeacherData : recentTeacherData.slice(0, 5)

  const fetchOrderData = async () => {
    try {
      setIsTeacherListLoading(true)
      const response = await getOrdersData()
      setTeachersList(response.content)
      setIsTeacherListLoading(false)
    } catch (error) {
      console.error("Error: ", error)
      setErrorMessage(error.code)
    }
  }

    const fetchCurrentUser = async () => {
    try {
      setIsStudentDataLoading(true)
      const response = await getCurrentUser()
      setStudentData(response)
      setIsStudentDataLoading(false)
    } catch(error) {
      console.error("Error: ", error)
      setErrorMessage(error.code)
    }
  }
  
  const showLoadingUIForTableOfTeacher = isTeacherListLoading
  const showErrorUIForTableOfTeacher = !isTeacherListLoading && teachersList.length === 0 && errorMessage !== null
  const showUIForTableOfTeacher = !isTeacherListLoading && teachersList.length > 0 && errorMessage === null

  const showLoadingUIForStudentDetails = isStudentDataLoading
  const showErrorUIForStudentDetails = !isStudentDataLoading && errorMessage !== null
  const showUIForStudentDetails = !isStudentDataLoading && Object.keys(studentData).length > 0 && errorMessage === null

  const showLoadingUIForRecentTeacher = isRecentTeacherDataLoading
  const showErrorUIForRecentTeacher = !isRecentTeacherDataLoading && recentTeacherData.length === 0 && errorMessage !== null
  const showUIForRecentTeacher = !isRecentTeacherDataLoading && recentTeacherData.length > 0 && errorMessage === null

  const fetchTeacherData = async () => {
    try {
      setIsRecentTeacherDataLoading(true)
      const response = await getTeachersData()
      setRecentTeacherData(response)
      setIsRecentTeacherDataLoading(false)
    } catch(error) {
      console.error("Error: ", error)
      setErrorMessage(error.code)
    }
  }

  const seeFullListHandler = () => {
    setShowFullRecentTeacherData(!showFullRecentTeacherData)
  }

  useEffect(() => {
    fetchOrderData()
    fetchCurrentUser()
    fetchTeacherData()
  }, [])

  return {
    teachersList,
    studentData,
    recentTeacherDataToShow,
    showLoadingUIForTableOfTeacher,
    showErrorUIForTableOfTeacher,
    showUIForTableOfTeacher,
    showLoadingUIForStudentDetails,
    showErrorUIForStudentDetails,
    showUIForStudentDetails,
    showLoadingUIForRecentTeacher,
    showErrorUIForRecentTeacher,
    showUIForRecentTeacher,
    showFullRecentTeacherData,
    seeFullListHandler
  }
}
