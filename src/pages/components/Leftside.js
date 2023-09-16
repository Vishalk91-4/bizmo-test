import React, { useEffect, useState } from "react";
import A from "./a";
import B from "./b";

function Leftside({ setLeftNav }) {
  const [isClicked, setIsClicked] = useState("A");

  useEffect(() => {
    setLeftNav("");
  }, [isClicked]);

  return (
    <>
      <div className="flex fixed h-screen left-0">
        <aside>
          <div className="flex  flex-col items-center h-screen w-14 pt-5 py-8 bg-white">
            <nav className="flex flex-col items-center flex-1 space-y-8">
              <button
                onClick={() => setIsClicked("A")}
                className=" p-2 inline-block text-gray-500 rounded-lg focus:text-gray-700 focus:bg-gray-100 hover:bg-gray-200"
              >
                A
              </button>

              <button
                onClick={() => setIsClicked("B")}
                className="p-2 inline-block text-gray-500 rounded-lg focus:text-gray-700 focus:bg-gray-100 hover:bg-gray-200"
              >
                B
              </button>
            </nav>
          </div>
        </aside>

        <div className=" px-5 py-4 overflow-y-auto bg-white border-l border-r w-52">
          {isClicked === "A" && <A setLeftNav={setLeftNav} />}
          {isClicked === "B" && <B />}
        </div>
      </div>
    </>
  );
}

export default Leftside;
