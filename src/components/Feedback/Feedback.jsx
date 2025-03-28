import s from './Feedback.module.css';

const Feedback = ({ voting, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.container}>
      <ul className={s.section}>
        <li>
          <span className={s.span}>Good</span>: {voting.good}
        </li>
        <li>
          <span className={s.span}>Neutral</span>: {voting.neutral}
        </li>
        <li>
          <span className={s.span}>Bad</span>: {voting.bad}
        </li>
        <li>
          <span className={s.span}>Total</span>: {totalFeedback}
        </li>
        <li>
          <span className={s.span}>Positive</span>: {positiveFeedback}%
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
