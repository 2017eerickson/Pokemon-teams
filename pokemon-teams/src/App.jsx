import './App.css'
import axios from  "axios";

function App() {

  const handleSubmit = (event) => {
    event.preventDefault()
    let formData = new FormData(event.target)
    let jsonData = Object.fromEntries(formData)
    let name = jsonData["name"]
    return fetchData(name)

  }
  const fetchData = async (name) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`
    let response = await axios.get(url)
    let pokeName = response.data.name
    let img = response.data.sprites.front_shiny
    createCard(pokeName,img)
  }

  const createCard = (name, url) => {
    let container = document.getElementById("container")
    let div = document.createElement("div")
    let h4 = document.createElement("h4")
    let img = document.createElement("img")
    div.className ="card"
    img.src = url
    h4.innerText = name
    div.appendChild(h4)
    div.appendChild(img)
    container.appendChild(div)
  }

  return (
    <>
      <h1>Pokemon Teams Assemble !</h1>
      <form onSubmit={()=> handleSubmit(event)}>
        <input type="text" name = "name"/>
        <input type= "submit" />
      </form>
      <div id= "container">
        
      </div>

    </>
  )
}

export default App
