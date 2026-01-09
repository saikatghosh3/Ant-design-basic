import React from 'react'
import { DatePicker, TimePicker } from 'antd'

const DatePickerTutorial = () => {
  return (
    <div>
      <DatePicker /><br />
      <DatePicker picker="year"/><br />
      <DatePicker picker="month"/><br />
      <DatePicker picker="date"/><br />
      <DatePicker picker="quarter"/>
      <DatePicker.RangePicker />
      <DatePicker.RangePicker picker="year"/>
      <DatePicker.RangePicker picker="month"/>
      <DatePicker.RangePicker picker="quarter"/>
    

      <TimePicker />
    </div>
  )
}

export default DatePickerTutorial
