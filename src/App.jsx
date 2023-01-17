import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom'

import LandingPage from './routes/LandingPage'
import AboutPage from './routes/about/AboutPage'
import Dashboard from './routes/dashboard/Dashboard'
import Measurments from './routes/dashboard/Measurments/Measurments'

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
    <Router>

      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='' element={<LandingPage />} />
          <Route path='about' element={<AboutPage />} />

          <Route path='dashboard' element={<Dashboard />}>
            <Route path='measurments' element={<Measurments />} />
          </Route>
        </Route>

        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}

export default App