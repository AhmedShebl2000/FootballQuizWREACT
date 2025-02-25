import Options from "./Options";
import QuestionAdditions from "./QuestionAdditions";
import Timer from "./Timer";

function Question({
  question,
  index,
  answer,
  dispatch,
  children,
  questionNum,
  points,
  totalPoints,
  secondsRemaining,
}) {
  return (
    <div className="qCont">
      <div className="timer">
        <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
      </div>
      <h3 className="question">
        {index + 1}. {question.question}
      </h3>
      <QuestionAdditions
        index={index}
        questionNum={questionNum}
        points={points}
        totalPoints={totalPoints}
      />

      <Options question={question} answer={answer} dispatch={dispatch} />

      {children}
    </div>
  );
}

export default Question;
