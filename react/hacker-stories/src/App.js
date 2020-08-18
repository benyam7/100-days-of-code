import React from 'react'
import './App.css'

// eslint-disable-next-line
const title = 'React'

const App = () => {
  const stories = [
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
    {
      title: 'React3',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke3',
      num_comments: 5,
      points: 41,
      objectID: 20,
    },

    {
      title: 'Redux5',
      url: 'https://reactjs.org/',
      author: 'Dan Abramov, Andrew Clark4',
      num_comments: 42,
      points: 55,
      objectID: 51,
    },
  ]

  const handleSearch = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <hr />

      <Search onSearch={handleSearch} />
      <List list={stories} />
    </div>
  )
}

const Search = (props) => {
  const [searchItem, setSearchItem] = React.useState('')

  const handleChange = (event) => {
    setSearchItem(event.target.value)
    props.onSearch(event)
  }

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for: <strong>{searchItem}</strong>
      </p>
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
