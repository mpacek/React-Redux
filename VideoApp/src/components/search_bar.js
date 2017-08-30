import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <div>
        <input
          onChange={event => this.setState({ value: event.target.value })}
          value={this.state.value}
        />
        <div>You typed: {this.state.value}</div>
      </div>
    )
  }
}
