import React from "react";
import cs from 'classnames';
import './CalendarDay.css';

const CalendarDay = ({ label, currentDay, onDaySelected }) => {
  const classes = cs('calendar-day', { 'calendar-day--current': currentDay })

  return <td className={classes} onClick={() => onDaySelected(label)}>{label}</td>;
}

export default CalendarDay;
