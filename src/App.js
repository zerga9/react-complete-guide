import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 30 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0] = 'Gadiza'
    setPersonsState({
      persons: [
        { name: 'Gadiza', age: 33 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 30 }
      ]
    });
  };


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name}  age={personsState.persons[1].age}>My hobbies: Racing</Person>
        <Person name={personsState.persons[2].name}  age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"));
  }


export default App;
//
// state = {
//   persons: [
//     { name: 'Max', age: 28 },
//     { name: 'Manu', age: 29 },
//     { name: 'Stephanie', age: 30 }
//   ],
//   otherState: 'some other value'
// }
//
// switchNameHandler = () => {
//   // console.log('Was clicked');
//   // DON'T DO THIS: this.state.persons[0] = 'Gadiza'
//   this.setState({
//     persons: [
//       { name: 'Gadiza', age: 33 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 30 }
//     ]
//   })
