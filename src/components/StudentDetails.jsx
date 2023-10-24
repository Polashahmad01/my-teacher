export const StudentDetails = (props) => {
  const { type, imageUrl, studentName, mobile, mobileValue, dateOfBirth, dateOfBirthValue, email, emailValue, country, countryValue, subscription, subscriptionValue } = props.studentInfo

  return (
    <div className="bg-white px-6 py-10 border rounded-lg w-full relative">
      <span className="bg-[#3359C1] text-white px-6 py-2 rounded-full text-xs absolute -top-4 left-40">{type}</span>
      <div>
        <img className="h-20 w-20 block m-auto mb-3 rounded-full" src={imageUrl} alt={studentName} />
        <h2 className="text-center mb-3 font-medium">{studentName}</h2>
      </div>
      <div className="border mb-4"/>
      <div>
        <div className="flex items-center mb-2">
          <p className="font-normal pr-16">{mobile}</p>
          <span className="opacity-50 pl-2">{mobileValue}</span>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-normal pr-6">{dateOfBirth}</p>
          <span className="opacity-50">{dateOfBirthValue}</span>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-normal pr-20">{email}</p>
          <span className="opacity-50">{emailValue}</span>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-normal pr-14">{country}</p>
          <span className="opacity-50">{countryValue}</span>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-normal pr-12">{subscription}</p>
          <span className="opacity-50">{subscriptionValue}</span>
        </div>
      </div>
    </div>
  )
}