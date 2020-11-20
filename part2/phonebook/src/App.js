import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  //console.log(persons)
  const [ newName, setNewName ] = useState('')

  const handleAddName = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)
    //console.log("I am the persons array", persons)
    //console.log("I am the newName const ",newName)
    const addNewName = {
      name: newName
    }
    // Create a const to compare if the persons array matches
    // the newName we are trying to add
    const duplicateName = persons.filter(o => o.name === newName)
    //console.log("I am duplicateName ",duplicateName)

    //If the length of duplicateName > 0 we have a dupe
    // and send alert to the screen
    if (duplicateName.length > 0) {
      alert(newName + " is already in the phonebook")
    } else {
      setPersons(persons.concat(addNewName))
    }
    setNewName('')

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleAddName}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <Person key={person.name} person={person} />
          )}
      </div>
    </div>
  )
}

export default App
