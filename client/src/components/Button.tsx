import React, { forwardRef } from "react"

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement,ButtonProp>(({children,...props},ref) => {
  return (
    <>
      <button {...props} ref={ref}>
        {children}
      </button>
    </>
  )
})

export default Button
