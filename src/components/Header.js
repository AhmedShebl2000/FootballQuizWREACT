function Header({ dispatch }) {
  return (
    <div className="cont">
      <h1 className="header">Welcome to the Football Quiz!</h1>
      <h3>Click here to get Started</h3>
      <button
        className="btn"
        onClick={() => {
          dispatch({ type: "loadingScreen" });
          setTimeout(() => {
            dispatch({ type: "choosingDifficulty" });
          }, 2000);
        }}
      >
        Start Now!
      </button>
    </div>
  );
}

export default Header;
