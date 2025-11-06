import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Index from './profile/Index'
import CarDetail from './components/Cardetail'
import Page from './inventry/Page'
import Addlisting from './listing/Addlisting'
import CityBuy from './components/CityBuy'

// 1. Ensure all components are default exports
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> // Must be JSX, not Home
  },
  {
    path: "/profile",
    element: <Index /> // Must be JSX
  },
  {
    path: "/listing",
    element: <Addlisting /> // Must be JSX
  },
  {
    path: "/cars/:id",
    element: <CarDetail /> // Must be JSX
  },
  {
    path: "/inventry",
    element: <Page /> // Must be JSX
  },
  {
    path: "/home",
    element: <Home /> // Must be JSX
  },
  {
    path: "/cars/city/:city",
    element: <CityBuy /> // Must be JSX
  }
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
)