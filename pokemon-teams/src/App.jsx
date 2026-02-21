import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
import PokeCard from './assets/components/PokeCard';
import UserInput from './assets/components/UserInput';

function App() {
  const [pokeData, setPokeData] = useState([])

  useEffect(() => {
    console.log(pokeData)
    }, [pokeData])

  const addData = (data)=>{
    setPokeData([...pokeData,data])
  }

  const rmData = (id) => {
    setPokeData(
      pokeData.filter((pokemon)=>(
      pokemon.id != id
      )))
    console.log(pokeData)
  }
    

  return (
    <>
      <h1>Pokemon Teams Assemble !</h1>
      <UserInput
        addData={addData}
      />
        <div id= "container">
          { 
            pokeData.map((pokemon) => (
              <PokeCard
                pokemon = {pokemon}
                rmData = {rmData}
              />
          ))
          }
        
      </div>

    </>
  )
}

export default App
