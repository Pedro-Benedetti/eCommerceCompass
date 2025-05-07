import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Page from './components/Page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
           <Route path='/' element={<App />} />
           <Route path='/category' element={<Page title={'Title category'} />} />
           <Route path='/product' element={<Page title={'Title products'} />} />
       </Routes>
    </BrowserRouter>
  </StrictMode>,
)
