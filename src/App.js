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
    showPersons: false //if false we don't want to show the persons
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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); //because objects and arrays are reference types. use slice because that makes a copy of it and not use the original
    //you should always update state in an immutable fashion
    persons.splice(personIndex, 1);  //removes one element from the array
    this.setState({persons: persons}); //set state of persons to new persons..
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

    let persons = null;

    if (this.state.showPersons){
    persons = (
      <div>
       {this.state.persons.map((person, index) => {
         return <Person
         click={() => this.deletePersonHandler(index)}
         name={person.name}
         age={person.age} />
       })}
       </div>
    )}

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"));
  }
}

export default App;
