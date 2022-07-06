import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="card" styles="width: 20rem">
        <form id="search-form">
          <input
            type="text"
            className="search"
            placeholder="Search City"
            id="city"
          />
          <input type="submit" value="🔍" className="search" />
        </form>

        <div className="weather-forecast" id="forecast"></div>
      </div>

      <div className="row">
        <div className="col" id="info">
          <h1 className="title">Chicago</h1>
          <p className="time">
            Last Updated: <span id="date"></span>
          </p>
          <div className="clearfix weather-temperature">
            <h2 id="temperature">19</h2>
            <span className="units">
              <span id="fahrenheit" className="active">
                °F
              </span>
              | <span id="celcius">°C </span>
            </span>
          </div>
        </div>

        <ul className="weatherCondition">
          <img src="" alt="clouds" id="icon" className="float-left" />
          <li>
            <span id="description">Clear</span>
          </li>
          <li>
            Wind: <span id="wind"></span> mph
          </li>
          <li>
            Humidity: <span id="humidity"></span>%
          </li>
        </ul>
      </div>
    </div>
  );
}
