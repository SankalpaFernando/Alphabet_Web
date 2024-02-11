import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import LoginPage from './pages/Login.page'
import { Navigate } from 'react-router-dom'
import PrivateRoute from './util/PrivateRoute'

function Home(){
  return <h1>Home</h1>

}

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='login' element={<LoginPage/>} />
        <Route exact path='/' element={<PrivateRoute Component={Home} />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
