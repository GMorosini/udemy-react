import { useEffect, useState } from 'react'

function Timer() {
  const [segundos, setSegundos] = useState(0);
  
  useEffect( () => {
    const intervalId = setInterval(() => {
        setSegundos((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>Timer: {segundos} segundos.</div>
  );
}

export default Timer;