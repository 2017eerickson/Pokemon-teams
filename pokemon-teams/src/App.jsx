import './App.css'
import { useState } from 'react';
import axios from  "axios";

function App() {
  const [pokeName,setPokeName]= useState('')
  const [pokeData,setPokeData] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchData()

  }
  const fetchData = async () => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    setPokeData( await axios.get(url))
  
  }


  return (
    <>
      <h1>Pokemon Teams Assemble !</h1>
      <form onSubmit={()=> handleSubmit(event)}>
        <input 
        type="text" 
        name = "name"
        placeholder = "pikachu"
        value={pokeName}
        onChange = {(evt) => setPokeName(evt.target.value)}
        />
        <input type= "submit"/> 
      </form>
        <div id= "container">
        {console.log(pokeData)}
          { 
              pokeData.map((pokemon) => (
              <div id = "card">
                <h3>{pokemon.data.name}</h3>
                <img src = {pokemon.data.sprites.front_shiny}></img>
              </div>
          ))
          }
        
      </div>

    </>
  )
}

export default App
