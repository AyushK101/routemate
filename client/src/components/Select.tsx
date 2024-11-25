import React, { forwardRef } from 'react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode,
  label: string,

}

const Select= forwardRef<HTMLSelectElement,SelectProps>(({ label, children, ...props }, ref) => {
  return (
    <>
      <div >
        <label htmlFor={label} className='w-full flex flex-col mb-5 gap-3'>
          {label}
          <select ref={ref} name={label}  {...props} className='p-3  rounded-lg text-xl'>
            {children}
          </select>
        </label>
      </div>

    </>
  )
})

export default Select
