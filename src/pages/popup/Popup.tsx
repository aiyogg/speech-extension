import React, { useEffect } from "react";

export default function Popup(): JSX.Element {
  useEffect(() => {
    console.log("Popup mounted");
  });

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 h-full p-3 bg-white dark:bg-slate-900">
      <header className="w-[100px] flex flex-col items-center justify-center text-white">
        <p className="text-slate-800 dark:text-white">
          test
        </p>
        
      </header>
    </div>
  );
}
