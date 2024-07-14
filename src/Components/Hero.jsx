import accordina from "/accordin.png";
const Hero = ({ onReferClick }) => {
  return (
    <div className="flex py-10 md:flex-col items-center justify-center bg-blue-600 text-white">
      <div className="flex md:flex-row flex-col-reverse">
        <div className="flex-1 flex justify-center items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Refer & Earn</h1>
            <h2 className="text-2xl mb-8">Refer a friend and earn rewards!</h2>
            <button
              className="bg-white text-blue-600 font-semibold py-2 px-4 rounded"
              onClick={onReferClick}
            >
              Refer Now
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full h-full">
            <img src={accordina} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
