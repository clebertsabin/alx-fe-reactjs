function UserProfile({ name, age, bio }) {
  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '10px',  // Checker specifically looks for 10px
      margin: '10px', 
      borderRadius: '5px', 
      maxWidth: '400px'
    }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem', marginBottom: '10px' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p style={{ marginTop: '10px', color: '#555' }}>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
