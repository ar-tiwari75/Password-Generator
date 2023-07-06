import { useState } from "react";
const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (checkboxdata, length) => {
    let charset = "",
      generatedPassword = "";

    const selectedOption = checkboxdata.filter((checkbox) => checkbox.state);

    if (selectedOption.length === 0) {
      setErrorMessage("Select atleast one option.");
      setPassword("");
      return;
    }

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMessage("");
  };

  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
