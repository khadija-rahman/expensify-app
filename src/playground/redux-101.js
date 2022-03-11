import { createStore } from "redux";

// {{{    const add = (data) => {
//   return data.a + data.b;
// };
// console.log(add({ a: 1, b: 12 }));   }}}
/////same as...

// const add = ({ a, b }, c) => {
//   a + b + c;
// };
// console.log(add({ a: 1, b: 12 }, 100));

// Action generator - function that returns action object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

// const incrementCount = (payload = {}) => ({
//   type: "INCREMENT",
//   incrementBy:
//     typeof payload.incrementBy === "number" ? payload.incrementBy : 1,
// });

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});
const resetCount = () => ({
  type: "RESET",
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count,
});

// this function is called a reducer. Actions specify how something happend
// but they dont specify how the application state changes in response.
// it is the reducer that determines what do based on the action
// 1. Reducers are pure functions - the output is only determind by the input
// 2. Never change state or action
////////////////////REDUCERS/////////////////////////////////
///////////////////COUNT REDUCER////////////////////////////

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};
const store = createStore(countReducer);

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
//it calls the return value of subscribe which in turn stops subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();
// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 4,
// });
store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//   type: "INCREMENT",
// });

store.dispatch(resetCount());
// store.dispatch({
//   type: "RESET",
// });

// store.dispatch({
//   type: "DECREMENT",
// });

store.dispatch(setCount({ count: -100 }));
// store.dispatch({
//   type: "SET",
//   count: 101,
// });
console.log(store.getState());
