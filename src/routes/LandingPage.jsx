// CSS Modules are really handy for providing scoped CSS Classes to each page
import styles from './layout.module.css'

// This is whats happening
const stylesObj = {
  "cssClassname": "Vite generating some unique classname"
}

// Importing of assets when we are using a build tool (ViteJS)
import reactLogo from '../assets/react.svg'


import icons from '../assets/index'

/**
 * Page to be used as the landing (index) page
 */
function LandingPage() {
  return (
    <div className={styles.page}>
      <main>
        <h1>Landing Page</h1>

        <img src={reactLogo} alt="react logo" />

        {
          icons.map(
            (element, index) => {
              return (
                <img key={index} src={element.icon} alt={element.alt} />
              )
            }
          )
        }

        <p>This page resides at the URL "www.mypage.com"</p>
      </main>
    </div>
  )
}

export default LandingPage