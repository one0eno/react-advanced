import React, { useState, ChangeEvent } from "react";

export const UseForm = <T>(initState: T) => {
  const [formData, setformData] = useState(initState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setformData((prev: T) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setformData({ ...initState });
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    ...formData,

    formData,

    onChange,
    resetForm,
    isValidEmail,
  };
};
