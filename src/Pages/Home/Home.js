import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
  <div className="homeCSS">
    <h1>Home Page</h1>
    <div>
      <Link to = '/login'>
        Login
      </Link>
    </div>
    <div>
      <Link to= '/register'>
        Register
      </Link>
    </div>
  </div>
  
  );
};

export default Home;
