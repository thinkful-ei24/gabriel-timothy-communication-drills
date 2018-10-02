import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      characters: [...props.characters]
    };
  }

  updateCharactersState(searchTerm) {
    console.log(searchTerm);
    const filteredCharacters = this.props.characters.filter(character => {
      if (character.name.toLowerCase().includes(searchTerm)) {
        return true;
      }
      return false;
    });
    console.log(filteredCharacters);
    this.setState({ characters: filteredCharacters });
  }

  updateSearchTerm(searchTerm) {
    this.setState({ searchTerm }, () => {
      this.updateCharactersState(this.state.searchTerm);
    });
  }

  render() {
    return (
      <div className="live-search">
        <SearchForm updateSearchTerm={term => this.updateSearchTerm(term)} />

        <CharacterCount count={this.state.characters.length} />

        <CharacterList characters={this.state.characters} />
      </div>
    );
  }
}

/*
1. Characters is passed in from props and then loaded into the state
2. Character list is rendered based on current state
3. User types a search term which updates searchTerm in state
4. Page is rerendered
*/
