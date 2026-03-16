import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <h2 className={styles.name}>MISO</h2>
        <p className={styles.tagline}>Thank you for your patronage. Please, let us know of any dietary requirements</p>
        <div className={styles.buttons}>
          <a href="#" className={styles.btnDark}>🛒 ORDER ONLINE</a>
          <a href="#" className={styles.btnDark}>📅 BOOK</a>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoTitle}>Location</h3>
          <a href="#" className={styles.infoLink}>79 Brisbane Street, Perth WA, Australia</a>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoTitle}>Phone</h3>
          <a href="tel:12345678" className={styles.infoLink}>12345678</a>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoTitle}>Email</h3>
          <a href="mailto:info@menuzen.com" className={styles.infoLink}>info@menuzen.com</a>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoTitle}>Website</h3>
          <a href="#" className={styles.infoLink}>www.menuzen.com</a>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoTitle}>Socials</h3>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon}>f</a>
            <a href="#" className={styles.socialIcon}>⬤</a>
            <a href="#" className={styles.socialIcon}>𝕏</a>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <h3 className={styles.hoursTitle}>Opening Hours</h3>
        {['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map((day) => (
          <div key={day} className={styles.hoursRow}>
            <span>{day}</span>
            <span>Closed</span>
          </div>
        ))}
      </div>
    </footer>
  )
}