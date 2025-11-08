import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      padding: '15px',
      backgroundColor: '#282c34'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
      <Link to="/services" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
