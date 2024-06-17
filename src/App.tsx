import './App.scss'
import "./icons"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "url-search-params-polyfill"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Login from 'components/Login'
import PlaylistTable from "components/PlaylistTable"
import { getQueryParam } from "helpers"
import Logout from "components/Logout"

function App() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const handleStartDateChange = (date: Date) => {
    setStartDate(date)
  }

  const handleEndDateChange = (date: Date) => {
    setEndDate(date)
  }

  const exportFilteredTracks = () => {
    // Logic to filter and export tracks based on selected date range
  }

  let view
  let key = new URLSearchParams(window.location.hash.substring(1))

  if (getQueryParam('spotify_error') !== '') {
    view = <div id="spotifyErrorMessage" className="lead">
      <p><FontAwesomeIcon icon={['fas', 'bolt']} style={{ fontSize: "50px", marginBottom: "20px" }} /></p>
      <p>Oops, Exportify has encountered an unexpected error (5XX) while using the Spotify API. This kind of error is due to a problem on Spotify's side, and although it's rare, unfortunately all we can do is retry later.</p>
      <p style={{ marginTop: "50px" }}>Keep an eye on the <a target="_blank" rel="noreferrer" href="https://status.spotify.dev/">Spotify Web API Status page</a> to see if there are any known problems right now, and then <a rel="noreferrer" href="?">retry</a>.</p>
    </div>
  } else if (key.has('access_token')) {
    view = <PlaylistTable accessToken={key.get('access_token')} />
  } else {
    view = <Login />
  }

  return (
    <div className="App container">
      <header className="App-header">
        { key.has('access_token') && <Logout /> }
        <h1>
          <FontAwesomeIcon icon={['fab', 'spotify']} color="#84BD00" size="sm" /> <a href={process.env.PUBLIC_URL}>Exportify</a>
        </h1>

        <p id="subtitle" className="lead text-secondary">
          Export your Spotify playlists.
        </p>
      </header>

      <div>
        <h2>Select Date Range</h2>
        <div>
          <label>Start Date: </label>
          <DatePicker selected={startDate} onChange={handleStartDateChange} />
        </div>
        <div>
          <label>End Date: </label>
          <DatePicker selected={endDate} onChange={handleEndDateChange} />
        </div>
        <button onClick={exportFilteredTracks}>Export Tracks</button>
      </div>

      {view}
    </div>
  )
}

export default App

        <h1>
          <FontAwesomeIcon icon={['fab', 'spotify']} color="#84BD00" size="sm" /> <a href={process.env.PUBLIC_URL}>Exportify</a>
        </h1>

        <p id="subtitle" className="lead text-secondary">
          Export your Spotify playlists.
        </p>
      </header>

      <div>
        <h2>Select Date Range</h2>
        <div>
          <label>Start Date: </label>
          <DatePicker selected={startDate} onChange={handleStartDateChange} />
        </div>
        <div>
          <label>End Date: </label>
          <DatePicker selected={endDate} onChange={handleEndDateChange} />
        </div>
        <button onClick={exportFilteredTracks}>Export Tracks</button>
      </div>

      {view}
    </div>
  )
}

export default App

