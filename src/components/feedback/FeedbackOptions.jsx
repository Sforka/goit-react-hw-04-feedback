import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, dispatch }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          className={option}
          type="button"
          onClick={() => dispatch({ type: `${option}`, add: 1 })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  dispatch: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
