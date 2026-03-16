import Image from 'next/image'
import type { MenuItem } from '../data/menu'
import styles from './MenuCard.module.css'

type Props = {
  item: MenuItem
}

export default function MenuCard({ item }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
      <div className={styles.imageWrapper}>
  <img
    src={item.image}
    alt={item.name}
    className={styles.menuImage}
  />
</div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${item.price}</span>
          {item.spicy && (
            <span className={styles.spicyBadge}>SPICY</span>
          )}
        </div>
      </div>
    </div>
  )
}

function BowlIcon({ category }: { category: string }) {
  return (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.bowlSvg}>
      {category === 'ramen' ? (
        <>
          <ellipse cx="40" cy="42" rx="32" ry="12" fill="#d4a45c" opacity="0.3"/>
          <path d="M12 32 Q40 52 68 32" stroke="#c8923a" strokeWidth="1.5" fill="none"/>
          <ellipse cx="40" cy="32" rx="28" ry="10" fill="#e8c17a" opacity="0.6"/>
          <circle cx="30" cy="30" r="5" fill="#f5e6c8" opacity="0.8"/>
          <circle cx="50" cy="28" r="4" fill="#d4875a" opacity="0.7"/>
          <path d="M25 20 Q30 10 35 20" stroke="#5a8a3a" strokeWidth="1.5" fill="none"/>
          <path d="M45 18 Q50 8 55 18" stroke="#5a8a3a" strokeWidth="1.5" fill="none"/>
        </>
      ) : (
        <>
          <rect x="14" y="28" width="52" height="22" rx="3" fill="#e8d5a0" opacity="0.7"/>
          <rect x="16" y="18" width="48" height="14" rx="2" fill="#c8923a" opacity="0.5"/>
          <ellipse cx="40" cy="18" rx="24" ry="6" fill="#d4a45c" opacity="0.6"/>
          <circle cx="40" cy="16" r="8" fill="#c8923a" opacity="0.4"/>
        </>
      )}
    </svg>
  )
}
