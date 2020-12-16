import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "OPENCART":
      return {
        isOpen: true,
      };
    case "CLOSECART":
      return {
        isOpen: false,
      };
    default: {
      return state;
    }
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {
    isOpen: false,
  });
  return { globalState, globalDispatch };
};

export default useGlobalState;
