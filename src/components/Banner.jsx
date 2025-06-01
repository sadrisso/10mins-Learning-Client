
const Banner = () => {
  return (
    <div className="relative z-0 h-[500px] md:h-[800px] bg-banner-2 bg-no-repeat bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-xl">
          Empower Your Learning Journey in Just 10 Minutes
        </h1>
        <p className="text-base md:text-lg max-w-2xl mb-6 text-gray-200 drop-shadow-sm">
          Join as a student or tutor and unlock fast, focused study sessions —
          anytime, anywhere.
        </p>
        <button
          className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;