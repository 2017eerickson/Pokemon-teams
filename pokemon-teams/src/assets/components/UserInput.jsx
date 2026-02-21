import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function UserInput({ addData }) {

    const [pokeName, setPokeName]= useState("pikachu")
    

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
  )
}
