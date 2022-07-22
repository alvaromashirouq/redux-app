import { useSelector } from 'react-redux';

export const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main>
      <h1>Redux Counter</h1>
      <div>--- COUNTER VALUE</div>
      <button onClick={toggleCounterHandler}>Toggle counter</button>
    </main>
  );
};
