const Options = ({ btnFeedback, totalFeedback, resetFeedback }) => {
  return (
    <>
      <button onClick={btnFeedback}>good</button>
      <button onClick={btnFeedback}>neutral</button>
      <button onClick={btnFeedback}>bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>reset</button>}
    </>
  );
};

export default Options;
