import React, { useState } from 'react';
import './Setting-Search.css';

const Search = () => {

const [searchButton, setSearchButton] = useState(false);

const searchBox = () => {
    setSearchButton(prevSearchButton => !prevSearchButton);
};

const toggleBackdrop = () => {
  searchBox(false);
}

    // Access the styled elements and update their styles
    const styledElements = document.getElementsByName('body');
    for (const element of styledElements) {
      element.style.backgroundColor = searchButton ? 'grey' : 'transparent';
      // Add more styles here as needed
    }


  return (
    <>.
  <button 
  type='button' 
  id='search'
  aria-label='button' 
  className='search-button hovered'
  onClick={searchBox}
  >
  </button>
  {searchButton && (
    <>
    <input type="search" id="searchbar" placeholder="Search">
    </input>
    <div className="backdrop" onClick={toggleBackdrop}>
    </div>
    </>
  )}
  </>
  );

};

const Setting = () => {
  const [showBox, setShowBox] = useState(false);

  const settingButton = () => {
    setShowBox(prevShowBox => !prevShowBox);
  };

  return (
    <>
      <button
        type="button"
        id="setting"
        aria-label='button'
        className={`setting-button ${showBox ? 'active' : ''}`}
        onClick={settingButton}
      ></button>
      {showBox && (
        <div id="setting-div">
          <a className="setting-a"  href='http://localhost:3000/#'>Settings</a>
          <a className="setting-a"  href='http://localhost:3000/#'>Sign Out</a>
        </div>
      )}
    </>
  );
};

export { Setting };
export default Search;
