import "./buttonPreview.css";
import { connect } from "react-redux";
import { useRef, useEffect } from "react";
// import { useState } from "react";
import * as actionTypes from './../../store/actions/actions'

const ButtonPreview = props => {
  const inputRef = useRef(null);

  const customIncrement = () => {
    const incrementValue = inputRef.current.value;
    props.customIncrement(incrementValue);
  };

  useEffect(()=>{
    console.log('useeffect hook');
    inputRef.current.focus();
  },[]);

  return (
    <div>
      <button
        className="increment"
        onClick={() => {
          props.incrementCount();
        }}
      >
        increment
      </button>
      <button
        className="decrement"
        onClick={() => {
          props.decrementCount();
        }}
      >
        decrement
      </button>
      <input name="value" className="input-value" ref={inputRef} />
      <button
        className="customIncrement"
        onClick={e => {
          customIncrement();
        }}
      >
        custom increment
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCount: () => dispatch(actionTypes.increment()),
    decrementCount: () => dispatch(actionTypes.decrement()),
    customIncrement: value =>
      dispatch(actionTypes.custom_async_increment(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPreview);
