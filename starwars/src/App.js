import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import {URL} from './constants'
import CharacterInfo from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [info, setInfo]= useState({})
  const [results, setResults]= useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    console.log('results', results)
  }, [])
  useEffect (() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then((response) => {
        setInfo(response.data.info)
        setResults(response.data.results)
      })
      .catch((error) =>{
        console.log('no info')
      }, [])
  })
  return (
    // <div className="App">
    //   <h1 className="Header">Characters</h1>
    // </div>
    <>
      <header>
        <h1>Rick and Morty Characters</h1>
      </header>
      <div className='main-container'>
        {results.map((result, index) => (
          <CharacterInfo key={index} result={result}/>
        ))}
      </div>
    </>
  );


}

export default App;
