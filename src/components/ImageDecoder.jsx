
export const ImageDecoder = ({ base64String, altName, size }) => {
  const imageDataUrl = `data:image/png;base64,${base64String}`;
  const imageUrl = imageDataUrl.toLowerCase() === "data:image/png;base64,null" ? "https://source.unsplash.com/random/?person&1" : imageDataUrl

  if(size === "small") {
    return (
      <img className="h-12 w-12 block rounded-full" src={imageUrl} alt={altName} />
    )
  }

  return (
    <>
      <img
        className="h-20 w-20 block m-auto mb-3 rounded-full"
        src={imageUrl} 
        alt={altName}
      />
    </>
  )
}
