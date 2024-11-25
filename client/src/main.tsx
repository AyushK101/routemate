import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import { HomePage,LoginPage } from './pages'
import { Loading } from './components'
import { Provider } from 'react-redux'
import { store } from './redux'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound.tsx'
// const LoginPage = lazy( ()=> import('./pages Page.tsx'))
const SignupPage = lazy( ()=> import('./pages/SignupPage'))
/**
 * @ErrorBoundary
 * > router
 */

const router = createBrowserRouter([
  {
    path: '/',
    // element: <GlobalErrorBoundary><App/></GlobalErrorBoundary>,
    element: <App/>,
    children: [
      {
        path: '/',
        element: <ProtectedRoute><HomePage/></ProtectedRoute>
      },
      {
        path: '/signup',
        element: <Suspense fallback={<Loading/>}>
        <SignupPage/>
        </Suspense>
      },
      {
        path: '/login',
        element: 
          <Suspense fallback={<Loading/>}>
          <LoginPage/>
          // </Suspense>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
