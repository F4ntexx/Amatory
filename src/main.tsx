import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Index.css'
import App from './App'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Advice from './pages/Advice'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/signIn', element: <SignIn/>},
  {path: '/signUp', element: <SignUp/>},
  {path: '/about', element: <About/>},
  {path: '/advice', element: <Advice/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

