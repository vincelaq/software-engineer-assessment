import React, { useState, useEffect } from 'react';
import './App.css';

import Results from './components/Results'

export interface IState {
  data: {
    name: string
    bio: string
    login: string
    email: string
    avatar_url: string
  }
}

function App() {
  
  const [input, setInput] = useState<string>("")
  const [data, setData] = useState<IState["data"]>({
    name: "",
    bio: "",
    login: "",
    email: "",
    avatar_url: ""
  })
  const [display, setDisplay] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleClick = (): void => {
    if (input === "") return
    fetch(`https://api.github.com/users/${input}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(async response => {
      if (response.ok) {
        setDisplay(true)
        return response.json()
      } else {
        setDisplay(false)
      }
      throw response
    })
    .then(data => {
      setData({
        name: data.name,
        bio: data.bio,
        login: data.login,
        email: data.email,
        avatar_url: data.avatar_url
      })
    })
    .catch(err => {
      console.log("Fetch error: ", err)
    })
    setInput("")
    console.log("data: ", data)
  }


  return (
    <div className="container">
      <div className="search-container">
        <input
          className='search-box' 
          type='text'
          placeholder='Enter GitHub Username'
          value={input}
          onChange={handleChange}
          name='username'
        />
        <button
          className='search-btn'
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      {display ? <Results data={data} /> : <div></div>}
      
    </div>
  );
}

export default App;
