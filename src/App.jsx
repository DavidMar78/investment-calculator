import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import {useRef, useState} from "react";

function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 10
  });

  const inputValid = userInput.duration >= 1;

  function handleChange(inputId, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputId]: +newValue
      }
    })
  }

  return (
      <>
        <Header />
        <UserInput onChangeInput={handleChange} userInput={userInput} />
        {!inputValid && (
            <p className="center">Please enter a duration greater than zero.</p>
        )}
        {inputValid && <Results userInput={userInput} />}

      </>
  )
}

export default App
