import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGreeting } from '../redux/greeting/greeting';
// import axios from 'axios'

const Greeting = () => {
  const gret = useSelector((state) => state.greetingsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGreeting());
  }, []);

  return (
    <div>
      <h3>This is a random greeting:</h3>
      <p>{gret.greeting}</p>
    </div>
  );
};

export default Greeting;
