import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import {URL} from './constants'
import CharacterInfo from './components/Character'
import Styled from './components/Styles'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [info, setInfo]= useState({})
  const [results, setResults]= useState([])
  const [search, setSearch]= useState('')
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect (() => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((response) => {
        setInfo(response.data.info)
        setResults(response.data.results)
      }, [search])
      .catch((error) =>{
        console.log(error)
      }, [])
  })
  return (
    // <div className="App">
    //   <h1 className="Header">Characters</h1>
    // </div>
    <Styled>
      <header>
        <h1>Rick and Morty Characters</h1>
        <input onChange={(event) => {
          setSearch(event.target.value)
        }}
        value={search}
        type='text'
        placeholder='Search'
        />
      </header>
      <div className='main-container'>
        {results.map((result, index) => (
          <CharacterInfo key={index} result={result}/>
        ))}
      </div>
    </Styled>
  );


}

export default App;
