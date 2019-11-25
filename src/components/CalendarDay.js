import React from "react";
import cs from 'classnames';
import './CalendarDay.css';

const CalendarDay = ({ label, currentDay, today, onDaySelected }) => {
  const classes = cs('calendar-day', {
    'calendar-day--current': today,
    'calendar-day--selected': currentDay
  })

  return <td className={classes} onClick={() => onDaySelected(label)}>{label}</td>;
}

export default CalendarDay;
