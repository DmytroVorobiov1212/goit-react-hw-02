import clsx from 'clsx';
import s from './Options.module.css';

const Options = ({ btnFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={s.container}>
      <div className={clsx(s.section, s.btnFlex)}>
        <button className={s.btn} onClick={() => btnFeedback('good')}>
          Good
        </button>
        <button className={s.btn} onClick={() => btnFeedback('neutral')}>
          Neutral
        </button>
        <button className={s.btn} onClick={() => btnFeedback('bad')}>
          Bad
        </button>
        {totalFeedback > 0 && (
          <button className={s.btn} onClick={resetFeedback}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Options;
