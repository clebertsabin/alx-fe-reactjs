import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  const handleChangeLocation = () => {
    setUser({ ...user, location: 'Butare, Rwanda' });
  };

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        width: '300px',
        margin: '20px auto',
        backgroundColor: '#f8f9fa',
      }}
    >
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Location:</strong> {user.location}</p>

      <button
        onClick={handleChangeLocation}
        style={{
          padding: '8px 12px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Change Location
      </button>
    </div>
  );
}

export default UserProfile;
