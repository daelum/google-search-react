import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import SearchResult from './SearchResult'

function App() {
  let data = [
    {
      title: 'JS tutorisdals',
      description: 'The best JavaScript tutorials in the galaxy!',
      url: 'https://www.w3schools.com',
      links: [
        {
          title: 'JS for Beginners',
          url: 'https://www.w3schools.com/js',
        },
        {
          title: 'JS for the Web',
          url: 'https://www.w3schools.com/js',
        },
      ],
    },
    {
      title: 'JS tutorials',
      description: 'The best JavaScript tutorials in the galaxy!',
      url: 'https://www.w3schools.com',
      links: [
        {
          title: 'JS for Beginners',
          url: 'https://www.w3schools.com/js',
        },
        {
          title: 'JS for the Web',
          url: 'https://www.w3schools.com/js',
        },
      ],
    },
    {
      title: 'JS tutorials',
      description: 'The best JavaScript tutorials in the galaxy!',
      url: 'https://www.w3schools.com',
      links: [
        {
          title: 'JS for Beginners',
          url: 'https://www.w3schools.com/js',
        },
        {
          title: 'JS for the Web',
          url: 'https://www.w3schools.com/js',
        },
      ],
    },
    {
      title: 'JS tutoriaaaals',
      description: 'The best JavaScript tutorials in the galaxy!',
      url: 'https://www.w3schools.com',
      links: [
        {
          title: 'JS for Beginners',
          url: 'https://www.w3schools.com/js',
        },
        {
          title: 'JS for the Web',
          url: 'https://www.w3schools.com/js',
        },
      ],
    },
  ]

  // const [name, setName] = useState('')
  // In the App component, create a search function,
  //  that takes a string parameter
  //  then returns an array from the data array
  //  that contains only results where the string parameter can be found
  //  in either the title, description or url of the element.
  //  Test the function with a variety of strings.
  // function search(str) {
  //   let filteredData = data.filter(d => (typeof d == 'string'))
  //   return filteredData
  // }

  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo">
          <img src="images/google.png" alt="Google Logo" />
        </div>
        <form>
          {/* <!-- We need both tags next to each other to avoid the extra space --> */}
          <input type="text" className="input-bar" id="inputText" />
          <button className="search-button">Search</button>
        </form>
      </div>
      <div className="all-results">
        <div className="number-of-results">
          <span>
            {/* Replace the hardcoded number of results with the length of the array. */}
            <small>{data.length} Results</small>
          </span>
        </div>
        <SearchResult data={data} />
      </div>
    </div>
  )
}

export default App
