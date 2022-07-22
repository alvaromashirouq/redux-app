import { useDispatch, useSelector } from 'react-redux';

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };
  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };
  const incrementBy5Handler = () => {
    dispatch({ type: 'increase', amount: 5 });
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={incrementBy5Handler}>increment by 5</button>
        <button onClick={incrementHandler}>increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle counter</button>
    </main>
  );
};
