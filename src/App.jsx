
import { useState } from 'react'
import Cards from './components/Cards/Cards'
import './style/App.css'

function App() {

  const [id, setId] = useState(0);

  const arrText = [
    {
      id:1,
      price: 300,
      speed: 10,
      color: 'blue',
      titleColor:'tblue'
    },
    {
      id:2,
      price: 450,
      speed: 50,
      color: 'green',
      titleColor:'tgreen'
    },
    {
      id:3,
      price: 550,
      speed: 100,
      color: 'red',
      titleColor:'tred'
      // position: 'active'
    },
    {
      id:4,
      price: 1000,
      speed: 200,
      color: 'black',
      titleColor:'tblack'
    }
  ]


  return (
    <div className='container'>
      {arrText.map(item =><Cards
      {...item}
      key={item.id}
      activeCards={item.id === id}
      setId={setId}
      /> )}
    </div>
  )
}

export default App
