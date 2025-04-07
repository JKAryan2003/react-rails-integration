import './App.css'
import MainPage from './components/MainPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Users from './components/Users';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState()
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar token={token} setToken={setToken}/>}>
            <Route index element={<MainPage />} />
            <Route path="users" element={<Users />} />
            <Route path="signup" element={<SignUpForm />} />
            <Route path="login" element={<LoginForm token={token} setToken={setToken}/>} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
