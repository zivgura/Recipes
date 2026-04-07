import { iconForCategory } from '../../lib/categoryIconMap.js'
import '../CategoryIcon/CategoryIcon.css'
import './CategoryIconThumb.css'

export function CategoryIconThumb({ category, className = '' }) {
  const src = iconForCategory(category)
  return (
    <div
      className={`category-icon category-icon--thumb ${className}`.trim()}
      aria-hidden
    >
      <span className='category-icon__tile'>
        <img
          src={src}
          alt=''
          className='category-icon__img'
          draggable={false}
        />
      </span>
    </div>
  )
}
