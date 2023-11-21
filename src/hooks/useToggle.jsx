import React, { useState } from "react";

const useToggle = (defaultValue) => {
  const [effect, setEffect] = useState(defaultValue);
  const auto = () => {
    setEffect(!effect);
  };
  const close = () => {
    setEffect(defaultValue);
  };
  return { auto, close, effect };
};

export default useToggle;
