import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import LoginPage from './pages/Login.page'
import { Navigate } from 'react-router-dom'
import PrivateRoute from './util/PrivateRoute'
import HomePage from './pages/Home.page'


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='login' element={<LoginPage/>} />
        <Route exact path='/' element={<PrivateRoute Component={HomePage} />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
