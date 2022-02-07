import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  //////* Event Controlar hole Always Arrow function use korte hbe

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    console.log(event.target.value);
  };

  onFromSubmit = (event) => {
    event.preventDefault();

    // TODO: Make sure we Callbake from parent
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFromSubmit}>
          <div className="field">
            <label>Search Video</label>
            <input
              type="text"
              placeholder="Search Video"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
