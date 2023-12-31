import SearchResultLinks from './SearchResultLinks'

function SearchResult({ results }) {
  // const { title, description, url, links } = props

  return (
    <>
      <div className="results">
        {results.map((result, i) => (
          <div key={i}>
            <span>
              <small>{result.url}</small>
            </span>
            <h2>
              <a href={result.url} target="_blank">
                {result.title}
              </a>
            </h2>
            <p>{result.description}</p>
            <SearchResultLinks links={result.links} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SearchResult
