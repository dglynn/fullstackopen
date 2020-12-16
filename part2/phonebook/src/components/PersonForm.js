import React, { useState } from "react";

const regex = /^(\d+)-(\d+)-(\d+)*$/;

const PersonForm = ({ onAdd }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleAddName = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value);
  };

  const handleAddNumber = (event) => {
    //console.log(event.target.value)
    const value = event.target.value;
    console.log(value.match(regex));
    setNewNumber(value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const isNameValid = newName.length > 0;
    const isNumberValid = regex.test(newNumber);
    if (!isNameValid) alert(`The name field should not be empty`);
    if (!isNumberValid)
      alert(
        `The number ${newNumber} is not in the format of 01[2]-34-55555555`
      );
    if (isNameValid && isNumberValid) {
      const addNewPerson = {
        name: newName,
        number: newNumber,
      };
      onAdd(addNewPerson);
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name:
        <input value={newName} onChange={handleAddName} />
      </div>
      <div>
        number:
        <input value={newNumber} onChange={handleAddNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
