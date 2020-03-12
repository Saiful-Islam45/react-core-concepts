import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const Persons = [
    { name: "Saiful", age: 25 },
    { name: "rakib", age: 30 }
  ]
  const heros = ['rakib', 'sakib', 'lakib', 'Bakib']
  return (
    <div className="App">
      <header className="App-header">
        <Count></Count>
        <Users></Users>
        <Person2></Person2>
        <Person person={Persons[0]}></Person>
        <ul>
          {
            heros.map(hero => <li>{hero}</li>)
          }
        </ul>
      </header>
    </div>
  );
}
function Person(props) {
  const { name, age } = props.person;
  return (
    <div>Name:{name}
    Age:{age}</div>
  )
}

function Person2() {
  const st = {
    color: 'white',
    backgroundColor: 'gray',
    padding: '10px'
  }
  return (
    <div style={st}>
      <h1>My Name Is Saiful</h1>
      <h3>Junior Web Developer</h3>
    </div>
  );
}
function Count() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )

}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>{
        users.map(user => <li>{user.name}</li>)

      }
      </ul>
    </div>
  )

}
export default App;
