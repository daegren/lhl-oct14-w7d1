import React from "react";
import CalendarDay from './CalendarDay'
import './CalendarWeek.css'

const CalendarWeek = ({ weekNumber, daysPerWeek, hasWeekends, onDaySelected }) => {
  const days = []
  for (let i = 0; i < daysPerWeek; i++) {
    days.push(i + 1);
  }

  const handleDaySelected = day => {
    if (onDaySelected) {
      onDaySelected(weekNumber, day)
    }
  }

  return (
    <tr className="calendar-week">
      <td className="calendar-week--header">{`W${weekNumber}`}</td>
      {days.map(day => (
        <CalendarDay label={day} onDaySelected={handleDaySelected} />
      ))}
      {hasWeekends ? <CalendarDay label="we" onDaySelected={handleDaySelected} /> : null}
    </tr>
  );
}

export default CalendarWeek;
