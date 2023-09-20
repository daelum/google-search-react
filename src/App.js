import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import SearchResult from './SearchResult'

function App() {
  let data = [
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
  ]

  // const [name, setName] = useState('')

  return (
    <div class="wrapper">
      <div class="header">
        <div class="logo">
          <img src="images/google.png" alt="Google Logo" />
        </div>
        <form>
          {/* <!-- We need both tags next to each other to avoid the extra space --> */}
          <input type="text" class="input-bar" id="inputText" />
          <button class="search-button">Search</button>
        </form>
      </div>
      <div class="all-results">
        <div class="number-of-results">
          <span>
            {/* Replace the hardcoded number of results with the length of the array. */}
            <small>{data.length} Results</small>
          </span>
        </div>
        <SearchResult data={data} />
        <div class="results">
          <span>
            <small>{data[1].url}</small>
          </span>
          <h2>
            <a href={data[1].url}>{data[1].title}</a>
          </h2>
          <p>{data[1].description}</p>
          <ul>
            <li>
              <a href={data[1].links[0].url}>{data[1].links[0].title}</a>
            </li>
            <li>
              <a href={data[1].links[1].url}>{data[1].links[1].title}</a>
            </li>
            <li>
              <a href="fbwgeouf.org">kjwbubeq video</a>
            </li>
          </ul>
        </div>
        <div class="results">
          <span>
            <small>{data[2].url}</small>
          </span>
          <h2>
            <a href={data[2].url}>{data[2].title}</a>
          </h2>
          <p>{data[2].description}</p>
          <ul>
            <li>
              <a href={data[2].links[0].url}>{data[2].links[0].title}</a>
            </li>
            <li>
              <a href={data[2].links[1].url}>{data[2].links[1].title}</a>
            </li>
            <li>
              <a href="fbwgeouf.org">kjwbubeq viadgho</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
