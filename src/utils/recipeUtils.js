export const fmtAmt = (amount, scale) => {
  const v = amount * scale;
  if (v === 0) return "";
  if (v === Math.floor(v)) return String(v);
  const frac = v - Math.floor(v);
  const fracs = [
    [0.25, "¼"],
    [0.33, "⅓"],
    [0.5, "½"],
    [0.67, "⅔"],
    [0.75, "¾"],
  ];
  for (const [f, s] of fracs) if (Math.abs(frac - f) < 0.05) return (Math.floor(v) || "") + s;
  return v.toFixed(1);
};

export function annotateStep(text, ingredients, scale) {
  const noise = new Set(["את", "של", "עם", "על", "עד", "או", "לפי", "ללא", "כ", "הם", "הן", "זה", "זו", "יש", "לא"]);
  const entries = [];
  for (const ing of ingredients) {
    if (ing.amount === 0 && !ing.unit) continue;
    const tokens = ing.name
      .replace(/[()]/g, "")
      .split(/[\s,/]+/)
      .filter((t) => t.length >= 2 && !noise.has(t));
    for (const tok of tokens) entries.push({ keyword: tok, ing });
  }
  entries.sort((a, b) => b.keyword.length - a.keyword.length);
  const amtStr = (ing) => {
    if (ing.amount === 0) return ing.unit || "";
    const a = fmtAmt(ing.amount, scale);
    return ing.unit ? `${a} ${ing.unit}` : a;
  };
  const marked = new Array(text.length).fill(null);
  const matches = [];
  for (const { keyword, ing } of entries) {
    let pos = 0;
    while (pos < text.length) {
      const idx = text.indexOf(keyword, pos);
      if (idx === -1) break;
      const end = idx + keyword.length;
      let overlap = false;
      for (let i = idx; i < end; i++) {
        if (marked[i]) {
          overlap = true;
          break;
        }
      }
      if (!overlap) {
        for (let i = idx; i < end; i++) marked[i] = ing;
        matches.push({ start: idx, end, ing });
      }
      pos = idx + 1;
    }
  }
  if (matches.length === 0) return [{ text }];
  matches.sort((a, b) => a.start - b.start);
  const segs = [];
  let cursor = 0;
  for (const m of matches) {
    if (m.start > cursor) segs.push({ text: text.slice(cursor, m.start) });
    segs.push({ text: text.slice(m.start, m.end), ing: m.ing, amt: amtStr(m.ing) });
    cursor = m.end;
  }
  if (cursor < text.length) segs.push({ text: text.slice(cursor) });
  return segs;
}
