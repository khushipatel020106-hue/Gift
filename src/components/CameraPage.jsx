import React from "react";

const CameraPage = () => {

  const goNext = () => {
    window.location.href = "/seepicture";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-white flex items-center justify-center font-sans px-4 overflow-visible">

      <div className="text-center">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-pink-500 mb-3">
          Wow, that looks sooo cute 💗
        </h1>

        {/* SUBTITLE */}
        <p className="text-pink-600 text-lg mb-10">
          Get ready to take a picture 📸
        </p>

        {/* CAMERA CARD */}
        <div className="relative inline-block bg-white p-8 rounded-[30px] shadow-2xl animate-[float_4s_ease-in-out_infinite]">

          {/* CAMERA IMAGE */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/1042/1042390.png"
            alt="camera"
            className="w-56 object-contain"
          />

          {/* SPARKLES */}
          <div className="absolute top-3 right-5 text-2xl animate-pulse">
            ✨
          </div>

          <div className="absolute bottom-5 left-4 text-2xl animate-pulse">
            💖
          </div>

        </div>

        {/* BUTTON */}
        <div>
          <button
            onClick={goNext}
            className="mt-8 px-8 py-3 bg-pink-400 hover:bg-pink-500 text-white rounded-full text-lg font-semibold shadow-lg transition duration-300 hover:scale-105"
          >
            see picture 💕
          </button>
        </div>

      </div>

      {/* FLOAT ANIMATION */}
      <style>
        {`
          @keyframes float {
            0%,100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-8px);
            }
          }
        `}
      </style>

    </div>
  );
};

export default CameraPage;