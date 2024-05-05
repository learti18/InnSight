import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Hotel from './pages/Hotel'
import ListProperties from './pages/ListProperties'
import Header from './components/Header'
import CreateListing from './pages/CreateListing'
import axios from "axios"
import Property from './pages/Property'
import Footer from './components/Footer'
import Blog from './pages/Blog'
import Login from './pages/Login'
import ContactUs from './pages/ContactUs'





axios.defaults.baseURL = 'http://localhost:8800/api'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/Blog' element={<Blog />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/ContactUs' element={<ContactUs />}></Route>

        <Route path='/hotel' element={<Hotel />}></Route>
        <Route path='/list-properties' element={<ListProperties />}></Route>
        <Route path='/create-listing' element={<CreateListing />}></Route>
        <Route path='/property/:id' element={<Property />}></Route>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
