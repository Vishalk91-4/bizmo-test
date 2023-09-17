import React, { useState } from 'react';
import X from './x';
import Y from './y';
import Rightside from './Rightside';

function A() {
  const [isClicked, setIsClicked] = useState(null);
  let content = null;

  if (isClicked === 'X') {
    content = <X />;
  } else if (isClicked === 'Y') {
    content = <Y />;
  }
   
  return (
    <nav className="mt-4 -mx-3 space-y-6 ">
    <div className="space-y-3 ">

        <button
          onClick={() => setIsClicked('X')}
          className=" w-full hover:bg-gray-200 flex items-center px-3 py-2 text-gray-600 transform rounded-lg  hover:text-gray-800">
        
            <span className="mx-2 text-sm font-medium">X</span>

        </button>

        <button onClick={() => setIsClicked('Y')} className="w-full hover:bg-gray-200 flex items-center px-3 py-2 text-gray-600 transform rounded-lg  hover:text-gray-800" >

            <span className="mx-2 text-sm font-medium">Y</span>
        </button>
   
    </div>
    <Rightside content={content} />

 
</nav>




  )
}

export default A