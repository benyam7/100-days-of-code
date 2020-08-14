import React from 'react';
import logo from './logo.svg';
import './App.css';

const title = 'React'
const welcome = {
  'greeting' : "Hey",
  'title' : "React"
}

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://reactjs.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]
function App() {
  return (
    <div className="App">
      <h1>{welcome.greeting} {welcome.title}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr/>
        {list.map (item => {
            return <div>
              <h1>{item.title}</h1>
            </div>
        })}
    
    </div>
    // contine from page 24
  );
}



export default App;
