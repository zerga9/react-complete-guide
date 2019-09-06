import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 30 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0] = 'Gadiza'
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 50 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 33 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 50 }
      ]
    })
  }

  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
          {
            this.state.showPersons ?
             <div>
                <Person
                  name={this.state.persons[0].name}
                  age={this.state.persons[0].age} />
                <Person
                  name={this.state.persons[1].name}
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this, "Gadi!!!")}
                  changed={this.nameChangedHandler}>My hobbies: Racing</Person>
                <Person
                  name={this.state.persons[2].name}
                  age={this.state.persons[2].age} />
              </div> : null
         }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"));
  }
}

export default App;
