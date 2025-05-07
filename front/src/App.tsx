import './App.css'
import SlideLovelyCustomer from './components/SlideLovelyCustomer'

function App() {
  const images = [
    '/public/imagens/catfood1.png'
]
  return (
    <SlideLovelyCustomer images={images}/>
  )
}

export default App
