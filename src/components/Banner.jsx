
const Banner = () => {
  return (
    <div className="relative z-0 h-[500px] md:h-[800px] bg-banner-2 bg-no-repeat bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/60"></div>

      {/* Content */}
      <div className="md:w-2/3 mx-auto relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-gray-300">
        <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-xl ">
          Empower Your Learning Journey in Just 10 Minutes
        </h1>
        <p className="text-xs md:text-sm max-w-2xl mb-6 text-gray-400 drop-shadow-sm">
          Join as a student or tutor and unlock fast, focused study sessions —
          anytime, anywhere.
        </p>
        <button
          className="bg-[#160929] text-gray-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;