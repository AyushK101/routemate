import React from 'react'

interface ContainerProp {
  children: React.ReactNode,
  className?: string,

}

const Container = ({children, className}: ContainerProp) => {
  return (
    <div className={` max-w-screen-xl mx-auto py-40 ${className ?? className}`}>
      {children} 
    </div>
  )
}

export default Container