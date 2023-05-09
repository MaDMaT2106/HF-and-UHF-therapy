import { createContext, useState } from 'react';

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  return (
    <TimeContext.Provider
      value={{
        time,
        setTime,
        currentIndex,
        setCurrentIndex,
        intervalId,
        setIntervalId,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export default TimeContext;
