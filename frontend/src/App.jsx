import './App.css'
import MainPage from './components/MainPage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Users from './components/Users';

function App() {

  const router = createBrowserRouter(
    [ 
      {
        path: '/',
        element: <Users />
      },

      {
        path: '/signup',
        element: <SignUpForm />
      },
      
      {
        path: '/login',
        element: <LoginForm />
      }
    ]
  )
 
  return (
    <>
      <MainPage />
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
