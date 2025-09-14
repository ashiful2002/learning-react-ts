import React, { useReducer } from "react";

const Counter = () => {
  const initialState = {
    count: 0,
  };

  type counterStateType = {
    count: number;
  };

  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";
  const RESET = "RESET";

  const reducer = (state: typeof initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return { count: state.count + 1 };
      case RESET:
        return { count: 0 };
      case DECREMENT:
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>this is for useReducer hook</h1>
      <div>
        <h2>count : 0</h2>
        <button>increment</button>
        <button>reset</button>
        <button>decrement</button>
      </div>
    </div>
  );
};

export default Counter;
