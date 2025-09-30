import { useContext } from "react";
import { TimesContext } from "../context/TimesContex";

export function useAvailableTimes() {
  const context = useContext(TimesContext);
  if (!context) {
    throw new Error("useAvailableTimes must be used within a TimesProvider");
  }

  const { state, dispatch } = context;

  const addTime = (time) => dispatch({ type: "ADD_TIME", payload: time });
  const removeTime = (time) => dispatch({ type: "REMOVE_TIME", payload: time });
  const setTimes = (date) => dispatch({ type: "SET_TIMES", payload: date});

  return {
    availableTimes: state.availableTimes,
    addTime,
    removeTime,
    setTimes,
  };
}
