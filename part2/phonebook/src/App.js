import React, { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "123456789",
    },
  ]);
  //console.log(persons)
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  console.log("I am newName ", newName);

  const handleAddName = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value);
  };

  const handleAddNumber = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    //console.log('button clicked', event.target)
    //console.log("I am the persons array", persons)
    //console.log("I am the newName const",newName)
    const addNewPerson = {
      name: newName,
      number: newNumber,
    };
    // Create a function to compare if the persons.name array matches
    // the newName we are trying to add
    const duplicateName = persons.filter((o) => o.name === newName);
    //console.log("I am duplicateName ",duplicateName)

    //If the length of duplicateName > 0 we have a dupe
    // and send alert to the screen
    if (duplicateName.length > 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(addNewPerson));
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newName} onChange={handleAddName} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleAddNumber} type="number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
};

export default App;
