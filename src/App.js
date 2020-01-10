import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'sdfsdf', name: 'Max', age: 28 }, //add id for unique key
      { id: 'dtretr', name: 'Manu', age: 29 },
      { id: 'fhdfgh', name: 'Stephanie', age: 30 }
    ],
    otherState: 'some other value',
    showPersons: false //if false we don't want to show the persons
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }; //you can also do this like so: const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;
    const persons = [...this.state.persons];
    person[personIndex] = person;

    this.setState( {persons: persons} )
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer', //you can't hoover because it is a css pseudo-selector
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      } //this is possible because of Radium, be sure to put it in quotation-marks
    };

    let persons = null; //create variables to use in your jsx

    if (this.state.showPersons){
    persons = (
      <div>
       {this.state.persons.map((person, index) => { //with lists use map operator
         return <Person
         click={() => this.deletePersonHandler(index)} //use index to delete something from a list
         name={person.name}
         age={person.age}
         key={person.id}//key needs to be unique so use or make an id
         changed={(event) => this.nameChangedHandler(event, person.id)}/>
       })}
       </div>
    );
    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    }
  }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"));
  }
}

export default Radium(App);
