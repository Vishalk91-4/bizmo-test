import React, { useState } from 'react';
import X from './x';
import Y from './y';



function Rightside({content}) {
  

  return (
    <>
    <aside className='flex fixed h-screen right-0 -z-10' >
      <div className="flex  flex-col items-center h-screen w-32 pt-5 py-8 bg-white ">
        {content}
      </div>
      </aside>
    
  </>

   
  );
}

export default Rightside;
