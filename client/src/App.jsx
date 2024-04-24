import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import IsUserLoggedIn from "../routes/IsUserLoggedIn";


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/notes' element={<Home />} />
      <Route path='/profile' element={<Profile />} />

      <Route element = {<IsUserLoggedIn/>}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
