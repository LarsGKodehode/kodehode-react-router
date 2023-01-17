import {Outlet, Link} from 'react-router-dom'


import styles from './layout.module.css'
const someName = {}

function LandingPage() {
  return (
    <div className={styles.page}>
      <main>
        <h1>Landing Page</h1>
        <p>This is page resides at the URL "www.mypage.com"</p>
      </main>
    </div>
  )
}

export default LandingPage