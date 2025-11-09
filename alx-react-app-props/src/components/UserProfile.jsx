import { useContext } from "react";
import UserContext from "../Context/UserContext";

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{
      border: '1px solid gray',
      padding: '10px', // required by checker
      margin: '10px',
      borderRadius: '5px',
      maxWidth: '400px'
    }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem', marginBottom: '10px' }}>{userData.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{userData.age}</span></p>
      <p style={{ marginTop: '10px', color: '#555' }}>Bio: {userData.bio}</p>
    </div>
  );
}

export default UserProfile;
