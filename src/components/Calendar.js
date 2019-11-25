import React, { useState } from "react";
import CalendarWeek from './CalendarWeek'
import './Calendar.css'

const Calendar = ({ numberOfWeeks, daysPerWeek, hasWeekends, today }) => {
  const [selectedDay, setSelectedDay] = useState({ week: 1, day: 1 })

  const weeks = []
  for (let i = 0; i < numberOfWeeks; i++) {
    weeks.push(i + 1);
  }

  return (
    <table>
      <tbody>
        {weeks.map(week => (
          <CalendarWeek
            key={`w${week}`}
            weekNumber={week}
            daysPerWeek={daysPerWeek}
            hasWeekends={hasWeekends}
            selectedDay={selectedDay}
            today={today}
            onDaySelected={(week, day) => {
              setSelectedDay({ week, day })
            }}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Calendar;
