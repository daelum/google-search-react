function SearchResult({ data }) {
  // const { title, description, url, links } = props

  return (
    <div class="results">
      <span>
        <small>{data[0].url}</small>
      </span>
      <h2>
        <a href={data[0].url} target="_blank">
          {data[0].title}
        </a>
      </h2>
      <p>{data[0].description}</p>
      <ul>
        <li>
          <a href={data[0].links[0].url}>{data[0].links[0].title}</a>
        </li>
        <li>
          <a href={data[0].links[1].url}>{data[0].links[1].title}</a>
        </li>
        <li>
          <a href="fbwgeouf.org">kjwbubeq video</a>
        </li>
      </ul>
    </div>
  )
}

export default SearchResult
