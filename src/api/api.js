import axios from "axios"

const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlN2Q5NzM4ZS0wNzY0LTRmY2QtYmU0OC0xYzc5OGE1YzViYWQiLCJhdXRoZW50aWNhdGVkIjoidHJ1ZSIsInNjb3BlIjoiU1RVREVOVCBBRE1JTiBURUFDSEVSICIsImlhdCI6MTY5ODI2ODQzNCwiZXhwIjoxNjk4MjcwMjM0fQ.E-B8i20CriVuxZNgKxA61yqONQfZ_-5Gt3eq_mKkg1w"


const instance = axios.create({
  baseURL: "https://myteacher.at",
  timeout: 5000,
})

instance.defaults.headers.common['Authorization'] = `Bearer ${token}`

export default instance

export const getOrdersData = async () => {
  const response = await instance.get("/orders/received")
  return response.data
}

export const getCurrentUser = async () => {
  const response = await instance.get("/user")
  return response.data
}

export const getTeachersData = async () => {
  const response = await instance.get("/admin/teacher/all")
  return response.data
}
