import React from "react";

const Camera1 = () => {
  return (
    <div className="bg-gradient-to-br from-pink-100 to-white font-sans overflow-hidden">

      {/* ================= TOP SECTION ================= */}
      <section className="min-h-screen flex flex-col lg:flex-row">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 px-8 md:px-16 py-20 flex flex-col justify-center">

          <h1 className="text-4xl md:text-5xl italic font-bold text-pink-500 leading-tight mb-8">
            The boy who proved <br />
            "soulmates" are real.. 💖
          </h1>

          <p className="text-gray-700 text-lg leading-9 max-w-xl">
            The person with whom you have an immediate connection the moment you meet.
            A bond so strong that you are drawn to them in a way you’ve never experienced before.
            <br /><br />

            As this connection grows, you begin to feel a love so deep, strong, and real…
            that you start to wonder if you ever truly loved anyone before. 💕
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-20">

          <div className="grid grid-cols-2 gap-6">

            {/* IMAGE 1 */}
            <div className="bg-white p-3 rounded-2xl shadow-xl rotate-[-3deg] hover:scale-105 transition duration-300">
              <img
                src="/i1.png"
                alt="memory"
                className="w-[160px] h-[160px] object-cover rounded-xl"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="bg-white p-3 rounded-2xl shadow-xl rotate-[3deg] hover:scale-105 transition duration-300">
              <img
                src="/i2.png"
                alt="memory"
                className="w-[160px] h-[160px] object-cover rounded-xl"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="bg-white p-3 rounded-2xl shadow-xl rotate-[-3deg] hover:scale-105 transition duration-300">
              <img
                src="/i3.png"
                alt="memory"
                className="w-[160px] h-[160px] object-cover rounded-xl"
              />
            </div>

            {/* IMAGE 4 */}
            <div className="bg-white p-3 rounded-2xl shadow-xl rotate-[3deg] hover:scale-105 transition duration-300">
              <img
                src="/i4.png"
                alt="memory"
                className="w-[160px] h-[160px] object-cover rounded-xl"
              />
            </div>

          </div>

        </div>

      </section>

      {/* ================= LOVE LETTER SECTION ================= */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-[radial-gradient(circle_at_top,_#ffe4ec,_#ffffff)]">

        <div className="relative max-w-3xl bg-gradient-to-br from-white to-pink-50 rounded-[30px] px-8 md:px-12 py-14 shadow-[0_15px_40px_rgba(255,105,135,0.25)] overflow-hidden animate-fadeIn">

          {/* FLOATING HEARTS */}
          <div className="absolute top-4 left-5 text-2xl opacity-70 animate-bounce">
            💖
          </div>

          <div className="absolute bottom-5 right-5 text-2xl opacity-70 animate-pulse">
            💗
          </div>

          <div className="absolute top-1/2 -left-2 text-2xl opacity-70 animate-bounce">
            💕
          </div>

          {/* TITLE */}
          <h2 className="text-3xl font-bold text-pink-500 text-center mb-8">
            💌 A Letter Just For You
          </h2>

          {/* TOP IMAGE */}
          <img
            src="/i5.png"
            alt="love"
            className="w-full max-h-[350px] object-contain rounded-2xl mb-8 hover:scale-105 transition duration-300"
          />

          {/* LETTER TEXT */}
          <p className="text-gray-600 text-lg leading-9 text-center">
            Hey Pinkuu 💕
            <br /><br />

            I don’t say this enough, but thank you…
            Thank you for being in my life and making everything feel so special.

            <br /><br />

            You walked into my world so quietly,
            yet changed everything in the most beautiful way.

            <br /><br />

            Your smile feels like comfort,
            your presence feels like home.
          </p>

          {/* SECOND IMAGE */}
          <img
            src="/i6.png"
            alt="love"
            className="w-full max-h-[350px] object-contain rounded-2xl my-10 hover:scale-105 transition duration-300"
          />

          {/* SECOND PARAGRAPH */}
          <p className="text-gray-600 text-lg leading-9 text-center">
            With you, even the simplest moments become unforgettable.
            And honestly… I wouldn’t trade this feeling for anything.

            <br /><br />

            I’m really lucky to have you 💗
            Always stay the way you are… because that’s perfect to me.
          </p>

          {/* SIGN */}
          <div className="mt-10 text-center text-pink-500 text-xl font-semibold">
            — Yours Tennu 💖
          </div>

        </div>

      </section>

      {/* NEXT BUTTON */}
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


    </div>
  );
};

export default Camera1;