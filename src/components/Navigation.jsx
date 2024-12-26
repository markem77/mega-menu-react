import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

import logo from '../assets/logoipsum.svg';
import UserProfile from './UserProfile';
import { AlignJustify } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileNavigationDrawer from './MobileNavigationDrawer';
import "../routes/styles/searchbar.css"
import Autosuggest from "react-autosuggest";

const Navigation = () => {

  
  const suggestions = [
    { name: "React" },
    { name: "Vue" },
    { name: "Angular" },
  ];

  const [value, setValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);

  const onSuggestionsFetchRequested = ({ value }) => {
    setFilteredSuggestions(
      suggestions.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const onSuggestionsClearRequested = () => {
    setFilteredSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  // searchbar config end***********


  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerButtonRef = useRef(null);

  return (
    <header className="nav__header">
      <Container>
        <div className="toolbar">
          <button
            ref={drawerButtonRef}
            className="menu_icon md:hidden"
            aria-haspopup="true"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            {/* Mobile Hamburger menu */}
            <AlignJustify />
          </button>
          <Link className="logo__link" to={'/'}>
            <img src={logo} />
          </Link>

         {/* bare de recherche */}

         <Autosuggest
      suggestions={filteredSuggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={{
        placeholder: "🔍 Rechercher...",
        value,
        onChange: (e, { newValue }) => setValue(newValue)
      }}
    />
          <div className="hidden md:block">
            <MegaMenu />
          </div>
          <UserProfile />

          {/* Mobile navigation drawer */}
          <div className="md:hidden absolute">
            <MobileNavigationDrawer
              {...{ isDrawerOpen, setIsDrawerOpen, drawerButtonRef }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navigation;
