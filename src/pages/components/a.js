import React from "react";

function A({ setLeftNav }) {
  return (
    <nav class="mt-4 -mx-3 space-y-6 ">
      <div class="space-y-3 ">
        <button
          class=" w-full hover:bg-gray-200 flex items-center px-3 py-2 text-gray-600 transform rounded-lg  hover:text-gray-800"
          href="#"
          onClick={() => setLeftNav("X")}
        >
          <span class="mx-2 text-sm font-medium">X</span>
        </button>

        <button
          class="w-full hover:bg-gray-200 flex items-center px-3 py-2 text-gray-600 transform rounded-lg  hover:text-gray-800"
          href="#"
          onClick={() => setLeftNav("Y")}
        >
          <span class="mx-2 text-sm font-medium">Y</span>
        </button>
      </div>
    </nav>
  );
}

export default A;
