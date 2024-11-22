import React, { ComponentProps, useRef, useState } from "react";

interface DateButtonProps extends ComponentProps<"button"> {
  id: string;
}

const DateButton = ({ id }: DateButtonProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleButtonClick = () => {
   
    setIsClicked(!isClicked)
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Selected Date:", e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Visible button */}
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Select Date
      </button>

      {/* Hidden date input */}
      <input
        ref={inputRef}
        id={id}
        type="date"
        onChange={handleDateChange}
        className={`${isClicked ? "" : "hidden"}`}
      />
    </div>
  );
};

export default DateButton;
