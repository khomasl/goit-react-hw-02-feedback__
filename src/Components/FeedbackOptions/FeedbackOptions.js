import PropTypes from 'prop-types'
import s from './FeedbackOptions.module.css'

export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <button
        className={s.btn}
        type="button"
        name="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={s.btn}
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={s.btn}
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </>
  )
}

FeedbackOptions.defaultProps = {
  onLeaveFeedback: '',
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
}
