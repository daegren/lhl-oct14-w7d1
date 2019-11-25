import React from 'react'
import { action } from '@storybook/addon-actions';
import CalendarDay from '../src/components/CalendarDay';


export default {
  component: CalendarDay,
  title: 'Calendar Day'
}

export const basic = () => (
  <table>
    <tbody>
      <tr>
        <CalendarDay label="1" onDaySelected={action('onDaySelected')} />
      </tr>
    </tbody>
  </table>
)

export const currentDay = () => (
  <table>
    <tbody>
      <tr>
        <CalendarDay label="1" currentDay onDaySelected={action('onDaySelected')} />
      </tr>
    </tbody>
  </table>
)
