import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import './Nav-Bar.css';
import { Setting } from './Setting-Search';
import Search from './Setting-Search';

const NavBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Use scrollY instead of pageYOffset
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarBackgroundColor = isScrolled ? 'black' : 'transparent';

  return (
    <>
      <Navbar
        bg={navbarBackgroundColor}
        variant="dark"
        fixed="top"
        style={{ transition: 'background-color 0.3s ease-in-out' }}
        className={isScrolled ? 'navbar-scrolled' : ''}
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
        <Search />
        <Setting />
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
    </>
  );
};

export default NavBar;
