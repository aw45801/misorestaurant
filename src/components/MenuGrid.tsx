import type { MenuItem } from '../data/menu'
import MenuCard from './MenuCard'
import styles from './MenuGrid.module.css'

type Props = {
  items: MenuItem[]
  title: string
}

export default function MenuGrid({ items, title }: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.grid}>
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
