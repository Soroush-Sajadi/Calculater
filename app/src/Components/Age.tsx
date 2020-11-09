import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AgeCal from './AgeCal';
import '../Style/Age.css'


const Age = () => {
  const [ brithday, setBirthday ] = useState('');
  const dispatch = useDispatch();

  // const calculateAge = () => {

  // }
  
  return(
    <div className="age-wrapper">
      <input type="date" name ="Birthday" onChange={event => dispatch({type:"AGE", payload: {age: event.target.value}}) } />
      <AgeCal />
    </div>
  )
}

export default Age;