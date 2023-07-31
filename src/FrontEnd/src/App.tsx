import './App.css'
import Home from "./pages/Home";
import Parking from "./pages/Parking";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./pages/Login";
import { useState, createContext } from "react";

const UserContext = createContext({})

export const domain = 'http://198.21.156.104:3000'

function App() {
  const [userContext, setUserContext] = useState(new Object);

  return (
    <div className="App">
      <UserContext.Provider value={[userContext, setUserContext]}>
          <Router>
              <Routes>
                  <Route path='/login' element={<Login />} />
                  <Route path='/' element={<Home />}/>
                  <Route path='/parking' element={<Parking />} />
              </Routes>
          </Router>
        </UserContext.Provider>
    </div>
  )
}

export default App
export { UserContext }
