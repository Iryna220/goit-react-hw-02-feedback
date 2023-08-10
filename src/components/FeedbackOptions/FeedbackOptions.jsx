const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            <span>{option}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
