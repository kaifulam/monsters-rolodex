import React from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }))
  }

  handleChange = (e) =>
    this.setState({ searchField: e.target.value })

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(el =>
      el.name.toLowerCase().includes(searchField.toLowerCase())
    )
    // });
    console.log(filteredMonsters);
    // console.log(monsters.name);
    return (
      <div className="App" >
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;


