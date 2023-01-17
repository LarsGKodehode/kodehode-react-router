import {Outlet, Link} from 'react-router-dom'


import styles from './layout.module.css'

function Dashboard() {
  return (
    <div className={styles.page}>
      <h1>Dashboard</h1>
      <p>This is page resides at the URL "www.mypage.com/dashboard"</p>

      {/* We can easly use relative links inside som subroutes like here */}
      <nav>
        <ul>
          <Link to='measurments'>Measurments</Link>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Dashboard