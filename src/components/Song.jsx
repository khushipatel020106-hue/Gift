import React from "react";

const Song = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-pink-200 via-white to-pink-100 font-sans overflow-hidden">

      {/* ================= LEFT SIDE ================= */}
      <div className="w-full lg:w-[60%] flex flex-col justify-center items-start px-8 md:px-16 py-16">

        {/* SONG CARD */}
        <div className="bg-gradient-to-br from-pink-500 to-pink-400 text-white w-[350px] max-w-full p-5 rounded-[25px] flex items-center gap-4 shadow-[0_10px_30px_rgba(255,105,135,0.4)]">

          {/* IMAGE */}
          <img
            src="/i14.png"
            alt="song"
            className="w-16 h-16 rounded-xl object-cover"
          />

          {/* TEXT */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold">
              Darkhaast 💕
            </h2>

            <p className="text-sm opacity-90">
              Arijit Singh, Mithoon, Sunidhi Chauhan
            </p>
          </div>

        </div>

        {/* LYRICS */}
        <div className="mt-8 text-pink-700 text-[15px] leading-8 max-w-lg">
          Ki darkhaast hai ye, jo ayi raat hai ye
          <br /><br />

          Tu meri baahon mein duniya bhula de 💖
          <br /><br />

          Jo ab lamhaat hain ye, bade hi khaas hain ye
          <br /><br />

          Tu meri baahon mein duniya bhula de ✨
        </div>

        {/* BUTTON */}
        {/* <button className="mt-10 bg-white text-pink-500 px-8 py-3 rounded-full text-lg font-semibold shadow-[0_8px_20px_rgba(255,105,135,0.3)] hover:scale-105 transition duration-300">
          Play Song 🎶
        </button> */}

      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="w-full lg:w-[40%] flex justify-center items-center py-16">

        {/* CD CASE */}
        <div className="w-[340px] h-[340px] bg-white rounded-[30px] shadow-[0_15px_40px_rgba(255,105,135,0.3)] flex justify-center items-center">

          {/* CD DISC */}
          <div className="relative w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,_#fff_20%,_#ffb6c1_40%,_#ff4d94_80%)] flex justify-center items-center animate-[spin_6s_linear_infinite]">

            {/* CENTER IMAGE */}
            <img
              src="/i14.png"
              alt="album"
              className="w-[100px] h-[100px] rounded-full object-cover border-4 border-white"
            />

            {/* CENTER HOLE */}
            <div className="absolute w-5 h-5 rounded-full bg-white"></div>

          </div>

        </div>

      </div>

      {/* SPIN ANIMATION */}
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

    </div>
  );
};

export default Song;