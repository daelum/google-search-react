import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import SearchResult from './SearchResult'
import axios from 'axios'

function App() {
  // const [dataArray, setDataArray] = useState([])

  const [results, setResults] = useState([])

  const search = async (str, e) => {
    e.preventDefault()
    try {
      const response = await axios.get('http://localhost:4000/results', {
        params: { search: searchTerm },
      })
      console.log(response.data)
      setResults(response.data)
    } catch (err) {
      console.log(err)
    }
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
