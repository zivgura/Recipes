import { useState } from "react";
import { Heart, ChevronLeft } from "lucide-react";

export function RecipeRow({ recipe, onClick, isFav, onFav, C, dark }) {
  const [pressed, setPressed] = useState(false);
  return (
    <div
      onClick={onClick}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 20px",
        background: pressed ? (dark ? "#f0fdf422" : "#f0fdf4") : "transparent",
        borderBottom: `1px solid ${dark ? "#ffffff0a" : "#0000000a"}`,
        cursor: "pointer",
        transition: "background 0.1s",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: 18,
          flexShrink: 0,
          background: dark ? "#2a1a14" : "#fff0ec",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 26,
        }}
      >
        {recipe.emoji}
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: "'Nunito',sans-serif",
            fontSize: 17,
            fontWeight: 800,
            color: dark ? "#f0faf4" : "#0f2318",
            lineHeight: 1.25,
            marginBottom: 4,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {recipe.title}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              background: C.mint,
              color: "#fff",
              borderRadius: 10,
              padding: "2px 9px",
              fontSize: 11,
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            {recipe.category}
          </span>
          <span style={{ fontSize: 12, color: dark ? "#9e6a58" : "#b07060" }}>
            {recipe.cookTime} · {recipe.ingredients.length} מצרכים
          </span>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 2, flexShrink: 0 }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFav(recipe.id);
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 6,
            display: "flex",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <Heart
            size={19}
            fill={isFav ? "#ff6b6b" : "none"}
            color={isFav ? "#ff6b6b" : dark ? "#3d6b52" : "#b0ccba"}
            strokeWidth={2}
          />
        </button>
        <ChevronLeft size={18} color={dark ? "#3d6b52" : "#b0ccba"} strokeWidth={2.5} />
      </div>
    </div>
  );
}
