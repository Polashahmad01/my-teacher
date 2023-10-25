import { useState, useEffect } from "react"

import { getOrdersData, getCurrentUser, getTeachersData } from "../../api/api"

export const useHomeScreen = () => {
  const [teachersList, setTeachersList] = useState([])
  const [studentData, setStudentData] = useState({})
  const [recentTeacherData, setRecentTeacherData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [showFullRecentTeacherData, setShowFullRecentTeacherData] = useState(false)
  const recentTeacherDataToShow = showFullRecentTeacherData ? recentTeacherData : recentTeacherData.slice(0, 5)

  const fetchOrderData = async () => {
    try {
      setIsLoading(true)
      const response = await getOrdersData()
      setTeachersList(response.content)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error("Error: ", error)
      setErrorMessage(error.code)
    }
  }

    const fetchCurrentUser = async () => {
    try {
      setIsLoading(true)
      const response = await getCurrentUser()
      setStudentData(response)
      setIsLoading(false)
    } catch(error) {
      console.error("Error: ", error)
      setErrorMessage(error.code)
    }
  }
  
  const showLoadingUIForTableOfTeacher = isLoading
  const showErrorUIForTableOfTeacher = !isLoading && teachersList.length === 0 && errorMessage !== null
  const showUIForTableOfTeacher = !isLoading && teachersList.length > 0 && errorMessage === null

  const showLoadingUIForStudentDetails = isLoading
  const showErrorUIForStudentDetails = !isLoading && errorMessage !== null
  const showUIForStudentDetails = !isLoading && Object.keys(studentData).length > 0 && errorMessage === null

  const showLoadingUIForRecentTeacher = isLoading
  const showErrorUIForRecentTeacher = !isLoading && recentTeacherData.length === 0 && errorMessage !== null
  const showUIForRecentTeacher = !isLoading && recentTeacherData.length > 0 && errorMessage === null

  const fetchTeacherData = async () => {
    try {
      setIsLoading(true)
      const response = await getTeachersData()
      setRecentTeacherData(response)
      setIsLoading(false)
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
