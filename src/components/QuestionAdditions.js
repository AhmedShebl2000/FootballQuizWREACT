function QuestionAdditions({ index, questionNum, points, totalPoints }) {
  return (
    <>
      <progress max={questionNum} value={index + 1} />
      <div className="details">
        <div>
          <p>
            Question: {index + 1}/{questionNum}
          </p>
        </div>
        <div>
          Points: {points}/{totalPoints}
        </div>
      </div>
    </>
  );
}

export default QuestionAdditions;
