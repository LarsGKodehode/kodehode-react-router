import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

import LandingPage from './routes/LandingPage'
import AboutPage from './routes/about/AboutPage'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/'>
          <Route path='' element={<LandingPage />} />
          <Route path='about' element={<AboutPage />} />
        </Route>

        <Route path='*' element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
