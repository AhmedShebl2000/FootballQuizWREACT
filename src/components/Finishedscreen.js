function Finishedscreen({ points, totalPoints, dispatch }) {
  return (
    <div className="finished">
      <h1>All done!</h1>
      <h2>
        You got {points} points out of {totalPoints} possible!
      </h2>
      <button
        className="btn btn-restart"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default Finishedscreen;
