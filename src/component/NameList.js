import React from 'react'
import Person from './Person'

//Map example
function NameList() {
 
  const persons = [
    {
        id : 1,
        name: "Virat Kohli",
        age: 32,
        skill : "Cricket"

    },
    {
        id : 2,
        name: "Lionel Messi",
        age: 37,
        skill : "Football"

    },
    {
        id : 3,
        name: "Max Verstrappen",
        age: 25,
        skill : "F1 Racing"

    }

  ]
  const personList = persons.map(person => <Person key={person.id} person = {person}/>)
  return (
    <div>{personList}</div>
  )
}

export default NameList