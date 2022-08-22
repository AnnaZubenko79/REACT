import React from 'react';

class Search extends React.Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  sendValue = () => {
    alert(`Searchtext: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search">
        <input
          type="text"
          className="search__input"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button className="search__button" onClick={this.sendValue}>
          Search
        </button>
      </form>
    );
  }
}
export default Search;
