import React from 'react'
import { action } from '@storybook/addon-actions';
import CalendarWeek from '../src/components/CalendarWeek';


export default {
  component: CalendarWeek,
  title: 'Calendar Week'
}

export const basic = () => (
  <table>
    <tbody>
      <CalendarWeek
        weekNumber={4}
        daysPerWeek={5}
        selectedDay={{ week: 4, day: 4 }}
        hasWeekends
        onDaySelected={action('onDaySelected')} />
    </tbody>
  </table>
)
