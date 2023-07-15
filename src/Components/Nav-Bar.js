import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import './Nav-Bar.css';

const NavBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarBackgroundColor = `rgba(0, 0, 0, ${scrollPos > 100 ? 1 : 0.2})`;

  return (
    <>
      <Navbar
        bg={navbarBackgroundColor}
        variant="dark"
        fixed="top"
        style={{ transition: 'background-color 0.3s ease-in-out' }}
      >
        <Button
          variant="outline-light"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
          onClick={handleToggleOffcanvas}
          className="nav-menu-button"
        >
          <span className="navbar-toggler-icon" />
        </Button>
        <Navbar.Brand href="#" className="ms-3 logo-container">
          <img
            src="https://i.postimg.cc/LsLxvqKV/Netflix-Logo-Main.png"
            alt="Netflix Logo"
            className="d-inline-block align-top logo"
          />
        </Navbar.Brand>
      </Navbar>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className={`offcanvas offcanvas-start ${showOffcanvas ? 'show' : ''}`}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          border: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <Navbar.Toggle aria-controls="offcanvasDarkNavbar" />
        <Navbar.Offcanvas
          id="offcanvasDarkNavbar"
          aria-labelledby="Netflix"
          placement="start"
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
        >
          <Form className="d-flex mt-3 mb-3">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 search-input"
              aria-label="Search"
            />
            <Button variant="success" type="submit" className="red-button">
              Search
            </Button>
          </Form>
          <Nav className="flex-column">
            <Nav.Link href="#home" className="nav-link white-text">Home</Nav.Link>
            <Nav.Link href="#link" className="nav-link white-text">Link</Nav.Link>
          </Nav>
        </Navbar.Offcanvas>
      </Navbar>

      <style>
        {`
          .logo {
            height: 30px;
          }

          .nav-link {
            padding-left: 7px;
          }

          .nav-link.white-text {
            color: white !important;
          }

          .nav-link:hover {
            background-color: transparent !important;
          }

          .offcanvas-header {
            border-color: rgba(255, 255, 255, 0.2) !important;
          }

          .nav-menu-button {
            border: none !important;
            background-color: transparent !important;
            
          }

        

          .navbar-toggler-icon {
            width: 34px;
            height: 34px;
          }

          .offcanvas.show {
            background-color: rgb(30, 30, 30); /* Dark grey color */
          }

          .red-button {
            background-color: red !important;
            border: none;
            margin-right: 5px;
          }

          .red-button:hover {
            background-color: #fb5235 !important;
            }

          .search-input {
            width: 100%;
            padding-right: 20px;
          }

          .me-2.form-control {
            margin-left: 5px;
          }
        `}
      </style>
    </>
  );
};

export default NavBar;
