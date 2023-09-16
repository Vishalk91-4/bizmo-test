import React, { useState } from "react";
import Leftside from "./components/Leftside";
import Rightside from "./components/Rightside";
export default function Index() {
  const [leftNav, setLeftNav] = useState("");

  return (
    <div>
      <Leftside setLeftNav={setLeftNav} />
      <Rightside leftNav={leftNav} />
    </div>
  );
}
