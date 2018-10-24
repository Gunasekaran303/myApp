import React, { Component } from 'react';



class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchValue: ""
    };
  }
  searchType(event)
  {
   this.setState({
    searchValue : event.target.value
   })
  } 
  render() {
    return (
      <input placeholder='Search' onchange={this.searchType}></input>
    );
  }
}

export default Search;
