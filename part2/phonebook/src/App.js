import React, { useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  //console.log(persons)
  const [searchValue, setSearchValue] = useState("");

  const addPerson = (person) => {
    // Create a function to compare if the persons.name array matches
    // the person.name we are trying to add
    const duplicateName = persons.filter((o) => o.name === person.name);
    //console.log("I am duplicateName ",duplicateName)

    //If the length of duplicateName > 0 we have a dupe
    // and send alert to the screen
    if (duplicateName.length > 0) {
      alert(`${person.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(person));
    }
  };

  console.log("I am the searchValue ", searchValue);
  const filterPersons = persons.filter((person) =>
    person.name.toUpperCase().includes(searchValue.toUpperCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter onFilter={setSearchValue} />

      <h3>Add a new</h3>

      <PersonForm onAdd={addPerson} />

      <h2>Numbers</h2>

      <Persons persons={filterPersons} />
    </div>
  );
};

export default App;
