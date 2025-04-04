import './App.css'
import MainPage from './components/MainPage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Users from './components/Users';
import NavBar from './components/NavBar';

function App() {

  const router = createBrowserRouter(
    [ 
      {
        path: '/',
        element:
        <div>
          <NavBar />
          <MainPage />
        </div>
      },

      {
        path: '/users',
        element: 
        <div>
          <NavBar />
          <Users />
        </div>
      },

      {
        path: '/signup',
        element: 
        <div>
          <NavBar />
          <SignUpForm />
        </div>
      },
      
      {
        path: '/login',
        element: 
        <div>
          <NavBar />
          <LoginForm />
        </div>
      }
    ]
  )
 
  return (
    <>
      <RouterProvider router={router}>
        <NavBar />
      </RouterProvider>
    </>
  )
}

export default App
