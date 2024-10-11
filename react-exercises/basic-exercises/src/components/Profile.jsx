import { useState } from "react"

const Profile = () => {
    const [person, setPerson] = useState({
        name: "Ibad",
        age : 20
    })
    const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

    const handleNameChange = (e) =>{
        setNameInput(e.target.value)
    }

    const handleAgeChange = (e) =>{
        setAgeInput(e.target.value)
    }

    const handleNameClick = () =>{
        setPerson((prevPerson) => ({
            ...prevPerson,
            name: nameInput
        }))
        setNameInput("")
    }

    const handleAgeClick = () =>{
        setPerson((prevPerson) => ({
            ...prevPerson,
            age: ageInput
        }))
        setAgeInput("")
    }

  return (
    <div>
      <h4>Person Name: {person.name}</h4>
      <h4>Person Age: {person.age}</h4>

      <input
        type="text"
        placeholder="Update Name"
        value={nameInput}
        onChange={handleNameChange}
      />
      <button onClick={handleNameClick}>Update Name</button>
        <br />
      <input
        type="text"
        placeholder="Update Age"
        value={ageInput}
        onChange={handleAgeChange}
      />
      <button onClick={handleAgeClick}>Update Age</button>

    </div>
  );
}

export default Profile
