import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { recipeCategoryList } from "../../lib/recipeCatalog.js";
import { CategoryIconThumb } from "../CategoryIconThumb/CategoryIconThumb.jsx";
import "./RecipeRow.css";

export function RecipeRow({ recipe, onClick }) {
  const [pressed, setPressed] = useState(false);
  return (
    <div
      onClick={onClick}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      className={`recipe-row${pressed ? " recipe-row--pressed" : ""}`}
    >
      <div className="recipe-row__thumb">
        <CategoryIconThumb
          category={recipeCategoryList(recipe)[0] ?? "כללי"}
        />
      </div>

      <div className="recipe-row__main">
        <div className="recipe-row__title">{recipe.title}</div>
        <div className="recipe-row__meta-row">
          <div className="recipe-row__cats">
            {recipeCategoryList(recipe).map((cat, i) => (
              <span key={`${cat}-${i}`} className="recipe-row__cat">
                {cat}
              </span>
            ))}
          </div>
          <span className="recipe-row__meta">
            {recipe.cookTime} · {recipe.ingredients.length} מצרכים
          </span>
        </div>
      </div>

      <ChevronLeft
        className="recipe-row__chevron"
        size={18}
        strokeWidth={2.5}
      />
    </div>
  );
}
