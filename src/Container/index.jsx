import React, { useState, useEffect } from 'react';


function Clock({ time }) {
  // 使用 useState 初始化时间状态
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    // 创建一个计时器，每秒更新一次时间
    const interval = setInterval(updateTime, 1000);

    // 在组件卸载时清除计时器
    return () => clearInterval(interval);
  }, [currentTime]);

  // 更新时间的方法
  function updateTime() {
    setCurrentTime(new Date(currentTime.getTime() + 1000));
  }

  // 格式化时间的方法
  function formatTime(time) {
    var [hours, minutes, seconds] = [
      time.getHours(),
      time.getMinutes(),
      time.getSeconds(),
    ].map(num => (num < 10 ? '0' + num : num));

    return { hours, minutes, seconds };
  }

  // 获取格式化后的时间
  const timeFormatted = formatTime(currentTime);

  return (
    <h1>
      {timeFormatted.hours} : {timeFormatted.minutes} : {timeFormatted.seconds}
    </h1>
  );
}
export default Clock;

