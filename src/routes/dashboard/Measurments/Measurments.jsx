import styles from './layout.module.css'

/**
 * Example sub page component
 */
function Measurements() {
  return (
    <div className={styles.page}>
      <h2>Measurments</h2>
      <p>This page resides at the URL "www.mypage.com/dashboard/measurments"</p>
    </div>
  )
}

export default Measurements