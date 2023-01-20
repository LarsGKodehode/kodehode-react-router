import {Outlet, Link} from 'react-router-dom'
import MyProject from '../../components/MyProject/MyProject'

import styles from './layout.module.css'

/**
 * Example showcasing how to create a new navigation bar
 * for a subsets of the routes, those residing at www.mypage.com/dashboard/* 
 */
function Dashboard() {
  return (
    <div className={styles.page}>
      <h1>Dashboard</h1>
      <p>This page resides at the URL "www.mypage.com/dashboard"</p>

      {/* We can easly use relative links inside som subroutes like here */}
      <nav>
        <ul>
          <Link to='measurments'>Measurments</Link>
        </ul>
      </nav>

      <main>
        <MyProject
          className={styles.myProject}
          user="LarsGKodehode"
        />
        {/* <Outlet /> */}
      </main>
    </div>
  )
}

export default Dashboard