import React from 'react';
import { useState } from 'react';

function Count() {
    const [count, setCount] = useState(0)
    sessionStorage.setItem('count', count)
  return <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Nigger</button>
  </div>;
}

export default Count;