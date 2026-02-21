import React from 'react'
import { useState } from 'react'

export default function PokeCard({pokemon, rmData}) {
    
    const [imgSrc , setImgSrc] = useState(pokemon.sprites.front_shiny)

  return (
    <div id = "card">
        <h3>{pokemon.name}</h3>
        <img src = {imgSrc}></img>
        <button
            onClick={() => {
            imgSrc == pokemon.sprites.front_shiny ? setImgSrc(pokemon.sprites.front_default):
            setImgSrc(pokemon.sprites.front_shiny)
            }}
        >Make shiny</button>
        <button onClick ={()=> {
            rmData(pokemon.id)
            console.log(pokemon.id)
        }}>Remove

        </button>
    </div>
  )
}
