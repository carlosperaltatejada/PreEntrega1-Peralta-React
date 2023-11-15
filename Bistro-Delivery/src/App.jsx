import { useState } from 'react'

import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import CartWidget from './Components/CartWidget/CartWidget'
import NavBar from './Components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hola Mundo!" />
    </>
  )
}

export default App
