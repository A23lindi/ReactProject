
import React, { useEffect, useState } from 'react';

const UseEffectFirst = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
setCount((prevCount) => prevCount + 1);
}, 270);
return () => clearInterval(timer);
}, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}   

export default UseEffectFirst;