import React from 'react';
import MainLayout from "../layout/MainLayout"
const Profile = () => {
  return (
    <MainLayout>
    <div className="container-fluid mainelem">
      <div className="row">
        {/* Side Navbar */}
        <div className="col-md-3 bg-dark text-light">
          <nav className="navbar navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Link 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link 3</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Content */}
        <div className="col-md-9 bg-light">
          <div className="p-4">
            <h1 className="text-dark">Hello</h1>
          </div>
        </div>
      </div>
    </div>
    </MainLayout>
  );
};

export default Profile;
