import React from 'react';
import { NavLink } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink class="navbar-brand" href="#">Navbar</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="#">Services</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="#">About Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="#">Contact Us</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;