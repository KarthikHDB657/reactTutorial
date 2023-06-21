import React from 'react'

function Person({person}) {
  return (
    <div><h1> Hi Myself {person.name} with age {person.age} and I know {person.skill}</h1></div>
  )
}

export default Person