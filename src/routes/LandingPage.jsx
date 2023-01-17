// CSS Modules are really handy for providing scoped CSS Classes to each page
import styles from './layout.module.css'

/**
 * Page to be used as the landing (index) page
 */
function LandingPage() {
  return (
    <div className={styles.page}>
      <main>
        <h1>Landing Page</h1>
        <p>This page resides at the URL "www.mypage.com"</p>
      </main>
    </div>
  )
}

export default LandingPage