import React from "react";

const Card = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-white to-pink-100 font-sans overflow-hidden">

      {/* ================= TOP SECTION ================= */}
      <section className="min-h-screen flex flex-col lg:flex-row">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8 py-16 text-center">

          {/* TOP IMAGE */}
          <img
            src="/i10.png"
            alt="birthday"
            className="w-52 h-52 object-cover rounded-full mb-6 border-[5px] border-white shadow-[0_10px_25px_rgba(255,105,135,0.3)] hover:scale-105 transition duration-300"
          />

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mb-6">
            🎉 Happy Birthday Pinkuu 🎂
          </h1>

          {/* TEXT */}
          <p className="text-gray-600 text-lg leading-9 max-w-xl">
            Wishing you a day filled with love, laughter, and all your favorite things 💖
            You deserve all the happiness in the world today and always.
            <br /><br />
            May your smile shine brighter than ever and your dreams come true 🌸
            Stay amazing, stay you… because you’re truly special 💕
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative py-20">

          {/* PHOTO FRAME */}
          <div className="relative bg-white p-4 rounded-[25px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] animate-[float_4s_ease-in-out_infinite]">

            {/* MAIN IMAGE */}
            <img
              src="/i7.png"
              alt="Birthday"
              className="w-[250px] md:w-[300px] rounded-2xl"
            />

            {/* SMALL ROUND IMAGE */}
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
              <img
                src="/i11.png"
                alt="cute"
                className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg hover:scale-110 transition duration-300"
              />
            </div>

          </div>

        </div>

      </section>

      {/* ================= BEST MOMENTS ================= */}
      <section className="w-full py-28 px-6 bg-gradient-to-br from-pink-50 to-white text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-pink-500 mb-16">
          ✨ Best Moments ✨
        </h2>

        {/* CONTAINER */}
        <div className="flex flex-wrap justify-center gap-14">

          {/* CARD 1 */}
          <div className="relative w-[300px] bg-white p-4 rounded-[25px] shadow-lg hover:-translate-y-3 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,105,135,0.3)] transition duration-300">

            <div className="absolute -top-4 -right-3 text-3xl">
              💖
            </div>

            <img
              src="/i12.png"
              alt="moment"
              className="w-full h-[240px] object-cover rounded-2xl"
            />

            <p className="mt-5 text-pink-500 font-medium text-lg">
              A memory I’ll never forget 💕
            </p>

          </div>

          {/* CARD 2 */}
          <div className="relative w-[300px] bg-white p-4 rounded-[25px] shadow-lg hover:-translate-y-3 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,105,135,0.3)] transition duration-300">

            <div className="absolute -top-4 -right-3 text-3xl">
              💖
            </div>

            <img
              src="/i13.png"
              alt="moment"
              className="w-full h-[240px] object-cover rounded-2xl"
            />

            <p className="mt-5 text-pink-500 font-medium text-lg">
              The happiest time together 💖
            </p>

          </div>

        </div>

      </section>

      <div className="flex justify-center mt-10">
  <a href="/GiftsForYou">
    <button className="group relative px-10 py-4 bg-pink-500 text-white text-lg font-semibold rounded-full overflow-hidden shadow-xl hover:shadow-pink-300 transition duration-300 hover:scale-105">

      <span className="relative z-10 flex items-center gap-2">
        Next Page 💖
      </span>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></div>

    </button>
  </a>
</div>

      {/* FLOAT ANIMATION */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

    </div>
  );
};

export default Card;