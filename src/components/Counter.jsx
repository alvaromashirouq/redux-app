import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store';

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.togggleCounter());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const incrementBy5Handler = () => {
    dispatch(counterActions.increase(5));
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      {showCounter && <div>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={incrementBy5Handler}>increment by 5</button>
        <button onClick={incrementHandler}>increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle counter</button>
    </main>
  );
};
