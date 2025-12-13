import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className="container">
      <h2>Profile</h2>

      <nav>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <div className="section-box">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
