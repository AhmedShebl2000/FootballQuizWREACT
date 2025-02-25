import { useState } from "react";
import questions from "../data/questions";
import moderateQuestions from "../data/moderateQuestions";
import hardQuestions from "../data/hardQuestions";

function ChoosingDiff({ dispatch }) {
  const [input, setInput] = useState("Easy");

  return (
    <div className="choosing">
      <h1>Choose a difficulty</h1>
      <select value={input} onChange={(e) => setInput(e.target.value)}>
        <option value={"Easy"}>Easy</option>
        <option value={"Moderate"}>Moderate</option>
        <option value={"Difficult"}>Difficult</option>
      </select>
      <button
        className="btn btn-go"
        onClick={() => {
          dispatch({
            type: "start",
            payload:
              input === "Easy"
                ? questions
                : input === "Moderate"
                ? moderateQuestions
                : hardQuestions,
          });
        }}
      >
        Start
      </button>
    </div>
  );
}

export default ChoosingDiff;
