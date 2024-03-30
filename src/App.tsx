import "./App.css";
import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier: any, newValue: any) {
    setUserInput((prevUserInput: any) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <UserInput userInput={userInput} onChange={handleChange}></UserInput>
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {inputIsValid && <Result userInput={userInput}></Result>}
    </>
  );
}

export default App;
