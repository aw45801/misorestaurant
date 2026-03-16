'use client'

import styles from './NavTabs.module.css'

export default function NavTabs() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px auto' }}>
      <nav className={styles.nav}>
        <div className={styles.tabContainer}>
          <a href="#ramen" className={`${styles.tab} ${styles.active}`}>Ramen</a>
          <a href="#donburi" className={styles.tab}>Donburi Set</a>
        </div>
      </nav>
    </div>
  )
}