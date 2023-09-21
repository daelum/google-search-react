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
      title: 'JS tutorials fhdhgfh',
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

  // function search(str) {
  //   let emptyArr = []
  //   // check if the string matches any string inside the data array containing objects
  //   for (x of data) {
  //     if (
  //       x.title.includes(str) ||
  //       x.url.includes(str) ||
  //       x.description.includes(str)
  //     ) {
  //       emptyArr += x
  //     }
  //   }
  //   console.log(emptyArr)
  // }
  // search('fhdhgfh')
  // In the search function, instead of returning the filtered array, use the filtered array to update the content of the results array.
  const [results, setResults] = useState([])

  function search(str, e) {
    e.preventDefault()
    setResults(
      data.filter(
        (e) =>
          e.title.includes(str) ||
          e.url.includes(str) ||
          e.description.includes(str)
      )
    )
  }

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo">
          <img src="images/google.png" alt="Google Logo" />
        </div>
        <form onSubmit={(e) => search(searchTerm, e)}>
          {/* <!-- We need both tags next to each other to avoid the extra space --> */}
          <input
            onKeyUp={(e) => setSearchTerm(e.target.value)}
            type="text"
            className="input-bar"
            id="inputText"
          />
          <button className="search-button">Search</button>
        </form>
      </div>
      <div className="all-results">
        <div className="number-of-results">
          <span>
            {/* Replace the hardcoded number of results with the length of the array. */}
            <small>{results.length} Results</small>
          </span>
        </div>
        <SearchResult results={results} />
      </div>
    </div>
  )
}

export default App
