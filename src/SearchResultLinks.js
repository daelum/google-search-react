function SearchResultLinks({ links }) {
  return (
    <ul>
      {links &&
        links.map((link, j) => (
          <li key={j}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
    </ul>
  )
}

export default SearchResultLinks
