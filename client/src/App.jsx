import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Hotel from './pages/Hotel'
import ListHotels from './pages/ListHotels'
import CreateHotel from './pages/CreateHotel'
import Header from './components/Header'

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
        <Route path='/create-hotel' element={<CreateHotel />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
