import React from 'react'

const Title = ({titleBlack, titleBlue}) => {
  return (
    <div className="section-title">
      <h2>{titleBlack} <span>{titleBlue}</span></h2>
    </div>
  )
}

export default Title
