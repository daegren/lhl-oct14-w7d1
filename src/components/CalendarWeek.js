import React from "react";
import CalendarDay from './CalendarDay'
import './CalendarWeek.css'

const CalendarWeek = ({
  weekNumber,
  daysPerWeek,
  hasWeekends,
  onDaySelected,
  selectedDay,
  today
}) => {
  const days = []
  for (let i = 0; i < daysPerWeek; i++) {
    days.push(i + 1);
  }
  if (hasWeekends) {
    days.push('we')
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
        <CalendarDay
          key={`d${day}`}
          label={day}
          onDaySelected={handleDaySelected}
          currentDay={weekNumber === selectedDay.week && day === selectedDay.day}
          today={weekNumber === today.week && day === today.day}
        />
      ))}
    </tr>
  );
}

export default CalendarWeek;
