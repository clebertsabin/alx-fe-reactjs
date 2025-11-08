function UserProfile(props) {
  return (
    <div
      style={{
        border: '1px solid gray',
        borderRadius: '8px',
        padding: '15px',
        margin: '20px auto',
        width: '300px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2 style={{ color: 'blue', marginBottom: '8px' }}>{props.name}</h2>
      <p>
        Age:{' '}
        <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>
          {props.age}
        </span>
      </p>
      <p style={{ fontStyle: 'italic' }}>{props.bio}</p>
    </div>
  );
}

export default UserProfile;
