import { useStudentDetails } from "./hooks/useStudentDetails"

export const StudentDetails = (props) => {
  const { 
    fullName,
    mobile,
    email,
    premium,
    country,
    formattedDateOfBirth 
  } = useStudentDetails(props)

  return (
    <div className="bg-white px-6 py-10 border rounded-lg w-full relative">
      <span className="bg-[#3359C1] text-white px-6 py-2 rounded-full text-xs absolute -top-4 left-36">Student</span>
      <div>
        <div className="h-20 w-20 row-span-full block m-auto mb-3">
          <img className="h-20 w-20 block m-auto mb-3 rounded-full" src="https://pbs.twimg.com/profile_images/1361485713905123330/bVOw5zgC_400x400.jpg" alt="" />
        </div>
        <h2 className="text-center mb-3 font-medium">{fullName}</h2>
      </div>
      <div className="border mb-4"/>
      <div>
        <div className="flex items-center mb-2">
          <p className="font-normal pr-16">Mobile</p>
          <span className="opacity-50 pl-2">{mobile}</span>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-normal pr-6">Date Of Birth</p>
          <span className="opacity-50">{formattedDateOfBirth}</span>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-normal pr-20">Email</p>
          <span className="opacity-50">{email}</span>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-normal pr-14">Country</p>
          <span className="opacity-50">{country}</span>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-normal pr-12">Premium</p>
          <span className="opacity-50">{premium && "True"}</span>
        </div>
      </div>
    </div>
  )
}
