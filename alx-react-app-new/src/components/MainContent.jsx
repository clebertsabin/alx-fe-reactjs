import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main
      style={{
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#eef2f3',
      }}
    >
      <h2 style={{ color: 'navy' }}>Meet Our Travelers</h2>
      <UserProfile
        name="Clebert Sabin Ganza"
        age={20}
        bio="A passionate explorer who loves mountain hiking."
      />
      <UserProfile
        name="Cleberte Sabine Ganza"
        age={25}
        bio="Enjoys discovering local cuisines and hidden gems."
      />
    </main>
  );
}

export default MainContent;
