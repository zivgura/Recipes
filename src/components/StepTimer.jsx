import { useState, useEffect, useRef } from "react";

export function StepTimer({ stepId, seconds, C }) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [running, setRunning] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    setTimeLeft(seconds);
    setRunning(false);
    clearInterval(ref.current);
  }, [stepId]);
  useEffect(() => {
    if (running && timeLeft > 0) {
      ref.current = setInterval(
        () =>
          setTimeLeft((t) => {
            if (t <= 1) {
              clearInterval(ref.current);
              setRunning(false);
              return 0;
            }
            return t - 1;
          }),
        1000
      );
    }
    return () => clearInterval(ref.current);
  }, [running]);
  const mins = Math.floor(timeLeft / 60),
    secs = timeLeft % 60;
  const done = timeLeft === 0,
    pct = timeLeft / seconds,
    circ = 2 * Math.PI * 13;
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: done ? C.greenFaint : C.mintFaint,
        borderRadius: 24,
        padding: "6px 12px 6px 8px",
        marginTop: 10,
        border: `1.5px solid ${done ? C.green : C.mint}`,
      }}
    >
      <svg width="30" height="30">
        <circle cx="15" cy="15" r="13" fill="none" stroke={done ? C.green : C.mintLight} strokeWidth="2.5" />
        {!done && (
          <circle
            cx="15"
            cy="15"
            r="13"
            fill="none"
            stroke={C.mint}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={`${pct * circ} ${circ}`}
            strokeDashoffset={circ * 0.25}
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "15px 15px",
              transition: "stroke-dasharray 1s linear",
            }}
          />
        )}
        {done ? (
          <text x="15" y="20" textAnchor="middle" fontSize="13" fill={C.green} fontWeight="600">
            ✓
          </text>
        ) : (
          <text x="15" y="19.5" textAnchor="middle" fontSize="7.5" fill={C.mint} fontFamily="inherit" fontWeight="600">
            {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
          </text>
        )}
      </svg>
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (!done) setRunning((r) => !r);
        }}
        disabled={done}
        style={{
          background: done ? "transparent" : running ? "#ff5e5e22" : C.mint,
          border: "none",
          borderRadius: 16,
          padding: "4px 12px",
          fontSize: 12,
          fontWeight: 600,
          color: done ? C.green : running ? "#ff5e5e" : "#fff",
          cursor: done ? "default" : "pointer",
          fontFamily: "inherit",
        }}
      >
        {done ? "הסתיים ✓" : running ? "השהה" : "התחל"}
      </button>
      {!done && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            clearInterval(ref.current);
            setTimeLeft(seconds);
            setRunning(false);
          }}
          style={{
            background: "transparent",
            border: "none",
            fontSize: 15,
            cursor: "pointer",
            color: C.mintLight,
            padding: "2px 2px",
            lineHeight: 1,
          }}
        >
          ↺
        </button>
      )}
    </div>
  );
}
