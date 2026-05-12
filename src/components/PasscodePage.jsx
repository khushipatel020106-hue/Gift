import React, { useState } from "react";

const PasscodePage = () => {

  const [inputs, setInputs] = useState(["", "", "", ""]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);

  const correctCode = "1234";

  const press = (num) => {
    if (currentIndex < inputs.length) {

      const updated = [...inputs];
      updated[currentIndex] = num;

      setInputs(updated);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const backspace = () => {
    if (currentIndex > 0) {

      const updated = [...inputs];
      updated[currentIndex - 1] = "";

      setInputs(updated);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const reset = () => {
    setInputs(["", "", "", ""]);
    setCurrentIndex(0);
    setShowNext(false);
  };

  const checkCode = () => {

    const entered = inputs.join("");

    if (entered === correctCode) {
      alert("Unlocked 💗");
      setShowNext(true);

    } else {
      alert("Wrong Code ❌");
      reset();
    }
  };

  const goNext = () => {
    window.location.href = "/camera";
  };

  const filled = inputs.every((i) => i !== "");

  return (

    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-white flex items-center justify-center overflow-hidden relative font-sans">

      {/* FLOATING HEARTS */}
      <div
        className="heart left-[10%]"
        style={{ animationDelay: "0s" }}
      >
        💗
      </div>

      <div
        className="heart left-[30%]"
        style={{ animationDelay: "1s" }}
      >
        💖
      </div>

      <div
        className="heart left-[50%]"
        style={{ animationDelay: "2s" }}
      >
        💘
      </div>

      <div
        className="heart left-[70%]"
        style={{ animationDelay: "3s" }}
      >
        💕
      </div>

      <div
        className="heart left-[90%]"
        style={{ animationDelay: "4s" }}
      >
        💓
      </div>

      {/* MAIN CONTAINER */}
      <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">

        {/* IMAGE SECTION */}
        <div className="relative bg-white p-4 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1)]">

          <img
            src="/image.png"
            alt="love"
            className="w-[220px] rounded-xl"
          />

          {/* TEDDY */}
          <div className="absolute -bottom-7 left-0/1 -translate-x-0/1 text-7xl teddy">
            🧸
          </div>

        </div>

        {/* PASSCODE BOX */}
        <div className="text-center">

          <h2 className="text-3xl font-bold text-pink-600 mb-5">
            Enter Passcode 💗
          </h2>

          {/* INPUT BOXES */}
          <div className="flex gap-3 justify-center mb-5">

            {inputs.map((value, index) => (

              <input
                key={index}
                value={value}
                readOnly
                className="w-[45px] h-[50px] text-center text-xl border-2 border-pink-200 rounded-xl outline-none"
              />

            ))}

          </div>

          {/* KEYPAD */}
          <div className="grid grid-cols-3 gap-3 justify-center">

            {[1,2,3,4,5,6,7,8,9].map((num) => (

              <button
                key={num}
                onClick={() => press(num.toString())}
                className="h-[65px] w-[65px] rounded-full bg-white text-pink-600 text-xl shadow-md hover:bg-pink-100 transition"
              >
                {num}
              </button>

            ))}

            {/* BACKSPACE */}
            <button
              onClick={backspace}
              className="h-[65px] w-[65px] rounded-full bg-white text-pink-600 text-xl shadow-md hover:bg-pink-100 transition"
            >
              *
            </button>

            {/* 0 */}
            <button
              onClick={() => press("0")}
              className="h-[65px] w-[65px] rounded-full bg-white text-pink-600 text-xl shadow-md hover:bg-pink-100 transition"
            >
              0
            </button>

            {/* CHECK */}
            <button
              onClick={checkCode}
              className="h-[65px] w-[65px] rounded-full bg-white text-pink-600 text-xl shadow-md hover:bg-pink-100 transition"
            >
              #
            </button>

          </div>

          {/* HINT */}
          <p className="mt-4 text-gray-500">
            hint: it's our fav code 💕
          </p>

          {/* UNLOCK BUTTON */}
          {filled && (
            <button
              onClick={checkCode}
              className="mt-5 px-7 py-3 rounded-full bg-pink-400 hover:bg-pink-500 text-white font-semibold transition"
            >
              Unlock 💗
            </button>
          )}

          {/* NEXT BUTTON */}
          {showNext && (
            <button
              onClick={goNext}
              className="mt-4 ml-3 px-7 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold transition"
            >
              Next ➜
            </button>
          )}

        </div>

      </div>

      {/* CUSTOM CSS */}
      <style>
        {`

          .heart{
            position:absolute;
            bottom:-50px;
            color:#ff6b9a;
            font-size:22px;
            animation: floatUp 6s linear infinite;
            opacity:0;
          }

          @keyframes floatUp{

            0%{
              transform: translateY(0);
              opacity:0;
            }

            20%{
              opacity:1;
            }

            80%{
              opacity:1;
            }

            100%{
              transform: translateY(-120vh);
              opacity:0;
            }
          }

          .teddy{
            animation:bounce 2s infinite;
          }

          @keyframes bounce{

            0%,100%{
              transform:translateX(-50%) translateY(0);
            }

            50%{
              transform:translateX(-50%) translateY(-10px);
            }
          }

        `}
      </style>

    </div>
  );
};

export default PasscodePage;