import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h2>Home</h2>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/post/1">Sample Post</Link>
      </nav>

      <div className="section-box">
        <p>Welcome to the Advanced Routing Demo.</p>
      </div>
    </div>
  );
}

export default Home;
