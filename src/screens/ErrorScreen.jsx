import { NavLink } from "react-router-dom"

export const ErrorScreen = () => {

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-3xl text-red-700 text-center mb-6">Page Not Found...</h1>
      <NavLink className="bg-[#1542B9] text-white px-8 py-2 rounded-full" to="/">Go to home</NavLink>
    </div>
  )
}
