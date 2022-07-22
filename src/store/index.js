import { createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux';

const initialState = {
  counter: 0,
  showCounter: true
};
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    togggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
