'use client'

import Header from '../components/Header'
import NavTabs from '../components/NavTabs'
import MenuGrid from '../components/MenuGrid'
import { menuItems, MenuItem } from '../data/menu'
import Footer from '../components/Footer'
import styles from './page.module.css'

export default function Home() {
  const ramen = menuItems.filter((item: MenuItem) => item.category === 'ramen')
  const donburi = menuItems.filter((item: MenuItem) => item.category === 'donburi')

  return (
    <main className={`${styles.main} seigaiha-bg`}>
      <div className={`blob-red blob-top-right ${styles.blob}`}>
        <div className="blob-arcs" />
      </div>
      <div className={`blob-red blob-bottom-left ${styles.blob}`}>
        <div className="blob-arcs" />
      </div>
      <div className={styles.content}>
        <Header />
        <NavTabs />

        <div id="ramen">
          <MenuGrid items={ramen} title="Ramen" />
        </div>
        <div id="donburi">
          <MenuGrid items={donburi} title="Donburi Set" />
        </div>
      </div>
      <Footer />
    </main>
  )
}