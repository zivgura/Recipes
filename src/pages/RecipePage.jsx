import { useState } from "react";
import { ArrowRight, Heart, RotateCcw } from "lucide-react";
import { annotateStep, fmtAmt } from "../utils/recipeUtils.js";
import { StepTimer } from "../components/StepTimer.jsx";

export function RecipePage({ recipe, onBack, favs, toggleFav, C, dark }) {
  const [scale, setScale] = useState(1);
  const [done, setDone] = useState({});
  const [checkedIngs, setCheckedIngs] = useState({});
  const toggleStep = (id) => setDone((d) => ({ ...d, [id]: !d[id] }));
  const toggleIng = (id) => setCheckedIngs((d) => ({ ...d, [id]: !d[id] }));
  const totalSteps = recipe.sections.reduce((a, s) => a + s.steps.length, 0);
  const doneCount = Object.values(done).filter(Boolean).length;
  const progress = doneCount / totalSteps;
  const checkedIngCount = Object.values(checkedIngs).filter(Boolean).length;

  const bg = dark ? "#160f0c" : "#fff9f7";
  const card = dark ? "#1f1410" : "#ffffff";
  const textMain = dark ? "#f5ede8" : "#23100a";
  const textSub = dark ? "#8a6050" : "#b07060";
  const textMuted = dark ? "#4a2820" : "#e0c0b8";
  const borderColor = dark ? "#ffffff0a" : "#0000000a";

  return (
    <div style={{ minHeight: "100vh", background: bg, fontFamily: "'Nunito',sans-serif" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: dark ? "#0e1812ee" : "#f6fdf8ee",
          backdropFilter: "blur(16px)",
          padding: "0 20px",
          height: 58,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1px solid ${borderColor}`,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "none",
            border: "none",
            color: C.mint,
            fontSize: 14,
            fontWeight: 800,
            cursor: "pointer",
            fontFamily: "inherit",
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "4px 0",
          }}
        >
          <ArrowRight size={17} strokeWidth={2.5} /> כל המתכונים
        </button>

        {doneCount > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: card,
              borderRadius: 20,
              padding: "6px 14px",
              border: `1.5px solid ${C.mint}22`,
            }}
          >
            <div style={{ width: 80, height: 6, background: textMuted, borderRadius: 6, overflow: "hidden" }}>
              <div
                style={{
                  width: `${progress * 100}%`,
                  height: "100%",
                  background: C.mint,
                  borderRadius: 6,
                  transition: "width 0.3s",
                }}
              />
            </div>
            <span style={{ fontSize: 12, fontWeight: 800, color: C.mint }}>
              {doneCount}/{totalSteps}
            </span>
          </div>
        )}

        <button
          onClick={() => toggleFav(recipe.id)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontSize: 14,
            fontWeight: 800,
            fontFamily: "inherit",
            color: favs.includes(recipe.id) ? "#ff6b6b" : textSub,
            padding: "4px 0",
          }}
        >
          <Heart
            size={18}
            fill={favs.includes(recipe.id) ? "#ff6b6b" : "none"}
            strokeWidth={2.5}
            color={favs.includes(recipe.id) ? "#ff6b6b" : textSub}
          />
        </button>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 20px 100px" }} dir="rtl">
        <div
          style={{
            background: card,
            borderRadius: 28,
            padding: "28px 24px 24px",
            marginBottom: 20,
            border: `1.5px solid ${borderColor}`,
            boxShadow: dark ? "none" : "0 4px 32px #00000009",
          }}
        >
          <div style={{ fontSize: 56, lineHeight: 1, marginBottom: 16 }}>{recipe.emoji}</div>
          <h1
            style={{
              fontFamily: "'Nunito',sans-serif",
              fontSize: 28,
              fontWeight: 900,
              color: textMain,
              lineHeight: 1.2,
              marginBottom: 14,
              letterSpacing: "-0.3px",
            }}
          >
            {recipe.title}
          </h1>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
            <span
              style={{
                background: C.mint,
                color: "#fff",
                borderRadius: 14,
                padding: "5px 14px",
                fontSize: 12,
                fontWeight: 800,
              }}
            >
              {recipe.category}
            </span>
            <span
              style={{
                background: dark ? "#2a1a14" : "#fff0ec",
                color: textSub,
                borderRadius: 14,
                padding: "5px 14px",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              ⏱ {recipe.cookTime}
            </span>
            <span
              style={{
                background: dark ? "#2a1a14" : "#fff0ec",
                color: textSub,
                borderRadius: 14,
                padding: "5px 14px",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              👤 {recipe.servings} מנות
            </span>
            {recipe.tags.map((t) => (
              <span
                key={t}
                style={{
                  background: dark ? "#2a1a14" : "#fff0ec",
                  color: textSub,
                  borderRadius: 14,
                  padding: "5px 14px",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: textSub }}>מנות:</span>
            <button
              onClick={() => setScale((s) => Math.max(0.5, s - 0.5))}
              style={{
                width: 36,
                height: 36,
                borderRadius: 14,
                border: `2px solid ${borderColor}`,
                background: dark ? "#2a1a14" : "#fff0ec",
                color: textMain,
                fontSize: 18,
                cursor: "pointer",
                fontFamily: "inherit",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              −
            </button>
            <span
              style={{
                fontSize: 17,
                fontWeight: 900,
                color: C.mint,
                background: C.mintFaint,
                borderRadius: 14,
                padding: "4px 16px",
                minWidth: 52,
                textAlign: "center",
              }}
            >
              {fmtAmt(recipe.servings, scale)}
            </span>
            <button
              onClick={() => setScale((s) => s + 0.5)}
              style={{
                width: 36,
                height: 36,
                borderRadius: 14,
                border: `2px solid ${borderColor}`,
                background: dark ? "#2a1a14" : "#fff0ec",
                color: textMain,
                fontSize: 18,
                cursor: "pointer",
                fontFamily: "inherit",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              +
            </button>
          </div>
        </div>

        <div
          style={{
            background: card,
            borderRadius: 28,
            padding: "22px 20px",
            marginBottom: 16,
            border: `1.5px solid ${borderColor}`,
            boxShadow: dark ? "none" : "0 4px 32px #00000009",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <h2
              style={{
                fontSize: 18,
                fontWeight: 900,
                color: textMain,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ background: C.mintFaint, borderRadius: 12, padding: "4px 10px", fontSize: 16 }}>🛒</span>
              מצרכים
              {checkedIngCount > 0 && (
                <span style={{ fontSize: 13, fontWeight: 700, color: C.mint }}>
                  {checkedIngCount}/{recipe.ingredients.length}
                </span>
              )}
            </h2>
            {checkedIngCount > 0 && (
              <button
                onClick={() => setCheckedIngs({})}
                style={{
                  background: "none",
                  border: "none",
                  color: textMuted,
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <RotateCcw size={12} /> איפוס
              </button>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {recipe.ingredients.map((ing) => {
              const isChecked = checkedIngs[ing.id];
              return (
                <div
                  key={ing.id}
                  onClick={() => toggleIng(ing.id)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "11px 16px",
                    borderRadius: 16,
                    cursor: "pointer",
                    background: isChecked ? (dark ? "#2a1a1488" : "#fff0ec") : dark ? "#2a1a14" : "#fff9f7",
                    opacity: isChecked ? 0.55 : 1,
                    transition: "all 0.18s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 7,
                        flexShrink: 0,
                        border: `2px solid ${isChecked ? C.mint : textMuted}`,
                        background: isChecked ? C.mint : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.18s",
                      }}
                    >
                      {isChecked && (
                        <span style={{ fontSize: 11, color: "#fff", fontWeight: 900, lineHeight: 1 }}>✓</span>
                      )}
                    </div>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: isChecked ? textMuted : textMain,
                        textDecoration: isChecked ? "line-through" : "none",
                        transition: "all 0.18s",
                      }}
                    >
                      {ing.name}
                    </span>
                  </div>
                  {ing.amount > 0 && (
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: isChecked ? textMuted : C.mint,
                        whiteSpace: "nowrap",
                        marginRight: 8,
                      }}
                    >
                      {fmtAmt(ing.amount, scale)} {ing.unit}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            background: card,
            borderRadius: 28,
            padding: "22px 20px",
            border: `1.5px solid ${borderColor}`,
            boxShadow: dark ? "none" : "0 4px 32px #00000009",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <h2
              style={{
                fontSize: 18,
                fontWeight: 900,
                color: textMain,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ background: C.mintFaint, borderRadius: 12, padding: "4px 10px", fontSize: 16 }}>👨‍🍳</span>
              הכנה
            </h2>
            {doneCount > 0 && (
              <button
                onClick={() => setDone({})}
                style={{
                  background: "none",
                  border: "none",
                  color: textMuted,
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <RotateCcw size={12} /> איפוס
              </button>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {recipe.sections.flatMap((sec) => sec.steps).map((step, idx) => {
              const isDone = done[step.id];
              return (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  style={{
                    padding: "15px 16px",
                    borderRadius: 20,
                    cursor: "pointer",
                    background: isDone ? (dark ? "#2a1a1488" : "#fff0ec") : dark ? "#2a1a14" : "#fff9f7",
                    border: `1.5px solid ${isDone ? C.mint + "44" : "transparent"}`,
                    transition: "all 0.18s",
                    opacity: isDone ? 0.65 : 1,
                  }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 10,
                        flexShrink: 0,
                        background: isDone ? C.mint : C.mintFaint,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: isDone ? 15 : 13,
                        fontWeight: 900,
                        color: isDone ? "#fff" : C.mint,
                        transition: "all 0.18s",
                      }}
                    >
                      {isDone ? "✓" : idx + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          color: isDone ? textMuted : textMain,
                          lineHeight: 1.65,
                          textDecoration: isDone ? "line-through" : "none",
                        }}
                      >
                        {annotateStep(step.text, recipe.ingredients, scale).map((seg, si) =>
                          seg.ing && seg.amt ? (
                            <span key={si}>
                              {seg.text}
                              <span
                                style={{
                                  color: isDone ? textMuted : C.mint,
                                  fontWeight: 800,
                                  fontSize: 13,
                                  background: isDone ? "transparent" : C.mintFaint,
                                  borderRadius: 6,
                                  padding: "1px 5px",
                                  marginRight: 1,
                                  whiteSpace: "nowrap",
                                }}
                              >
                                ({seg.amt})
                              </span>
                            </span>
                          ) : (
                            <span key={si}>{seg.text}</span>
                          )
                        )}
                      </p>
                      {step.warning && !isDone && (
                        <div
                          style={{
                            marginTop: 10,
                            background: "#ff8c0018",
                            border: "1.5px solid #ff8c0044",
                            borderRadius: 14,
                            padding: "9px 14px",
                            fontSize: 13,
                            fontWeight: 700,
                            color: "#e07000",
                            display: "flex",
                            gap: 8,
                            alignItems: "flex-start",
                          }}
                        >
                          ⚠️ {step.warning}
                        </div>
                      )}
                      {step.timer && !isDone && <StepTimer stepId={step.id} seconds={step.timer} C={C} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {progress === 1 && (
            <div
              style={{
                textAlign: "center",
                padding: "28px 20px",
                marginTop: 16,
                background: C.mintFaint,
                borderRadius: 22,
                border: `1.5px solid ${C.mint}44`,
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 8 }}>🎉</div>
              <p style={{ fontSize: 17, fontWeight: 900, color: C.mint }}>{recipe.title} מוכן!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
