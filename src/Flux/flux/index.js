import React, {useState, useEffect } from 'react';
// Flux 实现（不使用库，手动实现基础结构）
const Dispatcher = {
  callbacks: [],
  register(callback) {
    this.callbacks.push(callback);
  },
  dispatch(action) {
    this.callbacks.forEach(callback => callback(action));
  }
};

const Store = {
  state: { count: 0 },
  getState() {
    return this.state;
  },
  update(action) {
    if (action.type === 'INCREMENT') {
      this.state.count += 1;
    } else if (action.type === 'DECREMENT') {
      this.state.count -= 1;
    }
  }
};

Dispatcher.register((action) => Store.update(action));

function increment() {
  Dispatcher.dispatch({ type: 'INCREMENT' });
}

function decrement() {
  Dispatcher.dispatch({ type: 'DECREMENT' });
}

// React Component
export function FluxCounter() {
  const [count, setCount] = useState(Store.getState().count);

  useEffect(() => {
    const handleUpdate = () => setCount(Store.getState().count);
    Dispatcher.register(handleUpdate);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
