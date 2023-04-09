import { useReducer } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './feedback/FeedbackOptions.jsx';
import { Statistics } from './feedback/Statistics';
import { Notification } from './Notification';

export function App() {
  const [state, dispatch] = useReducer(countReducer, {good: 0,neutral: 0,bad: 0,})
  
  function countReducer (state, action) {
    switch (action.type) { 
      case 'good':
        return { ...state, good: state.good + action.add };
      case 'neutral':
        return { ...state, neutral: state.neutral + action.add };
      case 'bad':
        return { ...state, bad: state.bad + action.add };
      
      default: return
    }
  };

    const countTotalFeedback = () => {
    const total = state.good + state.neutral + state.bad;
    return total;
  };
  
  const countPositiveFeedbackPercentage = () => {
      const percentage =
        Math.trunc((state.good * 100) /
        (state.good + state.neutral + state.bad));
      
      return percentage;
    
  };

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            dispatch={dispatch}
          />
        </Section>
        {countTotalFeedback() > 0 ? (<Section title="Statistics">
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>) :
          (<Notification message="There is no feedback"></Notification>)
        }
      </div>
    );
  
}
