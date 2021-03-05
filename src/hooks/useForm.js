import { useState } from "react";

const useForm = (callback, initialFieldValues) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      event.target.reset();
    }
    callback(inputs);
    setInputs(initialFieldValues);
  };

  const handleKeyPress = (event) => {
    if (event?.key === "Enter") {
      callback(inputs);
      setInputs(initialFieldValues);
      event.target.value = "";
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
