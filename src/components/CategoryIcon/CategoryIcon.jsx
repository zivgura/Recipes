import { iconForCategory } from '../../lib/categoryIconMap.js'
import './CategoryIcon.css'

export default function CategoryIcon({
  category,
  selected,
  onClick,
  className = ''
}) {
  const src = iconForCategory(category)
  return (
    <button
      type='button'
      className={`category-icon${selected ? ' category-icon--selected' : ''} ${className}`.trim()}
      onClick={onClick}
      aria-pressed={selected}
    >
      <span className='category-icon__tile' aria-hidden>
        <img
          src={src}
          alt=''
          className='category-icon__img'
          draggable={false}
        />
      </span>
      <span className='category-icon__label'>{category}</span>
    </button>
  )
}
