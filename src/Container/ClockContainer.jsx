// Clock/index.js
import React, { useState, useEffect } from 'react';
import Clock from './Clock.jsx'; // <-- 展示型组件

const ClockContainer = ({ time }) => {
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function updateTime() {
    setCurrentTime(new Date(currentTime.getTime() + 1000));
  }

  const extractTime = (time) => {
    return {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    };
  };

  return <Clock {...extractTime(currentTime)} />;
};

export default ClockContainer;