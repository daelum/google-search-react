import logo from './logo.svg'
import './App.css'

function App() {
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
            <small>99 Results</small>
          </span>
        </div>
        <div class="results">
          <span>
            <small>www.bing.com</small>
          </span>
          <h2>
            <a href="https://www.bing.com" target="_blank">
              JavaScript tutorial - w3Shool
            </a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
            deleniti delectus possimus sapiente doloribus laboriosam alias
            dolor. Officiis, magni! Temporibus deserunt molestias nobis modi
            eius consequatur. Aut quae obcaecati repellat.
          </p>
          <ul>
            <li>
              <a href="haikuacademy.com">basdbbr intro</a>
            </li>
            <li>
              <a href="jdbhgkjbgfew.net"> kjgherjgb school</a>
            </li>
            <li>
              <a href="fbwgeouf.org">kjwbubeq video</a>
            </li>
          </ul>
        </div>
        <div class="results">
          <span>
            <small>www.bingbong.com</small>
          </span>
          <h2>
            <a href="https://www.bing.com">blahblhablah-school</a>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            quibusdam dolor distinctio cum delectus blanditiis quo, sunt quae
            aut ducimus qui quam fugit voluptates sed eius veniam obcaecati
            eligendi. Fugit?
          </p>
          <ul>
            <li>
              <a href="haikuacademy.com">basdbbr intsrhthro</a>
            </li>
            <li>
              <a href="jdbhgkjbgfew.net"> kjgherjgb scherhthsthool</a>
            </li>
            <li>
              <a href="fbwgeouf.org">kjwbubeq video</a>
            </li>
          </ul>
        </div>
        <div class="results">
          <span>
            <small>www.dingdong.com</small>
          </span>
          <h2>
            <a href="https://www.bing.com">blahblhablah-school</a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            asperiores numquam voluptatibus cum iusto id rem atque
            exercitationem deleniti, expedita ullam voluptas, totam, ipsa ad
            minima qui error corrupti quis.
          </p>
          <ul>
            <li>
              <a href="haikuacademy.com">bjbafjkfb</a>
            </li>
            <li>
              <a href="jdbhgkjbgfew.net"> kjgherjgb school</a>
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
