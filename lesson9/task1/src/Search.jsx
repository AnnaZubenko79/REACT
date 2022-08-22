import React from 'react';

class Search extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  sendValue = () => {
    alert(`Search text: ${this.state.value}`);
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
