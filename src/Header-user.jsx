import { Link } from "react-router-dom";

function HeaderUser() {
  return (
    <>
      <div className="header">
        <h1>Generation Thailand</h1>
        <h1>Home - User Sector</h1>
      </div>
      <div>
        <Link to={'/user'}>
          <button className="home-button">User Home Sector</button>
        </Link>
        <Link to={'/admin'}>
          <button className="home-button">Admin Home Sector</button>
        </Link>
      </div>
    </>
  );
}

export default HeaderUser;
