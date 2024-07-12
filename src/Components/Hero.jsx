const Hero = ({onReferClick}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-600 text-white">
    <h1 className="text-5xl font-bold mb-4">Refer & Earn</h1>
    <h2 className="text-2xl mb-8">Refer a friend and earn rewards!</h2>
    <button 
      className="bg-white text-blue-600 font-semibold py-2 px-4 rounded" 
      onClick={onReferClick}
    >
      Refer Now
    </button>
  </div>
  )
}

export default Hero
