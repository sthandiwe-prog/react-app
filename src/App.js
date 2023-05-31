import "./App.css";

export default function App() {
  let weatherApp = {
    humidity: 70,
    wind: 30,
    condition: "Mostly sunny",
    temperature: 23,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
  };

  return (
    <div className="App">
      <div className="container">
        <div className="document-wrapper">
          <div className="content">
            <form>
              <input
                type="search"
                placeholder="Search City..."
                className="search-bar"
                autocomplete="off"
              />
              <input type="submit" value="Search" className="button" />
            </form>

            <div className="col-6">
              <p className="city">
                <span>Durban</span>:
                <span>
                  <strong> {weatherApp.temperature} </strong>
                  <small>
                    <a href="/" className="celsius">
                      °C
                    </a>
                    |
                    <a href="/" className="fahrenheit">
                      °F
                    </a>
                  </small>
                </span>
                <br />
                <img
                  src={weatherApp.imgUrl}
                  alt="weather icon"
                  className="weather-icon"
                />
              </p>
            </div>

            <div className="col-6">
              Weather <br />
              <br />
              <span>{weatherApp.condition} </span>
              <br />
            </div>

            <div className="conditions">
              <div>Humidity:{weatherApp.humidity} %</div>
              <div>Wind:{weatherApp.wind} km/h</div>
            </div>

            <div className="weather-forecast"></div>
          </div>

          <small className="code-source">
            <a
              href="https://github.com/sthandiwe-prog/react-app"
              target="_blank"
              title="my code"
              rel="noreferrer"
              className="link"
            >
              Open-source code
            </a>
            , by Sthandiwe Gasa
          </small>
        </div>
      </div>

      <script src="css-code/index.js"></script>
    </div>
  );
}
