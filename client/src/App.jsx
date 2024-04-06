import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Hotel from './pages/Hotel'
import ListHotels from './pages/ListHotels'
import Header from './components/Header'
import CreateListing from './pages/CreateListing'
import axios from "axios"
axios.defaults.baseURL = 'http://localhost:8800/api'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/hotel' element={<Hotel />}></Route>
        <Route path='/list-hotels' element={<ListHotels />}></Route>
        <Route path='/create-listing' element={<CreateListing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
