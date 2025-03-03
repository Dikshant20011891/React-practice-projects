import React from 'react'

const Title = ({ classes,text }) => {
  return (
    <h1 className={!classes ? "title" : classes || "title text-center"}>
      {!text ? "Title" : text}
    </h1>
  )
}

export default Title
