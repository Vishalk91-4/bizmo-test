import React from "react";
import X from "./x";
import Y from "./y";

function Rightside({ leftNav }) {
  return (
    <aside className="flex fixed h-screen right-0">
      <div className="flex  flex-col items-center h-screen w-32 pt-5 py-8 bg-white">
        {leftNav === "X" && <X />}
        {leftNav === "Y" && <Y />}
      </div>
    </aside>
  );
}

export default Rightside;
