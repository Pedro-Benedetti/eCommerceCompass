import './App.css'
import ProductList from './components/ProductsList'
import SlideLovelyCustomer from './components/SlideLovelyCustomer'

function App() {
  const images = [
    '/imagens/catfood1.png'
];
  return (
    <ProductList />
    
    //<SlideLovelyCustomer images={images}/>
  )
}

export default App
