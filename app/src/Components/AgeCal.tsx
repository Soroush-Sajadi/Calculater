import React, { useEffect, useState } from 'react';
import { RootState } from '../Redux/store';
import { useSelector } from 'react-redux';


const AgeCal = () => {
  const [ days, setDays ] = useState(0);
  const [ hours, setHours ] = useState(0);
  const [ minuets, setMinuets ] = useState(0);
  const [ seconds, setSeconds ] = useState(0);
  const birthday = useSelector((state: RootState) => state.age);

  const getdifference = () => {
    const today = new Date()
    const todayDate = (today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()) 
    const date1 = new Date(birthday.age); 
    const date2 = new Date(todayDate);
    const differenceInTime = date2.getTime() - date1.getTime();
    const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    setDays(differenceInDays);
    setHours(differenceInDays * 24);
    setMinuets(differenceInDays * 24 * 60);
    setSeconds(differenceInDays * 24 * 3600);

  }
  useEffect(() => {
    if (birthday.age !== '') {
      getdifference();
    }
  },[birthday])
  return(
    <div>
      {days !== 0 ? <p>You have lived {days} days or {hours} hours or {minuets} minuets or {seconds} seconds so far</p> : null}
    </div>
  )
}

export default AgeCal