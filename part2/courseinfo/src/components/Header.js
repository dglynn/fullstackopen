import React from 'react'

const Header = ({ course }) => {
  //console.log("I am the header.js log",course)
  return (
    <>
      <h2>
        {course.name}
      </h2>
    </>
  )
}

export default Header
