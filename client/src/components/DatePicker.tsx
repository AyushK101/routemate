import React, { forwardRef } from 'react'

interface DatePickerTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const DatePicker= forwardRef<HTMLInputElement,DatePickerTypes>(({label, ...props},ref) => {
  return (
    <div >
      <label htmlFor={label} className='w-full flex flex-col mb-5 gap-3 '>
        {label} 
      <input ref={ref} type="date" className='p-2 border-2 rounded' {...props}/>
      </label>
    </div>
  )
})

export default DatePicker