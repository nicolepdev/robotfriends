import React from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './app.css';

const state = {
  robots,
  searchfield: ''
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots,
      searchfield: ''
    };
  }

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>ROBOT FRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
