import { NavLink } from "react-router-dom"

import { TeacherMode } from "./TeacherMode"

export const Sidebar = () => {

  return (
    <div className="bg-[#FFFFFF] border-r w-80">
      <div className="block mt-6 mx-10 mb-10">
        <div className="flex items-center">
          <svg className="text-5xl" fill="#1542B9" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
            <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
          </svg>
          <h1 className=" text-2xl font-bold text-[#1542B9] mx-4">MyTeacher</h1>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <nav>
            <ul className="flex flex-col gap-8">
              <li className="flex">
                <div className="border-l-[10px] border-blue-500 rounded-tr-2xl rounded-br-2xl" />
                <NavLink to="#">
                  <div className="flex gap-x-3.5 py-3 px-3 gap-4 ml-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="#1542B9"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10 8h-8v10h8V11m-10 4H3v6h8v-6z" />
                    </svg>
                    <span className="text-[#1542B9]">Dashboard</span>
                  </div>
                </NavLink>
              </li>
              <li className="flex">
                <div className="border-l-[10px] border-transparent rounded-tr-2xl rounded-br-2xl"/>
                <NavLink to="#">
                  <div className="flex gap-x-3.5 py-3 px-3 gap-4 ml-6">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 017 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 01-.014.002H7.022zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 004 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    <span>Profile</span>
                  </div>
                </NavLink>
              </li>
              <li className="flex">
                <div className="border-l-[10px] border-transparent rounded-tr-2xl rounded-br-2xl"/>
                <NavLink to="#">
                  <div className="flex gap-x-3.5 py-3 px-3 gap-4 ml-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 14v2a6 6 0 00-6 6H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9 6h1v5h-8v-5h1v-1a3 3 0 016 0v1zm-2 0v-1a1 1 0 00-2 0v1h2z" />
                    </svg>
                    <span>Admin</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mb-40">
          <TeacherMode />
        </div>
      </div>
    </div>
  )
}
