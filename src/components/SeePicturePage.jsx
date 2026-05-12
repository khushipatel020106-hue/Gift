import React from "react";

const SeePicturePage = () => {

  const goNext = () => {
    window.location.href = "/giftsforyou";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-pink-200 to-white flex flex-col items-center justify-center overflow-hidden relative font-sans">

      {/* MAIN CONTAINER */}
      <div className="flex items-center justify-center gap-16 z-10">

        {/* TEXT */}
        <div className="text-white text-3xl font-semibold leading-relaxed w-[220px]">
          who is this Handsom 💕
        </div>

        {/* POLAROID IMAGE */}
        <div className="bg-white p-3 rounded-2xl shadow-2xl rotate-[-5deg] hover:rotate-0 transition duration-500">

          {/* IMAGE FROM PUBLIC FOLDER */}
          <img
            src="/image1.png"
            alt="cute"
            className="w-52 rounded-xl"
          />

        </div>

      </div>

      {/* CAMERA CARD BUTTON */}
      <div
        onClick={goNext}
        className="absolute bottom-20 bg-pink-300 w-[260px] h-[120px] rounded-[25px] shadow-2xl flex items-center justify-center text-white text-2xl font-semibold cursor-pointer hover:scale-105 transition duration-300 "
      >
        Next 💗
      </div>

      {/* SPARKLES */}
      <div className="absolute top-32 right-52 text-white text-3xl animate-pulse">
        ✨
      </div>

      <div className="absolute bottom-52 left-52 text-white text-3xl animate-pulse">
        ✨
      </div>

      {/* FLOAT ANIMATION */}
      <style>
        {`
          @keyframes float {
            0%,100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>

    </div>
  );
};

export default SeePicturePage;