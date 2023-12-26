/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from "react";

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const random = ["#fec64f", "#166199", "#374557"].sort(
  () => 0.5 - Math.random()
);
export const resultColors = random;

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};