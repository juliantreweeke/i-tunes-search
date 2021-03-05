import { useState } from "react";

const useForm = (callback, initialFieldValues) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    callback(inputs);
    setInputs(initialFieldValues);
  };

  const handleKeyPress = (event) => {
    if (event?.key === "Enter") {
      event.preventDefault();
      event.target.value = "";
      callback(inputs);
      setInputs(initialFieldValues);
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleInputChange,
    handleKeyPress,
    handleSubmit,
    inputs,
  };
};

export default useForm;
