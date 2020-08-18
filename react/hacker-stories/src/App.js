import React, { useState } from 'react'
import './App.css'

// eslint-disable-next-line
const title = 'React'

const App = () => {
  const stories = [
    {
      title: 'react',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },

    {
      title: 'redux',
      url: 'https://reactjs.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'vue',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke3',
      num_comments: 5,
      points: 41,
      objectID: 20,
    },

    {
      title: 'angular',
      url: 'https://reactjs.org/',
      author: 'Dan Abramov, Andrew Clark4',
      num_comments: 42,
      points: 55,
      objectID: 51,
    },
  ]

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = () =>
    stories.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )

  return (
    <div className="App">
      <hr />

      <Search search={searchTerm} onSearch={handleSearch} />
      <List list={searchedStories()} />
    </div>
  )
}

const Search = ({ onSearch, search }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        onChange={onSearch}
        value={search}
      />
    </div>
  )
}

const List = (props) => {
  return props.list.map((item) => {
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

export default App
