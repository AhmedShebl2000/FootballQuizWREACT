import { useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Question from "./Question";
import questions from "../data/questions";
import Finishedscreen from "./Finishedscreen";
import ChoosingDiff from "./ChoosingDiff";

const initialState = {
  /* notPlaying, loading, playing */
  status: "notPlaying",
  questions: [],
  /* index of question */
  index: null,
  answer: null,
  points: 0,
  secondsRemaining: 300,
};

function reducer(state, action) {
  switch (action.type) {
    case "homeScreen":
      return {
        ...state,
        status: "notPlaying",
      };
    case "loadingScreen":
      return {
        ...state,
        status: "loading",
      };
    case "choosingDifficulty":
      return {
        ...state,
        status: "choosing",
      };
    case "start":
      return {
        ...state,
        status: "playing",
        questions: action.payload,
        index: 0,
      };
    case "newAnswer":
      const currentQuestion = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === currentQuestion.correctOption
            ? state.points + currentQuestion.points
            : state.points,
      };
    case "nextQuestion":
      if (state.index === questions.length - 1) {
        return {
          ...state,
          status: "finished",
        };
      }

      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "tick":
      if (state.secondsRemaining === 0) {
        return {
          ...state,
          status: "finished",
        };
      }
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
      };
    case "restart":
      return {
        ...initialState,
      };
    default: {
      throw new Error("Unknown action");
    }
  }
}

function App() {
  const [
    { status, questions, index, answer, points, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const questionNum = questions.length;
  const totalPoints = questions.reduce((prev, curr) => prev + curr.points, 0);
  return (
    <main
      className="App"
      style={{
        backgroundImage: "url('/images/header.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      {status === "notPlaying" && <Header dispatch={dispatch} />}
      {status === "loading" && <Loader />}
      {status === "choosing" && <ChoosingDiff dispatch={dispatch} />}
      {status === "playing" && (
        <>
          <Question
            question={questions[index]}
            index={index}
            answer={answer}
            dispatch={dispatch}
            questionNum={questionNum}
            points={points}
            totalPoints={totalPoints}
            secondsRemaining={secondsRemaining}
          >
            {answer != null && (
              <div className="my-button">
                <button
                  className="btn btn-next"
                  onClick={() => {
                    dispatch({ type: "nextQuestion" });
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </Question>
        </>
      )}
      {status === "finished" && (
        <Finishedscreen
          points={points}
          totalPoints={totalPoints}
          dispatch={dispatch}
        />
      )}
    </main>
  );
}

export default App;
