import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
    
    return options.map((key) => {
        return <Button key={key} name={key} onClick={onLeaveFeedback}>{key}</Button>
    })    
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
};


/*
    return <>
        <button name={keys[0]} onClick={onLeaveFeedback}>{keys[0]}</button>
        <button name={keys[1]} onClick={onLeaveFeedback}>{keys[1]}</button>
        <button name={keys[2]} onClick={onLeaveFeedback}>{keys[2]}</button>
    </>*/