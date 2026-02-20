import './App.css'
import { useState } from 'react';
import axios from  "axios";
import { useEffect } from 'react';

function App() {
  const [pokeName, setPokeName]= useState("pikachu")
  const [pokeData, setPokeData] = useState([])

  useEffect(() => {
    console.log(pokeData)
    }, [pokeData])

  const addData = (data)=>{
    setPokeData([...pokeData,data])
    console.log(pokeData)
  }

  const fetchData = async () => {
      let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      let response = await axios.get(url)
      addData(response.data)
    }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchData()
    }
    

  return (
    <>
      <h1>Pokemon Teams Assemble !</h1>
      <form onSubmit={()=> handleSubmit(event)}>
        <input 
        type="text" 
        name = "name"
        placeholder = "enter pokemon name"
        value={pokeName}
        onChange = {(evt) => setPokeName(evt.target.value)}
        />
        <input type= "submit"/> 
      </form>
        <div id= "container">
          { 
            pokeData.map((pokemon) => (
            <div id = "card">
              <h3>{pokemon.name}</h3>
              <img src = {pokemon.sprites.front_shiny}></img>
            </div>
          ))
          }
        
      </div>

    </>
  )
}

export default App
