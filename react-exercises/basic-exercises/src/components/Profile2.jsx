import { useState } from "react";

const Profile = () => {
  const [person, setPerson] = useState({
    name : "",
    age : "",
  });

  const handleChange = e => {
    const {name, value} = e.target.value

    setPerson((prevProfile)=>(
        {...prevProfile, [name] : value}
    ))
  }
  


  return (
    <div>
      <h4>Person Name: {person.name}</h4>
      <h4>Person Age: {person.age}</h4>
      <input type="text" name="name" value={person.name} onChange={handleChange} />
      <input type="text" name="age" value={person.age} onChange={handleChange} />
    </div>
  );
};

export default Profile;
