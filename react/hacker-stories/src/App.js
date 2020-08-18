import React from 'react'
import './App.css'

// eslint-disable-next-line
const title = 'React'
const welcome = {
  greeting: 'Hey',
  title: 'React',
}

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },

  {
    title: 'Redux',
    url: 'https://reactjs.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

function App() {
  return (
    <div className="App">
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>

      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" />
      <hr />

      <List />
      <List />
      <ListConst />
    </div>
  )
}

function List() {
  return list.map((item) => {
    return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author} </span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    )
  })
}

// this is more concise way of doing it
const ListConst = () => {
  return list.map((item) => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author} </span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ))
}

export default App
