import React from 'react';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';
import '../Components/SearchBar.css'

const SearchBar = () => {
  return (
    <Navbar className="search-bar" fixed="top">
      <Navbar.Brand className="logo-container">
        <img
          src="https://i.postimg.cc/LsLxvqKV/Netflix-Logo-Main.png"
          alt="Netflix Logo"
          className="d-inline-block align-top logo"
        />
      </Navbar.Brand>
      <Form className="d-flex search-form">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 search-input"
          aria-label="Search"
        />
        <Button variant="light" type="submit" className="search-button">
          <img
            src="https://i.postimg.cc/FztYSfW5/Search-Button.png"
            alt="Search Icon"
            className="search-icon"
          />
        </Button>
      </Form>
    </Navbar>
  );
};

export default SearchBar;
