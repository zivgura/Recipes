import allRecipesIcon from '../assets/category-icons/all-recipes-icon.svg'
import mainDishIcon from '../assets/category-icons/main-dish-icon.svg'
import sideDishIcon from '../assets/category-icons/side-dish-icon.svg'
import soupsIcon from '../assets/category-icons/soups-icon.svg'
import desertsIcon from '../assets/category-icons/deserts-icon.svg'
import partyIcon from '../assets/category-icons/party-icon.svg'
import mexicanIcon from '../assets/category-icons/mexican-icon.svg'
import asianIcon from '../assets/category-icons/asian-icon.svg'
import cocktailsIcon from '../assets/category-icons/cocktails-icon.svg'

const CATEGORY_ICON_SRC = {
  הכל: allRecipesIcon,
  עיקריות: mainDishIcon,
  תוספות: sideDishIcon,
  מרקים: soupsIcon,
  קינוחים: desertsIcon,
  מסיבות: partyIcon,
  מקסיקני: mexicanIcon,
  אסייתי: asianIcon,
  קוקטיילים: cocktailsIcon,
}

export function iconForCategory(category) {
  return CATEGORY_ICON_SRC[category] ?? allRecipesIcon
}
