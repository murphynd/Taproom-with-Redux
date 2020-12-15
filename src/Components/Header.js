import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <div className="jumbotron text-black jumbotron-image shadow">
        <h2 className="mb-4">Tap Room</h2>
        <p className="mb-4"> A keg app</p>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
    //
  );
}

export default Header;
