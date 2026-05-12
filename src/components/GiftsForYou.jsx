import React from "react";

const GiftsForYou = () => {

  const openCamera = () => {
    window.location.href = "/camera1";
  };

  const openCard = () => {
    window.location.href = "/card";
  };

  const openSong = () => {
    window.location.href = "/song";
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-300 via-pink-100 to-white flex flex-col items-center justify-center text-center px-6 font-sans overflow-hidden">

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mb-16 animate-pulse">
        🎁 Gifts for you
      </h1>

      {/* GIFT CONTAINER */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">

        {/* CAMERA CARD */}
        <div
          onClick={openCamera}
          className="w-[300px] bg-white rounded-[25px] p-4 shadow-2xl cursor-pointer transition duration-300 hover:-translate-y-3 hover:scale-105"
        >

          <img
            src="/camera.png"
            alt="camera"
            className="w-full rounded-[18px]"
          />

          <p className="mt-4 text-pink-500 font-semibold text-lg">
            Camera
          </p>

        </div>

        {/* CARD */}
        <div
          onClick={openCard}
          className="w-[300px] bg-white rounded-[25px] p-4 shadow-2xl cursor-pointer transition duration-300 hover:-translate-y-3 hover:scale-105"
        >

          <img
            src="/latter.png"
            alt="card"
            className="w-full rounded-[18px]"
          />

          <p className="mt-4 text-pink-500 font-semibold text-lg">
            Card
          </p>

        </div>

        {/* SONG */}
        <div
          onClick={openSong}
          className="w-[300px] bg-white rounded-[25px] p-4 shadow-2xl cursor-pointer transition duration-300 hover:-translate-y-3 hover:scale-105"
        >

          <img
            src="/song.png"
            alt="song"
            className="w-full rounded-[18px]"
          />

          <p className="mt-4 text-pink-500 font-semibold text-lg">
            Song
          </p>

        </div>

      </div>

      {/* FOOTER */}
      <p className="mt-16 text-pink-400 text-xl animate-bounce">
        ✨ Click any of this ✨
      </p>

    </div>
  );
};

export default GiftsForYou;