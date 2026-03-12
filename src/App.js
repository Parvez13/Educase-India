import {Routes,Route} from 'react-router-dom'
import Welcome from './components/welcome'
import Login from './components/login'
import Signup from './components/signup'
import Account from './components/account'
import './App.css'

const App = ()=>(
<Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/account" element={<Account />} />
  </Routes>

)

export default App