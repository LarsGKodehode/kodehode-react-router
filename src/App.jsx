import {
  HashRouter as Router, // A functional component required for using React Router
  Routes, // A container component for our routes
  Route, // Where we are going to put each route
  Link, // For internal linking we are going to use this component
  NavLink, // An alternative Link that can be used to conditionally style the component
  Outlet, // A component that allows us to compose pages, similar to the 'props.children'
  Navigate // Use this if you want to redirect the user to another URL
} from 'react-router-dom'

// The routes/pages we want to use in our application
import LandingPage from './routes/LandingPage'
import AboutPage from './routes/about/AboutPage'
import Dashboard from './routes/dashboard/Dashboard'
import Measurments from './routes/dashboard/Measurments/Measurments'

/**
 * Instead of having all this code inside our routing code we have extracted it out here
 * Since it is only used inside this file there is no real need to extract it out into its
 * own file, though you could
 */
function Navbar() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/dashboard">Dashboard</Link>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

function App() {
  return (
    /**
     * The Router component needs to wrap around the whole Application
     */
    <Router>

      <Routes>

        {/**
         * This is the root route, this resides at 'www.example.com'
         * The element we give this becomes 'part' of all routes nested beneath this one
         */}
        <Route path='/' element={<Navbar />}>

          {/**
           * We are not giving this a path prop but setting this to be the 'index'
           * This makes it be the default component/page to be displayed for the Navbar component
           */}
          <Route index element={<LandingPage />} />
          {/* This route resides at 'www.example.com/about  */}
          <Route path='about' element={<AboutPage />} />
          
          {/**
           * Here we are creating another set of nested routes
           * The children will all reside under www.example.com/dashboard/<childrenPath>
           */}
          <Route path='dashboard' element={<Dashboard />}>
            <Route path='measurments' element={<Measurments />} />
          </Route>

        </Route>

        {/**
         * Here we are defining a catch all route using the '*' wildcard
         * Commonly used when the the resource does not exist
         * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status for HTML status codes
         */}
        <Route path='*' element={<h1>Error 404</h1>} />

        {/**
         * Depending on your application you might use a redirect instead
         * It is slightly more complex, swap out the above with the one below
         * The replace props is to ensure the user can not use the browsers
         * navigate back to enter the invalid URL
         */}
        {/* <Route path='*' element={<Navigate to='/' replace />}/> */}

      </Routes>

    </Router>
  )
}

export default App