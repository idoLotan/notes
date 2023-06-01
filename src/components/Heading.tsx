import React from 'react'

type HeadingProps = {title : string}

const Heading = ({title}: HeadingProps) => {
  return (
    <div className="">
      <h1>{title}</h1>
    </div>
  )
}

export default Heading