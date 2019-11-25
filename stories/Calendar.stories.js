import React from 'react'
import { action } from '@storybook/addon-actions';
import Calendar from '../src/components/Calendar';


export default {
  component: Calendar,
  title: 'Calendar'
}

export const basic = () => (
  <Calendar
    numberOfWeeks={8}
    daysPerWeek={5}
    today={{ week: 7, day: 1 }}
    hasWeekends
  />

)
