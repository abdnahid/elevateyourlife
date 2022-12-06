import { useState, useEffect } from "react";

interface TimeData {
  timelimit: number;
}

const Countdown = (props: TimeData) => {
  const [timer, setTimer] = useState(props.timelimit);
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);
  const handleTimer = (time: number) => {
    const hour = Math.floor(time / 3600000);
    var remTime = time - hour * 3600000;
    const min = Math.floor(remTime / 60000);
    remTime = remTime - min * 60000;
    const sec = Math.floor(remTime / 1000);
    setH(hour);
    setM(min);
    setS(sec);
    setTimer(time - 1000);
  };
  setTimeout(() => {
    if (timer >= 0) {
      handleTimer(timer);
    }
  }, 1000);

  return (
    <div>
      hour: {h} minute: {m} seconds: {s}
    </div>
  );
};

export default Countdown;
