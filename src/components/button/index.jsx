import React from 'react'

const Button = ({text}) => {
  return (
    <>
      <button className="bg-secondary px-7 py-3 rounded-md text-white uppercase mt-5">
        {text}
      </button>
    </>
  )
}

export default Button