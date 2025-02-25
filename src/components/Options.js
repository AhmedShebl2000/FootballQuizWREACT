function Options({ question, answer, dispatch }) {
  return (
    <div>
      {question.options.map((option, i) => (
        <button
          key={question}
          className={`option ${answer === i ? "answer" : ""} 
          ${
            answer !== null
              ? i === question.correctOption
                ? "correct"
                : "incorrect"
              : ""
          }`}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: i });
          }}
          disabled={answer !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
