import { useState } from 'react';

function Counter() {
  // initialize state with 0
  const [count, setCount] = useState(0);

  // optional helper functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div
      style={{
        margin: '40px auto',
        padding: '20px',
        border: '2px solid navy',
        borderRadius: '10px',
        width: '250px',
        textAlign: 'center',
        backgroundColor: '#f0f8ff',
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ color: 'navy' }}>Counter App</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>

      <div>
        <button
          onClick={increment}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          +
        </button>

        <button
          onClick={decrement}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          -
        </button>

        <button
          onClick={reset}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor: 'gray',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
