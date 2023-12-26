/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Timer = ({
  seconds,
  setSeconds,
  handleNextTaskTab,
  activeButton,
  activeTab,
  testData,
}) => {
  const [colorClass, setColorClass] = useState("");

  const calculateDashArray = () => {
    const circumference = 2 * Math.PI * 50;
    const percentage = (seconds / 10) * 100;
    return `${(percentage / 100) * circumference} ${circumference}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    if (seconds == 0) {
      handleNextTaskTab();
    }

    if (seconds > 6) {
      setColorClass("green");
    } else if (seconds > 4) {
      setColorClass("yellow");
    } else {
      setColorClass("red");
    }

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="timer-container">
      <div className="timer-svg">
        <svg height="110" width="110">
          <circle
            cx="55"
            cy="55"
            r="50"
            className={`timer-circle ${
              activeTab >= testData[activeButton].tab.length + 1
                ? "green"
                : colorClass
            }`}
            style={{
              strokeDasharray: calculateDashArray(),
            }}
          />
        </svg>
        <div className="timer-text">
          {activeTab >= testData[activeButton].tab.length + 1
            ? "Hello"
            : seconds}
        </div>
      </div>
    </div>
  );
};

export default Timer;
