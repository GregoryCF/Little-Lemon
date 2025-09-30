import React, { createContext, useReducer } from "react";
import { fetchAPI } from "../api/api";

export function updateTimes(state, action) {
  switch (action.type) {
    case "ADD_TIME":
      if (!state.availableTimes.includes(action.payload)) {
        return {
          ...state,
          availableTimes: [...state.availableTimes, action.payload].sort(),
        };
      }
      return state;

    case "REMOVE_TIME":
      return {
        ...state,
        availableTimes: state.availableTimes.filter(
          (time) => time !== action.payload
        ),
      };

    case "SET_TIMES":
      return {
        ...state,
        availableTimes: fetchAPI(new Date(action.payload)),
      };

    default:
      return state;
  }
}

export function initializeTimes() {
  return { availableTimes: fetchAPI(new Date()) };
}

export const TimesContext = createContext();

export const TimesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return (
    <TimesContext.Provider value={{ state, dispatch }}>
      {children}
    </TimesContext.Provider>
  );
};
