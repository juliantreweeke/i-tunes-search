import { useState } from "react";
import { isObjectEmpty } from "../helpers/helpers";

const useForm = (callback) => {
  const [inputs, setInputs] = useState({});

  const handleCallBack = () => {
    if (isObjectEmpty(inputs)){
      return;
    }
    callback(inputs);
    setInputs({});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset && event.target.reset();
    handleCallBack();
  };

  const handleKeyPress = (event) => {
    if (event?.key === "Enter") {
      event.preventDefault();
      event.target.value = "";
      handleCallBack();
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
