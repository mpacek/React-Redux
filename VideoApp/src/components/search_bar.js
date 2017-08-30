import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }
  render() {
    return (
      <div>
        <input
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.value}
        />
        <div>You typed: {this.state.term}</div>
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
