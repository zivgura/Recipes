// Sample data for reference / tests only — the app loads recipes from Google Drive when configured (see README).
export const FALLBACK_RECIPES = [
  {
    id: "quinoa",
    title: "קינואה מוקפצת",
    category: "תוספות",
    tags: ["צמחוני", "צהריים"],
    emoji: "🌾",
    cookTime: "30 דק׳",
    servings: 4,
    ingredients: [
      { id: "i1", name: "קינואה", amount: 1, unit: "כוס" },
      { id: "i2", name: "מים רותחים", amount: 2, unit: "כוס" },
      { id: "i3", name: "גזר קצוץ", amount: 1, unit: "" },
      { id: "i4", name: "בצל קצוץ", amount: 0.5, unit: "" },
      { id: "i5", name: "סילאן", amount: 1, unit: "כף" },
      { id: "i6", name: "רוטב סויה", amount: 3.5, unit: "כף" },
      { id: "i7", name: "כורכום", amount: 0, unit: "קורט" },
      { id: "i8", name: "פלפל לבן", amount: 0, unit: "קורט" },
      { id: "i9", name: "מלח", amount: 0, unit: "קורט" },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s1",
            text: "משרים את הקינואה לפחות חצי שעה, שוטפים אותה היטב במסננת ומשאירים שהמים יתנקזו עד הסוף.",
            timer: 1800,
            warning: null,
          },
          {
            id: "s2",
            text: "מטגנים את הבצל והגזר בסיר הבישול על אש בינונית, עד שהבצל משחים (והגזר מתרכך) כ-5 דקות.",
            timer: 300,
            warning: null,
          },
          {
            id: "s3",
            text: "מוסיפים את התבלינים (ללא המלח) ואת הקינואה ומטגנים אותם על אש גבוהה כדקה יחד עם הירקות.",
            timer: 60,
            warning: null,
          },
          {
            id: "s4",
            text: "מוסיפים את המים, הסויה, המלח והסילאן ומבשלים עם מכסה סגור ועל אש נמוכה 20 דקות.",
            timer: 1200,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "turkey-meatballs",
    title: "כדורי הודו ברוטב עגבניות",
    category: "מנות עיקריות",
    tags: ["צהריים", "אירוח"],
    emoji: "🍅",
    cookTime: "60 דק׳",
    servings: 6,
    ingredients: [
      { id: "i1", name: "הודו אדום טחון", amount: 1, unit: "ק״ג" },
      { id: "i2", name: "בצל קצוץ דק", amount: 1, unit: "" },
      { id: "i3", name: "סולת", amount: 4, unit: "כף" },
      { id: "i4", name: "עגבניות רכות או שימורים", amount: 2, unit: "ק״ג" },
      { id: "i5", name: "שן שום קצוצה", amount: 1, unit: "" },
      { id: "i6", name: "רסק עגבניות", amount: 1, unit: "מיכל" },
      { id: "i7", name: "מים לפי הסמיכות", amount: 0, unit: "" },
      { id: "i8", name: "מלח, פלפל, אורגנו, סוכר", amount: 0, unit: "" },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s1",
            text: "מערבבים את ההודו, הבצל והסולת בקערה ומכדררים לכדורים.",
            timer: null,
            warning: null,
          },
          {
            id: "s2",
            text: "מטגנים את השום והעגבניות כ-5 דקות.",
            timer: 300,
            warning: null,
          },
          {
            id: "s3",
            text: "מוסיפים את שאר המרכיבים ומבשלים כ-10 דקות.",
            timer: 600,
            warning:
              "כשמוסיפים מים — לזכור שהעוף מוציא נוזלים, לא להוסיף יותר מדי.",
          },
          {
            id: "s4",
            text: "מוסיפים את הכדורים ומבשלים כ-45 דקות.",
            timer: 2700,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "orange-soup",
    title: "מרק כתומים",
    category: "מרקים",
    tags: ["צמחוני", "צהריים", "אירוח"],
    emoji: "🥕",
    cookTime: "50 דק׳",
    servings: 6,
    ingredients: [
      { id: "i1", name: "שמן זית", amount: 3, unit: "כף" },
      { id: "i2", name: "בצל אדום קצוץ", amount: 0.67, unit: "כוס" },
      { id: "i3", name: "שיני שום כתושות", amount: 5, unit: "" },
      {
        id: "i4",
        name: "ירקות כתומים (דלעת, גזר, בטטה)",
        amount: 2.5,
        unit: "ק״ג",
      },
      { id: "i5", name: "פפריקה", amount: 1, unit: "כפית" },
      { id: "i6", name: "פלפל אנגלי או בהרט", amount: 1, unit: "כפית" },
      { id: "i7", name: "פפריקה חריפה", amount: 0, unit: "קורט" },
      { id: "i8", name: "מלח", amount: 2, unit: "כפית" },
      { id: "i9", name: "מים", amount: 6, unit: "כוס" },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s1",
            text: "מחממים שמן בסיר גדול ומטגנים בצל עד שמזהיב. מוסיפים שום ומטגנים דקה. מוסיפים ירקות, תבלינים ומים ומביאים לרתיחה.",
            timer: null,
            warning: null,
          },
          {
            id: "s2",
            text: "מכסים הסיר ומבשלים על להבה בינונית-נמוכה 30–40 דקות עד שהירקות רכים.",
            timer: 2100,
            warning: null,
          },
          {
            id: "s3",
            text: "מסירים מהכיריים ומעבדים בבלנדר למרק חלק. מחזירים לסיר ומבשלים 5 דקות נוספות.",
            timer: 300,
            warning: null,
          },
          {
            id: "s4",
            text: "יוצקים לקעריות. ניתן להוסיף מעט חלב קוקוס לטעם עשיר יותר.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "yellow-curry",
    title: "תבשיל קארי צהוב",
    category: "מנות עיקריות",
    tags: ["צהריים", "אירוח"],
    emoji: "🍛",
    cookTime: "25 דק׳",
    servings: 4,
    ingredients: [
      { id: "i1", name: "חזה עוף חתוך לחתיכות", amount: 1, unit: "" },
      { id: "i2", name: "שמן קנולה או קוקוס", amount: 1, unit: "כף" },
      { id: "i3", name: "בצל קצוץ לרצועות", amount: 1, unit: "" },
      { id: "i4", name: "שיני שום קצוצות", amount: 5, unit: "" },
      { id: "i5", name: "גמבה אדומה", amount: 1, unit: "" },
      { id: "i6", name: "שעועית ירוקה", amount: 100, unit: "גרם" },
      { id: "i7", name: "חלב קוקוס", amount: 500, unit: "מ״ל" },
      { id: "i8", name: "משחת קארי צהוב", amount: 2, unit: "כף" },
      { id: "i9", name: "רוטב סויה", amount: 1, unit: "כף" },
      { id: "i10", name: "חמאת בוטנים טבעית", amount: 3, unit: "כף" },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s1",
            text: "מחממים שמן במחבת עמוקה ומטגנים בצל עד שנהיה שקוף.",
            timer: null,
            warning: null,
          },
          {
            id: "s2",
            text: "מוסיפים שום, גמבה ושעועית ומבשלים כ-2 דקות. מוסיפים עוף ומבשלים עד שמשחים מעט.",
            timer: 120,
            warning: null,
          },
          {
            id: "s3",
            text: "תוחמים הירקות בצד, מוסיפים שמן ומטגנים את משחת הקארי עד שהשמן נפרד ממנה.",
            timer: null,
            warning: "חשוב — לא לדלג על טיגון הקארי! זה קריטי לפתיחת הטעמים.",
          },
          {
            id: "s4",
            text: "מוסיפים חמאת בוטנים ורוטב סויה, מערבבים ומבשלים 2 דקות.",
            timer: 120,
            warning: null,
          },
          {
            id: "s5",
            text: "מוסיפים חלב קוקוס, מנמיכים אש ומבשלים 5–7 דקות עד שהעוף מוכן. מגישים מעל אורז.",
            timer: 360,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "smashed-potatoes",
    title: "תפוחי אדמה מעוכים",
    category: "תוספות",
    tags: ["צמחוני", "אירוח"],
    emoji: "🥔",
    cookTime: "45 דק׳",
    servings: 4,
    ingredients: [
      { id: "i1", name: "תפוחי אדמה", amount: 1, unit: "ק״ג" },
      { id: "i2", name: "מלח גס", amount: 1, unit: "כף" },
      { id: "i3", name: "שמן זית", amount: 0.5, unit: "כוס" },
      { id: "i4", name: "גבעולי טימין טרי", amount: 4.5, unit: "" },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s1",
            text: "שוטפים תפוחי האדמה. מכסים במים עם כף מלח, מביאים לרתיחה ומבשלים 10 דקות עד שרכים.",
            timer: 600,
            warning: null,
          },
          {
            id: "s2",
            text: "מוציאים ונותנים להתקרר על מגבות נייר.",
            timer: 300,
            warning: null,
          },
          {
            id: "s3",
            text: "מרפדים תבנית בנייר אפיה, מורחים שמן זית. מניחים תפוחי האדמה ומועכים בתחתית בקבוק לשליש גובהם.",
            timer: null,
            warning: null,
          },
          {
            id: "s4",
            text: "יוצקים שמן זית בנדיבות, מפזרים טימין ומלח גס. אופים 230 מעלות כ-20 דקות עד שפריכים ושחומים.",
            timer: 1200,
            warning: null,
          },
        ],
      },
    ],
  },
];

export const ALL_RECIPES = [
  {
    id: "1g5y7EwDSi88fswPINSkgLEWO0HBg02bh",
    title: "לביבות בטטה בתנור",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "בטטות קלופות ומגוררות דק",
        amount: 2,
        unit: "",
      },
      {
        id: "i1",
        name: "ביצים",
        amount: 2,
        unit: "",
      },
      {
        id: "i2",
        name: "שמן זית",
        amount: 2,
        unit: "כפות",
      },
      {
        id: "i3",
        name: "גרעיני דלעת קלופים",
        amount: 2,
        unit: "כפות",
      },
      {
        id: "i4",
        name: "קמח (אפשר קמח מצה)",
        amount: 0.25,
        unit: "כוס",
      },
      {
        id: "i5",
        name: "אבקת אפיה",
        amount: 0.5,
        unit: "כפית",
      },
      {
        id: "i6",
        name: "מלח",
        amount: 0.5,
        unit: "כפית",
      },
      {
        id: "i7",
        name: "קורט פלפל לבן",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מחממים תנור ל 200 מעלות.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "טורפים את הביצים בקערה, מוסיפים את הבטטות המגוררות, ומרכיבים יבשים.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מוסיפים שמן ואופים בתנור כ 10 דקות מכל צד.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1xlSJrfz_Hcbd7wsJ7ATBbfNggJcKL_eh",
    title: "כדורי הודו ברוטב עגבניות",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "הודו אדום טחון",
        amount: 1,
        unit: 'ק"ג',
      },
      {
        id: "i1",
        name: "בצל קצוץ דק",
        amount: 1,
        unit: "",
      },
      {
        id: "i2",
        name: "סולת",
        amount: 4,
        unit: "כפות",
      },
      {
        id: "i3",
        name: "(כ-14) עגבניות רכות או שימורים של עגבניות מרוסקות",
        amount: 2,
        unit: 'ק"ג',
      },
      {
        id: "i4",
        name: "שן שום קצוצה",
        amount: 1,
        unit: "",
      },
      {
        id: "i5",
        name: "מיכל קטן רסק עגבניות",
        amount: 1,
        unit: "",
      },
      {
        id: "i6",
        name: "מים לפי הסמיכות",
        amount: 1,
        unit: "",
      },
      {
        id: "i7",
        name: "קורט מלח",
        amount: 1,
        unit: "",
      },
      {
        id: "i8",
        name: "קורט פלפל",
        amount: 1,
        unit: "",
      },
      {
        id: "i9",
        name: "חצי כפית אורגנו",
        amount: 1,
        unit: "",
      },
      {
        id: "i10",
        name: "סוכר",
        amount: 1,
        unit: "כפית",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מערבבים את ההודו, הבצל והסולת בקערה ומכדררים לכדורים.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מטגנים את השום והעגבניות כ 5 דקות.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מוסיפים את שאר המרכיבים ומבשלים כ 10 דקות (כשמוסיפים מים לזכור שהעוף מוציא מעט נוזלים).",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "מוסיפים את הכדורים ומבשלים כ 45 דקות.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "17W-ajE3VCSeAO_V1pTLqEMgZ9Je-GLS3",
    title: "חזה עוף צלוי במשחת תבלינים",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "חזה עוף נקי וחצוי",
        amount: 1,
        unit: "",
      },
      {
        id: "i1",
        name: "למשחת התבלינים:",
        amount: 1,
        unit: "",
      },
      {
        id: "i2",
        name: "שן שום כתושה",
        amount: 1,
        unit: "",
      },
      {
        id: "i3",
        name: "ג'ינג'ר טרי מגורד",
        amount: 1,
        unit: "כפית",
      },
      {
        id: "i4",
        name: "פלפל שחור גרוס",
        amount: 0.125,
        unit: "כפית",
      },
      {
        id: "i5",
        name: "ציפורן טחון",
        amount: 0.125,
        unit: "כפית",
      },
      {
        id: "i6",
        name: "קינמון טחון",
        amount: 0.125,
        unit: "כפית",
      },
      {
        id: "i7",
        name: "אבקת זרעי כוסברה",
        amount: 0.125,
        unit: "כפית",
      },
      {
        id: "i8",
        name: "שמן זית",
        amount: 1,
        unit: "כף",
      },
      {
        id: "i9",
        name: "מלח ים גס",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מערבבים את כל מרכיבי המשחה לתערובת אחידה ומעסים בה את חזה העוף מכל הצדדים",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מחממים מחבת גריל עם פסים (ללא תוספת שמן) על להבה בינונית-גבוהה עד שהיא חמה מאוד. מוסיפים למחבת את נתחי העוף, מנמיכים את האש ללהבה בינונית ומטגנים כ 3-4 דקות מכל צד.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: 'מכסים את המחבת ומבשלים 15-20 דקות על להבה נמוכה עד שהעו, מוכן ורך מאוד. מוציאים מהמחבת, מצננים מעט ופורסים לרוחב לעובי 6-7 מ"מ.',
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1gpEJrZuSCD9O6yO1b6IHB5VlOUjy_dij",
    title: "עלי גפן",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "צנצנת וחצי עלי גפן במי מלח",
        amount: 1,
        unit: "",
      },
      {
        id: "i1",
        name: "עגבניות לריפוד תחתית הסיר",
        amount: 2,
        unit: "",
      },
      {
        id: "i2",
        name: "למילוי:",
        amount: 1,
        unit: "",
      },
      {
        id: "i3",
        name: "אורז יסמין",
        amount: 2.5,
        unit: "כוסות",
      },
      {
        id: "i4",
        name: "עגבניות",
        amount: 2,
        unit: "",
      },
      {
        id: "i5",
        name: "בצל",
        amount: 1,
        unit: "",
      },
      {
        id: "i6",
        name: "שיני שום",
        amount: 7,
        unit: "",
      },
      {
        id: "i7",
        name: "שמן קנולה",
        amount: 7,
        unit: "כפות",
      },
      {
        id: "i8",
        name: "רוטב רימונים",
        amount: 4,
        unit: "כפות",
      },
      {
        id: "i9",
        name: "תמרהינדי",
        amount: 3,
        unit: "כפות",
      },
      {
        id: "i10",
        name: "כף וחצי מלח",
        amount: 1,
        unit: "",
      },
      {
        id: "i11",
        name: "חצי כפית פלפל",
        amount: 1,
        unit: "",
      },
      {
        id: "i12",
        name: "חופן נענע מיובשת",
        amount: 1,
        unit: "",
      },
      {
        id: "i13",
        name: "עלי נענע טריה",
        amount: 7,
        unit: "",
      },
      {
        id: "i14",
        name: "לרוטב:",
        amount: 1,
        unit: "",
      },
      {
        id: "i15",
        name: "מים רותחים",
        amount: 2,
        unit: "כוסות",
      },
      {
        id: "i16",
        name: "שמן זית",
        amount: 5,
        unit: "כפות",
      },
      {
        id: "i17",
        name: "מיץ מלימון אחד",
        amount: 1,
        unit: "",
      },
      {
        id: "i18",
        name: "כף וחצי סוכר",
        amount: 1,
        unit: "",
      },
      {
        id: "i19",
        name: "כפית מלח",
        amount: 1,
        unit: "",
      },
      {
        id: "i20",
        name: "חצי כפית פלפל",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "להשרות את האורז במים למשך חצי שעה ואז לסנן (לא מבשלים).",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "לקצוץ את העגבניות והבצל, למעוך את השום ולהוסיף לאורז יחד עם כל שאר המרכיבים.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "שוטפים את עלי הגפן במים ומנסים להפריד מבלי לקרוע. העלים הקרועים ישמשו לריפוד תחתית הסיר.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "לוקחים כפית מהמילוי ומניחים במרכז העלה, מקפלים את הצדדים פנימה ואז מגלגלים מתחתית העלה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s4-0",
            text: "חוזרים על הפעולה עד שנגמרים העלים והמילוי.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s5-0",
            text: "מרפדים את תחתית הסיר בעלים הקרועים ובפרוסות עגבניות.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s6-0",
            text: "מסדרים את העלים המגולגלים כמה שיותר צמוד אחד לשני.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s7-0",
            text: "מכינים את הרוטב ושופכים עד כיסוי הממולאים (נוסיף עוד מים אם חסר).",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s8-0",
            text: "מבשלים על אש קטנה למשך שעתיים, מדי פעם מסתכלים וכשהמים מתאדים מוסיפים עוד קצת.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1-376zsOtT1sVfP_b3hNTTKlN-VBrd3dp",
    title: "תבשיל עוף בקונפי בצלים עם קינואה",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "5-7 בצלים חצויים וחתוכים לרצועות",
        amount: 1,
        unit: "",
      },
      {
        id: "i1",
        name: "חזה עוף נקי וחצוי או חלקי עוף אחרים",
        amount: 5,
        unit: "",
      },
      {
        id: "i2",
        name: "קינואה",
        amount: 2,
        unit: "כוסות",
      },
      {
        id: "i3",
        name: "מלח",
        amount: 1,
        unit: "כפית",
      },
      {
        id: "i4",
        name: "חצי כפית פלפל לבן",
        amount: 1,
        unit: "",
      },
      {
        id: "i5",
        name: "חצי כפית טימין",
        amount: 1,
        unit: "",
      },
      {
        id: "i6",
        name: "מייפל, סילאן או סוכר חום",
        amount: 1,
        unit: "כף",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "בסיר רחב ונמוך שמתאים לתנור (סוטאז’) מחממים שמן ומטגנים את הבצלים במשך 20 דקות על אש בינונית. חשוב מדי פעם לערבב כדי שלא ישרפו אבל שיקבלו צבע זהוב.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מוסיפים מלח, פלפל, עלי טימין ומייפל וממשיכים לטגן, תוך כדי ערבוב מדי פעם עד שהבצלים חומים, בערך עוד 10-15 דקות.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מזיזים את הבצלים הצידה ומניחים את חלקי העוף, כשהצד של העור כלפי מטה, בתוך הסיר. חשוב שהעור יגע בסיר מבלי שיהיו מתחת בצלים אחרת הם ישרפו והעוף לא יקבל צריבה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "מחממים תנור ל 190 מעלות",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s4-0",
            text: "צורבים את העוף היטב עד שהוא מקבל צבע זהוב בצד אחד ומדי פעם מזיזים קצת את הבצלים שלא ישרפו בצידי הסיר. אל תמשיכו הלאה עד שהוא מקבל צבע יפה מתחת.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s5-0",
            text: "הופכים את העוף ומסדרים מסביב את הבצלים. זה בסדר שחלק מהבצלים נמצאים מעל העוף.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s6-0",
            text: "שופכים את הקינואה פנימה ו 2 כוסות מים רותחים ומביאים לרתיחה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s7-0",
            text: "מכסים ומכניסים את הסיר לתנור למשך 40 דקות או עד שהמים מתאדים והקינואה מוכנה.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "15SwwU6vPSa76cVFBqH4rIPGNTcrtZSqL",
    title: "חזה עוף צלוי במשחת תבלינים",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "כוס עדשים שחורות",
        amount: 1,
        unit: "",
      },
      {
        id: "i1",
        name: "אורז",
        amount: 2,
        unit: "כוסות",
      },
      {
        id: "i2",
        name: "מים רותחים",
        amount: 4,
        unit: "כוסות",
      },
      {
        id: "i3",
        name: "בצלים",
        amount: 2,
        unit: "",
      },
      {
        id: "i4",
        name: "כפית כורכום",
        amount: 1,
        unit: "",
      },
      {
        id: "i5",
        name: "כפית כמון",
        amount: 1,
        unit: "",
      },
      {
        id: "i6",
        name: "חצי כפית כוסברה טחונה",
        amount: 1,
        unit: "",
      },
      {
        id: "i7",
        name: "חצי כפית קינמון",
        amount: 1,
        unit: "",
      },
      {
        id: "i8",
        name: "מעט אגוז מוסקט",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מבשלים את העדשים כ 15 דקות.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מטגנים את הבצלים ושמים בצד.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מטגנים את התבלינים מוסיפים את האורז והעדשים המבושלות, מבשלים במים כ10 דקות.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1kbCR_ISLd5w3tpsCw5bIXrOq7h51Z-iw",
    title: "סלסת עגבניות",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "שיני שום",
        amount: 3,
        unit: "",
      },
      {
        id: "i1",
        name: "פלפל חריף ירוק",
        amount: 1,
        unit: "",
      },
      {
        id: "i2",
        name: "בצל סגול",
        amount: 1,
        unit: "",
      },
      {
        id: "i3",
        name: "מיץ לימון/ליים",
        amount: 3,
        unit: "כפות",
      },
      {
        id: "i4",
        name: "כמון טחון",
        amount: 2,
        unit: "כפיות",
      },
      {
        id: "i5",
        name: "מלח",
        amount: 1.5,
        unit: "כפיות",
      },
      {
        id: "i6",
        name: "כפית סוכר",
        amount: 1,
        unit: "",
      },
      {
        id: "i7",
        name: "חצי קילו עגבניות",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "הכנה",
        steps: [
          {
            id: "s0-0",
            text: "מועכים הכל במעבד מזון",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1YFqhHXwwRy3eNR9Hr4VAjTvpLhE1uUof",
    title: "לביבות דלורית",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "דלורית",
        amount: 1,
        unit: "",
      },
      {
        id: "i1",
        name: "בצל",
        amount: 1,
        unit: "",
      },
      {
        id: "i2",
        name: "2-3 ביצים",
        amount: 1,
        unit: "",
      },
      {
        id: "i3",
        name: "גבינה צהובה 5%",
        amount: 100,
        unit: "גרם",
      },
      {
        id: "i4",
        name: "שיבולת שועל טחונה",
        amount: 0.5,
        unit: "כוס",
      },
      {
        id: "i5",
        name: "אבקת אפיה",
        amount: 0.5,
        unit: "כפית",
      },
      {
        id: "i6",
        name: "מלח",
        amount: 0.25,
        unit: "כפית",
      },
      {
        id: "i7",
        name: "מעט פלפל לבן",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מחממים תנור ל180 מעלות.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מגררים את הדלורית והבצל, מערבבים עם שאר המרכיבים.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "יוצרים לביבות ואופים בתנור כ 20 דקות.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "170gAbXg4LoBQEZC2BTPqDhhlQ7w9rIkX",
    title: "מרק עדשים כתומות",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "עדשים כתומות",
        amount: 2,
        unit: "כוסות",
      },
      {
        id: "i1",
        name: "בצלים",
        amount: 2,
        unit: "",
      },
      {
        id: "i2",
        name: "שיני שום חתוכות",
        amount: 3,
        unit: "",
      },
      {
        id: "i3",
        name: "גזרים",
        amount: 10,
        unit: "",
      },
      {
        id: "i4",
        name: "ענפי סלרי בלי עלים",
        amount: 8,
        unit: "",
      },
      {
        id: "i5",
        name: "קישואים",
        amount: 2,
        unit: "",
      },
      {
        id: "i6",
        name: "שורשי פטרוזיליה",
        amount: 2,
        unit: "",
      },
      {
        id: "i7",
        name: "רבע כפית כורכום",
        amount: 1,
        unit: "",
      },
      {
        id: "i8",
        name: "רבע כפית כמון",
        amount: 1,
        unit: "",
      },
      {
        id: "i9",
        name: "רבע כפית כוסברה טחונה",
        amount: 1,
        unit: "",
      },
      {
        id: "i10",
        name: "קורט פלפל לבן",
        amount: 1,
        unit: "",
      },
      {
        id: "i11",
        name: "כפית מלח",
        amount: 1,
        unit: "",
      },
      {
        id: "i12",
        name: "עלה דפנה",
        amount: 1,
        unit: "",
      },
      {
        id: "i13",
        name: "עלי בזיליקום",
        amount: 3,
        unit: "",
      },
      {
        id: "i14",
        name: "מים",
        amount: 13,
        unit: "כוסות",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "משרים את העדשים במים לכמה שעות, עדיף ללילה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מטגנים בסיר גדול את הבצל עד לשקיפות ומוסיפים את השום, הגזר, הפטרוזיליה והסלרי לעוד כ 5 דקות ואז מוסיפים את הקישואים.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "שוטפים את העדשים ומוסיפים אותם, את התבלינים ואת המים לסיר ומביאים לרתיחה. מנמיכים את האש, מכסים ומבשלים כשעה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "(רשות) מוסיפים את עלי הבזיליקום כ 20 דקות לפני סוף הבישול.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s4-0",
            text: "מוציאים את עלה הדפנה ועלי הבזיליקום וחצי טוחנים את המרק, לא למרקם קרמי לחלוטין.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1vONDgDjzMZldss6h1qeH5tQRMLUdaCdM",
    title: "פשטידיות תירס",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "קמח תופח/ קמח רגיל עם חצי שקית אבקת אפיה",
        amount: 3,
        unit: "כוסות",
      },
      {
        id: "i1",
        name: "כפית מלח",
        amount: 1,
        unit: "",
      },
      {
        id: "i2",
        name: "גביעי קוטג'",
        amount: 2,
        unit: "",
      },
      {
        id: "i3",
        name: "גליל גבינת עיזים חתוך לקוביות",
        amount: 1,
        unit: "",
      },
      {
        id: "i4",
        name: "כוס גבינה צהובה מגוררת",
        amount: 1,
        unit: "",
      },
      {
        id: "i5",
        name: "כוס חלב",
        amount: 1,
        unit: "",
      },
      {
        id: "i6",
        name: "חמאה מומסת",
        amount: 100,
        unit: "גרם",
      },
      {
        id: "i7",
        name: "ביצים",
        amount: 4,
        unit: "",
      },
      {
        id: "i8",
        name: "כוס תירס",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מערבבים את כל המרכיבים יחד.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "שמים בתבנית מאפינס משומנת (לא במנגטים כי זה נדבק).",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "אופים ב170 מעלות כ20 דקות, עד שמזהיב.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1HVAZAGWpW5cOiwuNeaPcJKmYcLF19Zr-",
    title: "מרק גריסים (6 מנות)",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "חצי כוס גריסי פנינה",
        amount: 1,
        unit: "",
      },
      {
        id: "i1",
        name: "בצל גדול",
        amount: 1,
        unit: "",
      },
      {
        id: "i2",
        name: "גזרים גדולים",
        amount: 3,
        unit: "",
      },
      {
        id: "i3",
        name: "ענפי סלרי בלי עלים",
        amount: 3,
        unit: "",
      },
      {
        id: "i4",
        name: "מים",
        amount: 7,
        unit: "כוסות",
      },
      {
        id: "i5",
        name: "מלח ופלפל לבן",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "משרים את הגריסים במים לכשעה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מטגנים בסיר גדול את הבצל הגזר והסלרי על אש בינונית- נמוכה כ 5 דקות- שלא ישרפו.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "שוטפים את הגריסים ומוסיפים אותם, מים ואת התבלינים לסיר ומביאים לרתיחה. מנמיכים את האש, מכסים ומבשלים כשעה.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1a6_jK3PmuGsdg_l2h7CdI_4e511FXfNx",
    title: "שווארמה הודו בתנור",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "נתחי הודו אדום לשווארמה",
        amount: 1,
        unit: "",
      },
      {
        id: "i1",
        name: "תערובת תבלינים: בהרט, כורכום, כמון, פלפל לבן, מלח",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "אופים את ההודו בלי כלום בתנור על 110 מעלות (כן!) למשך כ40 דקות, עד שהנתח מבושל לחלוטין.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "נותנים לנתח להתקרר וחותכים אותו לפרוסות דקות.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מחממים מעט שמן במחבת ומטגנים את פרוסות ההודו עם התבלינים עד שמשחימות (ניתן להוסיף בצל).",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1ffrGfyMCCBQgJ7ZPOg_1XefSnVkJ4ePr",
    title: "מרק אפונה (6 מנות)",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "אפונה יבשה",
        amount: 500,
        unit: "גרם",
      },
      {
        id: "i1",
        name: "בצלים גדולים",
        amount: 2,
        unit: "",
      },
      {
        id: "i2",
        name: "2-3 גזרים גדולים",
        amount: 1,
        unit: "",
      },
      {
        id: "i3",
        name: "ענפי סלרי בלי עלים",
        amount: 3,
        unit: "",
      },
      {
        id: "i4",
        name: "4-5 שיני שום חתוכות",
        amount: 1,
        unit: "",
      },
      {
        id: "i5",
        name: "כפית כורכום",
        amount: 1,
        unit: "",
      },
      {
        id: "i6",
        name: "כפית כמון",
        amount: 1,
        unit: "",
      },
      {
        id: "i7",
        name: "מים (2 ליטר)",
        amount: 8,
        unit: "כוסות",
      },
      {
        id: "i8",
        name: "מלח ופלפל שחור",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "משרים את האפונה במים עם כפית סודה לשתיה לכחצי יום עד יום (צריכה להיווצר שכבת קצף למעלה).",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מטגנים בסיר גדול את הבצל עד להזהבה ומוסיפים את השום, הגזר והסלרי על אש בינונית- נמוכה כ 10 דקות.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "שוטפים את האפונה ומוסיפים אותה ואת התבלינים לסיר ומביאים לרתיחה. מנמיכים את האש, מכסים ומבשלים כ 2-3 שעות (עד שהאפונה מתפרקת לגמרי).",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "מועכים את המרק למרקם קרמי.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "160gGGPPPR-03Zp1kVTK0lcLxlBOJ4Cjd",
    title: "פשטידיות ברוקולי",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [],
    sections: [
      {
        title: "הכנה",
        steps: [
          {
            id: "s0-0",
            text: "3 בצלים גדולים קצוצים",
            timer: null,
            warning: null,
          },
          {
            id: "s0-1",
            text: "300 גרם פרחי ברוקולי מפולחים לפרחים קטנים",
            timer: null,
            warning: null,
          },
          {
            id: "s0-2",
            text: "3 קישואים מגוררים",
            timer: null,
            warning: null,
          },
          {
            id: "s0-3",
            text: "1/2 כוס שמן זית",
            timer: null,
            warning: null,
          },
          {
            id: "s0-4",
            text: "3 ביצים",
            timer: null,
            warning: null,
          },
          {
            id: "s0-5",
            text: "מלח",
            timer: null,
            warning: null,
          },
          {
            id: "s0-6",
            text: "פלפל שחור גרוס",
            timer: null,
            warning: null,
          },
          {
            id: "s0-7",
            text: "כף טרגון",
            timer: null,
            warning: null,
          },
          {
            id: "s0-8",
            text: "3/4 כוס קמח תופח",
            timer: null,
            warning: null,
          },
          {
            id: "s0-9",
            text: "3/4 כוס שיבולת שועל טחונה + כפית אבקת אפיה/ קמח תופח",
            timer: null,
            warning: null,
          },
          {
            id: "s0-10",
            text: "לטגן את הבצל במעט שמן זית עד שמזהיב, במקביל לשלוק את הברוקולי במים רותחים כ 7 ד'ק ולגרר את הקישואים לתוך מסננת כדי לנקז את המיץ. להדליק תנור ל 180 מעלות.",
            timer: null,
            warning: null,
          },
          {
            id: "s0-11",
            text: "לערבב את כל המרכיבים לפי הסדר הרשום, ליצוק את התערובת לתבנית שקעים ולאפות כ20 ד'ק.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1VKlnL-T_20DirrGdK5w_T9uYb7uDC8qA",
    title: "תבשיל קארי צהוב",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "חזה עוף חתוך לחתיכות (אופציונאלי)",
        amount: 1,
        unit: "",
      },
      {
        id: "i1",
        name: "שמן (קנולה או קוקוס)",
        amount: 1,
        unit: "כף",
      },
      {
        id: "i2",
        name: "בצל, קצוץ לרצועות",
        amount: 1,
        unit: "",
      },
      {
        id: "i3",
        name: "שיני שום קצוצות או חתוכות",
        amount: 5,
        unit: "",
      },
      {
        id: "i4",
        name: "גמבה אדומה",
        amount: 1,
        unit: "",
      },
      {
        id: "i5",
        name: "שעועית ירוקה עדינה",
        amount: 100,
        unit: "גרם",
      },
      {
        id: "i6",
        name: "חלב קוקוס",
        amount: 500,
        unit: 'מ"ל',
      },
      {
        id: "i7",
        name: "משחת קארי צהוב",
        amount: 2,
        unit: "כפות",
      },
      {
        id: "i8",
        name: "רוטב סויה",
        amount: 1,
        unit: "כף",
      },
      {
        id: "i9",
        name: "חמאת בוטנים טבעית",
        amount: 3,
        unit: "כפות",
      },
      {
        id: "i10",
        name: "הוראות הכנה:",
        amount: 1,
        unit: "",
      },
      {
        id: "i11",
        name: "מחממים שמן במחבת עמוקה או בסיר רחב ומטגנים את הבצל עד שנהיה שקוף.",
        amount: 1,
        unit: "",
      },
      {
        id: "i12",
        name: "מוסיפים את השום, הגמבה והשעועית ומבשלים כ 2 דקות עם כף מים רותחים. לאחר שלב זה, ניתן לתחום את הירקות בצד אחד ולהוסיף את חזה העוף ולבשל עד שמשחים מעט (לא עשוי לגמרי).",
        amount: 1,
        unit: "",
      },
      {
        id: "i13",
        name: "תוחמים את הירקות (והעוף) בצד אחד, מוסיפים מעט שמן וכשהוא מתחמם- מוסיפים את הקארי. מטגנים את הקארי עד שרואים שהשמן נפרד מהמשחה (חשוב- לא לדלג על טיגון הקארי, זה קריטי לפתיחת הטעמים שלו).",
        amount: 1,
        unit: "",
      },
      {
        id: "i14",
        name: "מוסיפים את חמאת הבוטנים ורוטב הסויה, מערבבים הכל ומבשלים, תוך כדי ערבוב, כ2 דקות נוספות.",
        amount: 1,
        unit: "",
      },
      {
        id: "i15",
        name: "מוסיפים את חלב הקוקוס ומנמיכים את האש, מערבבים טוב ומבשלים 5-7 דקות (או עד שהעוף מוכן לגמרי מבפנים).",
        amount: 1,
        unit: "",
      },
      {
        id: "i16",
        name: "מומלץ להגיש מעל אורז!",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "הכנה",
        steps: [
          {
            id: "s0-0",
            text: "(אין שלבי הכנה — הוסיפו מקטע «אופן ההכנה» במסמך)",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1Tqxd7mXeoK2yH0gdUBlqZPFq49WAa_n0",
    title: "קיש עגבניות",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "לבצק:",
        amount: 1,
        unit: "",
      },
      {
        id: "i1",
        name: "קמח (200 גרם)",
        amount: 4,
        unit: "כוסות",
      },
      {
        id: "i2",
        name: "חמאה",
        amount: 100,
        unit: "גרם",
      },
      {
        id: "i3",
        name: "מלח",
        amount: 0.75,
        unit: "כפית",
      },
      {
        id: "i4",
        name: "חלמון",
        amount: 1,
        unit: "",
      },
      {
        id: "i5",
        name: "4-5 כפות מים קרים",
        amount: 1,
        unit: "",
      },
      {
        id: "i6",
        name: "מלית:",
        amount: 1,
        unit: "",
      },
      {
        id: "i7",
        name: "חמאה",
        amount: 2,
        unit: "כפות",
      },
      {
        id: "i8",
        name: "בצל, קצוץ דק",
        amount: 1,
        unit: "",
      },
      {
        id: "i9",
        name: "עגבניות מקולפות וקצוצות גס",
        amount: 1,
        unit: 'ק"ג',
      },
      {
        id: "i10",
        name: "מלח ופלפל",
        amount: 1,
        unit: "",
      },
      {
        id: "i11",
        name: "קורט קורנית (טימין)",
        amount: 1,
        unit: "",
      },
      {
        id: "i12",
        name: "עלה דפנה",
        amount: 1,
        unit: "",
      },
      {
        id: "i13",
        name: "שמנת סויה",
        amount: 0.75,
        unit: "כוס",
      },
      {
        id: "i14",
        name: "ביצים",
        amount: 2,
        unit: "",
      },
      {
        id: "i15",
        name: 'תבנית לפאי בקוטר 22 ס"מ',
        amount: 1,
        unit: "",
      },
      {
        id: "i16",
        name: "להכנת הבצק:",
        amount: 1,
        unit: "",
      },
      {
        id: "i17",
        name: "מחממים תנור לחום גבוה (200 מעלות). מערבבים את הקמח, החמאה המרוככת, המלח, החלמון ו4 כפות מים. מניחים במקרר ל30 דקות לפני השימוש (עד שמוצק).",
        amount: 1,
        unit: "",
      },
      {
        id: "i18",
        name: "מניחים נייר אפיה ומרפדים את התבנית בבצק, דוקרים את הבצק במזלג, מניחים עליו נייר אפיה נוסף, מהדקים וממלאים בשעועית יבשה. אופים כ 15 דקות, או עד ששולי הבצק מתחילים להשחים.",
        amount: 1,
        unit: "",
      },
      {
        id: "i19",
        name: "להכנת המלית ואפיית הקיש:",
        amount: 1,
        unit: "",
      },
      {
        id: "i20",
        name: "בנתיים, ממיסים את החמאה במחבה, מוסיפים את הבצל ומבשלים על אש נמוכה תוך ערבוב לעיתים קרובות עד שהבצל מתרכך.",
        amount: 1,
        unit: "",
      },
      {
        id: "i21",
        name: "מוסיפים את העגבניות, המלח, הפלפל, הקורנית ועלה הדפנה ומבשלים על אש גבוהה, תוך ערבוב לעיתים קרובות, כ 15 דקות או עד שרוב הנוזלים מתאדים והתערובת נראית יבשה. מוציאית את עלה הדפנה ומניחים לתערובת להתקרר.",
        amount: 1,
        unit: "",
      },
      {
        id: "i22",
        name: "מוציאים את השעועית מהתבנית ואופים 5 דקות נוספות, או עד שהבסיס מושחם קלות. מוציאים מהתנור ומניחים להתקרר מעט. בנתיים, מנמיכים את חום התנור לבינוני גבוה (190 מעלות) ומחממים בו תבנית אפיה שטוחה.",
        amount: 1,
        unit: "",
      },
      {
        id: "i23",
        name: "טורפים את הביצים עם השמנת ומערבבים עם תערובת העגבניות. טועמים בכדי לתקן תיבול.",
        amount: 1,
        unit: "",
      },
      {
        id: "i24",
        name: "יוצקים את תערובת העגבניות לתבנית הפאי ומניחים אותה על התבנית המחוממת שבתנור. אופים כ 30-40 דקות או עד שהמלית נקרשת; כאשר לוחצית עליה בעדינות, היא אינה נדבקת לאצבע.",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "הכנה",
        steps: [
          {
            id: "s0-0",
            text: "(אין שלבי הכנה — הוסיפו מקטע «אופן ההכנה» במסמך)",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "199zwui32AK6pO5JcPMh2dScBJ3AU0q9g",
    title: "מרק בטטה וערמונים (לעשות כמות כפולה)",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "ערמונים קלופים",
        amount: 100,
        unit: "גרם",
      },
      {
        id: "i1",
        name: "מיכל של קרם קוקוס",
        amount: 0.5,
        unit: "",
      },
      {
        id: "i2",
        name: "שמן זית",
        amount: 3,
        unit: "כפות",
      },
      {
        id: "i3",
        name: "בצלים חתוכים לקוביות קטנות",
        amount: 2,
        unit: "",
      },
      {
        id: "i4",
        name: "בטטה בינונית חתוכה לקוביות",
        amount: 1,
        unit: "",
      },
      {
        id: "i5",
        name: "שיני שום חתוכות",
        amount: 2,
        unit: "",
      },
      {
        id: "i6",
        name: "עלה דפנה",
        amount: 1,
        unit: "",
      },
      {
        id: "i7",
        name: "כפית כורכום",
        amount: 1,
        unit: "",
      },
      {
        id: "i8",
        name: "מים",
        amount: 3,
        unit: "כוסות",
      },
      {
        id: "i9",
        name: "מלח ופלפל שחור",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מטגנים בסיר גדול את הבצל עד להזהבה ומוסיפים את השום.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מוסיפים את שאר המרכיבים ומביאים לרתיחה. מבשלים כ 40 דקות על אש נמוכה עם מכסה סגור עד לריכוך הבטטות.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מוציאים את עלה בדפנה, מכבים את האש ומוסיפים את קרם הקוקוס תוך כדי ערבוב.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "מועכים את המרק למרקם קרמי, טועמים ומתבלים לפי הטעם.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1cKtCPA2s14aP2NH1go3CZlBH8Gc-qdZi",
    title: "תפוחי אדמה מעוכים",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "תפוחי אדמה",
        amount: 1,
        unit: "",
      },
      {
        id: "i1",
        name: "מלח גס",
        amount: 1,
        unit: "",
      },
      {
        id: "i2",
        name: "שמן זית",
        amount: 0.5,
        unit: "כוס",
      },
      {
        id: "i3",
        name: "4-5 גבעולי טימין טרי",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "שוטפים היטב את תפוחי האדמה מבלי לפגוע בקליפתם, מעבירים לסיר רחב ועמוק, מכסים במים עד כדי כיסוי ועוד 3 סנטימטרים ומוסיפים כף מלח.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מביאים את הסיר לרתיחה על להבה גבוהה ולאחר מכן מנמיכים לבישול של 10 דקות נוספות, עד שתפוחי האדמה מתרככים דיים כדי ששיני מזלג ינעצו בהם בקלות, אך ללא התנגדות (שלא יגיעו למצב שהם מתפוררים).",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מוציאים את תפוחי האדמה מהמים ונותנים להם להתקרר על גבי מגבות נייר, או מסננים את המים ונותנים לתפוחי האדמה לאדות את המים שנותרו בהם.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "מרפדים תבנית אפיה שטוחה בנייר אפיה ומורחים אותו בשתי כפות שמן זית. נוטלים את תפוחי האדמה המבושלים לאחר שהצטננו מעט, מניחים על התבנית ומועכים אותם בעזרת תחתית של בקבוק בירה או צנצנת זכוכית. על המכיעה לשטח את תפוח האדמה בערך לשליש גובהו המקורי, כך שהוא אינו דק מידי אך המעיכה ניכרת, קליפתו קרועה ותוכו מבצבץ מבעדה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s4-0",
            text: "יוצקים מעל שמן זית בנדיבות, מפזרים את עלי הטימין והמלח הגס. מכניסים לתנור שחומם מראש ל 230 מעלות למשך כ 20 דקות, עד שתפוחי האדמה שחומים ופריכים.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1zg49TOrKPOdEeMfk84bi9qyWyyxsywcj",
    title: "מרק כתומים",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "שמן זית מעורב עם שמן קנולה",
        amount: 3,
        unit: "כפות",
      },
      {
        id: "i1",
        name: "בצל אדום קצוץ",
        amount: 0.6666666666666666,
        unit: "כוס",
      },
      {
        id: "i2",
        name: "שיני שום כתושות",
        amount: 5,
        unit: "",
      },
      {
        id: "i3",
        name: "תערובת ירקות כתומים: דלעת, גזר ובטטה קלופים וחתוכים גס",
        amount: 2.5,
        unit: 'ק"ג',
      },
      {
        id: "i4",
        name: "פפריקה",
        amount: 1,
        unit: "כפית",
      },
      {
        id: "i5",
        name: "פלפל אנגלי או תערובת בהרט",
        amount: 1,
        unit: "כפית",
      },
      {
        id: "i6",
        name: "קורט פפריקה חריפה",
        amount: 1,
        unit: "",
      },
      {
        id: "i7",
        name: "מלח",
        amount: 2,
        unit: "כפיות",
      },
      {
        id: "i8",
        name: "מים",
        amount: 6,
        unit: "כוסות",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מחממים בסיר גדול על להבה בינונית את השמן ומטגנים את הבצל, תוך ערבוב מדי פעם, עד שהוא מזהיב. מוסיפים את השום ומטגנים כדקה תוך ערבוב. מוסיפים את תערובת הירקות הכתומים, התבלינים והמים (אם צריך מוסיפים מים עד כיסוי הירקות) ומביאים לרתיחה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מכסים את הסיר ומבשלים על להבה בינונית-נמוכה 30-40 דקות עד שהירקות רכים (בודקים בעזרת מזלג).",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מסירים את הסיר מהכיריים ומעבדים בבלנדר או מעבד מזון למרק חלק ואחיד. מחזירים את המרק לסיר ומבשלים 5 דקות נוספות לפני ההגשה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "להגשה, יוצקים את המרק לקעריות וניתן להוסיף פנימה מעט חלב קוקוס לטעם עשיר יותר.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1wMcj3aRrKVKDBlkxetqylR9V6Uw3NyoO",
    title: "עוגיות חמאה של סבתא ניצה",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "חמאה קרה",
        amount: 200,
        unit: "גרם",
      },
      {
        id: "i1",
        name: "סוכר חום",
        amount: 1,
        unit: "כוס",
      },
      {
        id: "i2",
        name: "ביצים",
        amount: 2,
        unit: "",
      },
      {
        id: "i3",
        name: "קמח",
        amount: 3.5,
        unit: "כוסות",
      },
      {
        id: "i4",
        name: "אבקת אפיה",
        amount: 2.5,
        unit: "כפיות",
      },
      {
        id: "i5",
        name: "חצי כפית תמצית וניל",
        amount: 1,
        unit: "",
      },
      {
        id: "i6",
        name: "קוניאק",
        amount: 1,
        unit: "כף",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מערבבים את החמאה והסוכר, מוסיפים את הביצים והוניל והקוניאק ואז מוסיפים את הקמח.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "לאחר קבלת תערובת אחידה, מחלקים לכ 5 גושים ומקררים כחצי שעה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מרדדים כל פעם גוש אחד על משטח מקומח ויוצרים צורות בעזרת קורצני עוגיות. כשכמעט נגמר גוש אחד מוציאים אחר מהמקרר ולשים אותם יחד (להיזהר לא לעבד יותר מידי את הבצק)",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "אופים בתנור בחום 170 כ 10 דקות עד שהעוגיות משחימות.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1Qh3kjzDxdhuzgz7meyrHakqomzVVokYb",
    title: "עוגת בננות - ג׳ייק",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "חמאה",
        amount: 113,
        unit: "גרם",
      },
      {
        id: "i1",
        name: "סוכר חום",
        amount: 1,
        unit: "כוס",
      },
      {
        id: "i2",
        name: "בננות בשלות",
        amount: 4,
        unit: "",
      },
      {
        id: "i3",
        name: "½ כוס שמן קנולה",
        amount: 1,
        unit: "",
      },
      {
        id: "i4",
        name: "תמצית וניל",
        amount: 1,
        unit: "כפית",
      },
      {
        id: "i5",
        name: "ביצים",
        amount: 2,
        unit: "",
      },
      {
        id: "i6",
        name: "קמח רגיל",
        amount: 2,
        unit: "כוסות",
      },
      {
        id: "i7",
        name: "½ כפית אבקת אפייה",
        amount: 1,
        unit: "",
      },
      {
        id: "i8",
        name: "½ כפית סודה לשתיה",
        amount: 1,
        unit: "",
      },
      {
        id: "i9",
        name: "½ כפית מלח",
        amount: 1,
        unit: "",
      },
      {
        id: "i10",
        name: "קינמון",
        amount: 1,
        unit: "כפית",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מחממים תנור ל160 מעלות, מרפדים תבנית אפייה מרובעת כ20 ס״מ.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מכינים את הקראמבל: מערבבים את כל המרכיבים בקערה בינונית, משתמשים באצבעות בתנועות צביטה ומעבדים את החמאה עד שכל המרכיבים מעורבבים ונוצר קראמבל.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מכינים את העוגה: משחימים את החמאה במחבת על חום בינוני, ממשיכים לערבב לכ5 דקות, עד השחמה וריח אגוזי.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "מערבבים את החמאה המושחמת עם הסוכר והבננות, מועכים בעזרת מועך תפו״א לגושים.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s4-0",
            text: "מוסיפים את השמן, תמצית הוניל והביצים ומערבבים עד שהתערובת חלקה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s5-0",
            text: "מוסיפים את הקמח המלח מזרזי האפייה והקינמון ומערבבים לתערובת אחידה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s6-0",
            text: "מעבירים את הבלילה לתבנית המרופדת ומפוררים את הקראמבל, בצורה אחידה, מעל בלילת העוגה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s7-0",
            text: "אופים 40-45 דקות עד להשחמה.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1ETd-Lr4MHfuhrJS1-8PoW-ADqCrNP3t3",
    title: "עוגיות חמאה שורטברד",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "חמאה קרה",
        amount: 200,
        unit: "גרם",
      },
      {
        id: "i1",
        name: "אבקת סוכר",
        amount: 100,
        unit: "גרם",
      },
      {
        id: "i2",
        name: "קמח",
        amount: 2,
        unit: "כוסות",
      },
      {
        id: "i3",
        name: "תמצית וניל",
        amount: 1,
        unit: "כפית",
      },
      {
        id: "i4",
        name: "קורט מלח",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מערבבים את החמאה והסוכר רק עד שהתערובת מתאחדת, שלא יהיה אוויר מיותר.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מוסיפים את הקמח והוניל והמלח, מערבבים מעט, רק עד שמתקבל בצק אחיד. לא ללוש יותר מידי.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מועכים מעט את הבצק לצורת דיסקית שטוחה, עוטפים בנייר אפיה ומקררים כחצי שעה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "מרדדים חצי כמות, לעובי של כ1 ס״מ, על משטח מקומח ויוצרים צורות בעזרת חרצני עוגיות. כשכמעט נגמר גוש אחד מוציאים אחר מהמקרר ולשים אותם יחד (להיזהר לא לעבד יותר מידי את הבצק)",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s4-0",
            text: "אופים בתנור בחום 150 כ 12 דקות עד שהעוגיות משחימות.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1-2sBPpUrKBSQnVKYMh7ZCudSl9gKptcw",
    title: "עוגיות פקאן",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "חמאה קרה חתוכה לקוביות",
        amount: 100,
        unit: "גרם",
      },
      {
        id: "i1",
        name: "שני שליש כוס סוכר חום",
        amount: 1,
        unit: "",
      },
      {
        id: "i2",
        name: "ביצה",
        amount: 1,
        unit: "",
      },
      {
        id: "i3",
        name: "קמח",
        amount: 1.25,
        unit: "כוסות",
      },
      {
        id: "i4",
        name: "פקאנים חתוכים",
        amount: 70,
        unit: "גרם",
      },
      {
        id: "i5",
        name: "תמצית וניל",
        amount: 1,
        unit: "כפית",
      },
      {
        id: "i6",
        name: "קורט מלח",
        amount: 1,
        unit: "",
      },
      {
        id: "i7",
        name: "אבקת סוכר לקישוט",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: 'מערבבים את החמאה, הפקאנים והסוכר במיקסר עם וו "גיטרה", מוסיפים את תמצית הוניל והקמח עד לקבלת תערובת אחידה ואז מוסיפים את הביצה.',
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מכסים את הבצק ומקררים אותו כחצי שעה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מסדרים על תבנית עם נייר אפייה: מכדררים מהתערובת (כגודל כדור פינג פונג) ומועכים עם מזלג.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "אופים בתנור שחומם מראש בחום 170 כ 15 דקות.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s4-0",
            text: "מצננים לפני שמפזרים אבקת סוכר.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "16Fy1owX8R0d2jti56fNCTseinpWiGVlt",
    title: "כדורי חלבה",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "טחינה גולמית",
        amount: 1,
        unit: "כוס",
      },
      {
        id: "i1",
        name: "סילאן טבעי",
        amount: 1,
        unit: "כוס",
      },
      {
        id: "i2",
        name: "קוקוס טחון",
        amount: 1,
        unit: "כף",
      },
      {
        id: "i3",
        name: "שרוול פתי בר (250 גרם)",
        amount: 1,
        unit: "",
      },
      {
        id: "i4",
        name: "קורט מלח",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "טוחנים את הפתי בר (עדיף דק אבל שכן יישארו חתיכות).",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מוסיפים את שאר המרכיבים ומערבבים עד לתערובת יחסית אחידה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "לקרר לכחצי שעה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "להכין צלחת עם קוקוס.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s4-0",
            text: "להרטיב את הידיים ולקרוץ מהתערובת, לגלגל לכדור ולטבול בקוקוס.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s5-0",
            text: "לאחסן במקרר.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1xsal4sCfOPdOt-BKtUVOLgm8-zo76MD8",
    title: "כדורי תמרים",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "חמאה",
        amount: 100,
        unit: "גרם",
      },
      {
        id: "i1",
        name: "½ כוס מים",
        amount: 1,
        unit: "",
      },
      {
        id: "i2",
        name: "½ קילו תמרים בוואקום",
        amount: 1,
        unit: "",
      },
      {
        id: "i3",
        name: "סוכר (חצי כוס)",
        amount: 100,
        unit: "גרם",
      },
      {
        id: "i4",
        name: "כף מייפל",
        amount: 1,
        unit: "",
      },
      {
        id: "i5",
        name: "שרוול פתי בר מרוסק (250 גרם)",
        amount: 1,
        unit: "",
      },
      {
        id: "i6",
        name: "קורט מלח",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מבשלים את התמרים, חמאה, סוכר, מייפל ומים לתערובת אחידה ולצנן מעט.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "להוסיף את הפתי בר, ליצור כדורים ואפשר לצפות בקוקוס או סוכריות צבעוניות.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1BBpfoSvabhaHkD-FVzldekNrIW2IlWOj",
    title: "שבלולי קינמון",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "לבצק:",
        amount: 1,
        unit: "",
      },
      {
        id: "i1",
        name: "חמאה בטמפרטורת החדר",
        amount: 50,
        unit: "גרם",
      },
      {
        id: "i2",
        name: "ביצה",
        amount: 1,
        unit: "",
      },
      {
        id: "i3",
        name: "⅔ כוס חלב או מים חמימים",
        amount: 1,
        unit: "",
      },
      {
        id: "i4",
        name: "קמח",
        amount: 3,
        unit: "כוסות",
      },
      {
        id: "i5",
        name: "מלח",
        amount: 1,
        unit: "כפית",
      },
      {
        id: "i6",
        name: "שמרים יבשים",
        amount: 1,
        unit: "כף",
      },
      {
        id: "i7",
        name: "למילוי:",
        amount: 1,
        unit: "",
      },
      {
        id: "i8",
        name: "חמאה בטמפרטורת החדר",
        amount: 25,
        unit: "גרם",
      },
      {
        id: "i9",
        name: "⅓ כוס סוכר לבן",
        amount: 1,
        unit: "",
      },
      {
        id: "i10",
        name: "⅔ כוס סוכר חום בהיר",
        amount: 1,
        unit: "",
      },
      {
        id: "i11",
        name: "קינמון",
        amount: 1.5,
        unit: "כפות",
      },
      {
        id: "i12",
        name: "לציפוי:",
        amount: 1,
        unit: "",
      },
      {
        id: "i13",
        name: "ביצה טרופה (למרוח לפני ההכנסה לתנור)",
        amount: 1,
        unit: "",
      },
      {
        id: "i14",
        name: "תמצית וניל",
        amount: 1,
        unit: "כפית",
      },
      {
        id: "i15",
        name: "אבקת אפיה",
        amount: 1,
        unit: "כוס",
      },
      {
        id: "i16",
        name: "חלב",
        amount: 2,
        unit: "כפות",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: 'מערבבים את החומרים של הבצק עם וו "גיטרה" ולשים כ5-7 דקות עד לקבלת בצק חלק וגמיש.',
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מכסים את הבצק במגבת ומניחים לתפוח עד שהוא מכפיל את נפחו (כשעה וחצי עד שעתיים).",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מרדדים את הבצק למלבן בעובי של כחצי סנטימטר, מורחים את החמאה של המילוי בשכבה אחידה על כל הבצק.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "מערבבים את כל שאר החומרים למילוי בקערה ומפזרים על הבצק המרוח עד שלא רואים יותר את הבצק.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s4-0",
            text: "מרססים בתרסיס עדין מעט מים כדי שהסוכר לא יפול בזמן הגלגול.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s5-0",
            text: "מגלגלים את הבצק לאורכו, מהדקים תוך כדי הגלגול, וסוגרים את קצוות הגליל כדי שלא יפול סוכר.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s6-0",
            text: "חותכים את הגליל לפרוסות בעובי שרוצים (מומלץ כסנטימטר וחצי), מסדרים בצורה מרווחת בתבנית מרופדת בנייר אפיה ונותנים לתפוח עוד כ 10-15 דקות.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s7-0",
            text: "מורחים את השבלולים בביצה טרופה ואופים בתנור שחומם מראש בחום 180 כ 10-15 דקות עד שמשחימים.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s8-0",
            text: "מערבבים את כל שאר החומרים של הציפוי ומורחים על השבלולים בעודם חמים לקבלת ציפוי מבריק.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1FBWqnqNPmaBcnSkPJ4CHc29ObfWbl9cl",
    title: "פנקייקים בננות",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "ביצים",
        amount: 2,
        unit: "",
      },
      {
        id: "i1",
        name: "מיכל חלב קוקוס",
        amount: 1,
        unit: "",
      },
      {
        id: "i2",
        name: "חמאה מומסת",
        amount: 50,
        unit: "גרם",
      },
      {
        id: "i3",
        name: "½ כפית תמצית וניל",
        amount: 1,
        unit: "",
      },
      {
        id: "i4",
        name: "סוכר",
        amount: 2,
        unit: "כפות",
      },
      {
        id: "i5",
        name: "מייפל",
        amount: 2,
        unit: "כפות",
      },
      {
        id: "i6",
        name: "קמח",
        amount: 1,
        unit: "כוס",
      },
      {
        id: "i7",
        name: "אבקת אפיה",
        amount: 1,
        unit: "כפית",
      },
      {
        id: "i8",
        name: "שלושת רבעי כוס קוואקר",
        amount: 1,
        unit: "",
      },
      {
        id: "i9",
        name: "קורט מלח",
        amount: 1,
        unit: "",
      },
      {
        id: "i10",
        name: "בננות בשלות",
        amount: 2,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מערבבים את המרכיבים הרטובים לחוד והיבשים לחוד.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מערבבים את התערובות לתערובת אחת אחידה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מחממים מחבת, משמנים עם מעט שמן (או חמאה ושמן יחד), יוצקים כמות של בערך כף מהבלילה, יוצרים עיגולים על כל שטח המחבת ומכסים את המחבת.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "כשמתחילים להיווצר חורים על צידם העליון של כל הפנקייקים - הופכים ונותנים להתבשל גם מצידם השני.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1Bo2XdyZMQ8hhfkmY3dYGPG4aoAAPxiQr",
    title: "עוגיות שיבולת שועל רכות - איתי",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "חמאה",
        amount: 200,
        unit: "גרם",
      },
      {
        id: "i1",
        name: "סוכר לבן",
        amount: 1,
        unit: "כוס",
      },
      {
        id: "i2",
        name: "סוכר חום דחוס",
        amount: 1,
        unit: "כוס",
      },
      {
        id: "i3",
        name: "ביצים",
        amount: 2,
        unit: "",
      },
      {
        id: "i4",
        name: "תמצית וניל",
        amount: 1,
        unit: "כפית",
      },
      {
        id: "i5",
        name: "קמח",
        amount: 2,
        unit: "כוסות",
      },
      {
        id: "i6",
        name: "סודה לשתיה",
        amount: 1,
        unit: "כפית",
      },
      {
        id: "i7",
        name: "מלח",
        amount: 0.5,
        unit: "כפית",
      },
      {
        id: "i8",
        name: "קינמון",
        amount: 1.5,
        unit: "כפיות",
      },
      {
        id: "i9",
        name: "קוואקר להכנה מהירה",
        amount: 3,
        unit: "כוסות",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: 'מערבבים את החמאה והסוכר במיקסר עם וו "גיטרה", מוסיפים את הביצים ואז מוסיפים את תמצית הוניל.',
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מערבבים את כל המרכיבים היבשים בקערה נפרדת.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מערבבים את המרכיבים היבשים עם התערובת הרטובה, לאחר קבלת תערובת אחידה, מוסיפים את שיבולת השועל.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "מכסים את הבצק ומקררים אותו כשעה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s4-0",
            text: "מסדרים על תבנית עם נייר אפייה: מכדררים מהתערובת (כגודל כדור פינג פונג) ומועכים מעט.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s5-0",
            text: "אופים בתנור שחומם מראש בחום 190 10 דקות ולאחר מכן נותנים לעוגיות להתקרר על התבנית כ 5 דקות לפני שמעבירים אותן לכלי אחר.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1ZmcWksep6c0eHbAVs2P5U7QCvYxPdBNZ",
    title: "עוגיות טחינה עם שבבי קפה",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "חמאה",
        amount: 200,
        unit: "גרם",
      },
      {
        id: "i1",
        name: "טחינה גולמית",
        amount: 1,
        unit: "כוס",
      },
      {
        id: "i2",
        name: "סוכר חום",
        amount: 1,
        unit: "כוס",
      },
      {
        id: "i3",
        name: "קמח",
        amount: 2.5,
        unit: "כוסות",
      },
      {
        id: "i4",
        name: "פולי קפה טחונים גס",
        amount: 3,
        unit: "כפות",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מערבבים את החמאה והסוכר, מוסיפים את הטחינה ואז מוסיפים את הקמח.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "לאחר קבלת תערובת אחידה, מוסיפים את הקפה ובמקרה הצורך ניתן להוסיף מעט מים קרים כדי שהתערובת לא תהיה יבשה מידי.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מסדרים על תבנית עם נייר אפייה: מכדררים מהתערובת (כגודל כדור פינג פונג) ומועכים מעט.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "אופים בתנור בחום 180 כ 10 דקות עד שהעוגיות משחימות.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1EZcdHGL0AntdhrYjjvfBEnwjAXkPa4OU",
    title: "מלבי - טבעוני",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "ליטר תחליף חלב (חלב קוקוס או שקדים-קוקוס)",
        amount: 1,
        unit: "",
      },
      {
        id: "i1",
        name: "סוכר",
        amount: 100,
        unit: "גרם",
      },
      {
        id: "i2",
        name: "½ כפית תמצית וניל",
        amount: 1,
        unit: "",
      },
      {
        id: "i3",
        name: "תמצית מי ורדים / 2 כפות מי ורדים (אפשר פחות, לטעם פחות דומיננטי)",
        amount: 1,
        unit: "כפית",
      },
      {
        id: "i4",
        name: "קורנפלור",
        amount: 70,
        unit: "גרם",
      },
      {
        id: "i5",
        name: "לקישוט:",
        amount: 1,
        unit: "",
      },
      {
        id: "i6",
        name: "קוקוס טחון",
        amount: 1,
        unit: "",
      },
      {
        id: "i7",
        name: "אגוזי לוז/ בוטנים מסוכרים קצוצים",
        amount: 1,
        unit: "",
      },
      {
        id: "i8",
        name: "רוטב למלבי",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מערבבים טוב טוב מעט מהחלב עם הקורנפלור, כדי שלא יהיו גושים.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מרתיחים את שאר החלב עם הסוכר, תמצית הוניל והורדים.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "כשהחלב רותח, מערבבים את הקורנפלור שעורבב עם החלב, טורפים טריפה מתמדת כדקה וחצי, עד שמסמיך.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "מורידים מהאש, מוזגים לכלים ומכסים, נותנים להתקרר עד לטמפרטורת החדר ואז מכניסים למקרר לפחות ל 4 שעות. חשוב לכסות כדי שלא יווצר קרום.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "116VRA_58syV42-PWgrglujggnX-yLdXo",
    title: "פנקייקים",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "ביצים",
        amount: 2,
        unit: "",
      },
      {
        id: "i1",
        name: "כוס חלב קוקוס",
        amount: 1,
        unit: "",
      },
      {
        id: "i2",
        name: "½ כוס חלב סויה",
        amount: 1,
        unit: "",
      },
      {
        id: "i3",
        name: "חמאה / ½ כוס שמן",
        amount: 50,
        unit: "גרם",
      },
      {
        id: "i4",
        name: "½ כפית תמצית וניל",
        amount: 1,
        unit: "",
      },
      {
        id: "i5",
        name: "¼ כוס סוכר לבן",
        amount: 1,
        unit: "",
      },
      {
        id: "i6",
        name: "½1 כוסות קמח",
        amount: 1,
        unit: "",
      },
      {
        id: "i7",
        name: "אפיה",
        amount: 1,
        unit: "כף",
      },
      {
        id: "i8",
        name: "קורט מלח",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "מערבבים את המרכיבים הרטובים לחוד והיבשים לחוד.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מערבבים את התערובות לתערובת אחת אחידה. אם התערובת סמיכה מידי - להוסיף עוד חלב סויה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מחממים מחבת, משמנים עם מעט שמן (או חמאה ושמן יחד), יוצקים כמות של בערך כף מהבלילה, יוצרים עיגולים על כל שטח המחבת ומכסים את המחבת.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "כשמתחילים להיווצר חורים על צידם העליון של כל הפנקייקים - הופכים ונותנים להתבשל גם מצידם השני.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
  {
    id: "1Yih9HxTw943InSWwxqq5S__9nZi3QYYW",
    title: "מאפינס בננות",
    category: "כללי",
    tags: [],
    emoji: "📄",
    cookTime: "—",
    servings: 1,
    ingredients: [
      {
        id: "i0",
        name: "חמאה",
        amount: 100,
        unit: "גרם",
      },
      {
        id: "i1",
        name: "½1 כוסות סוכר חום",
        amount: 1,
        unit: "",
      },
      {
        id: "i2",
        name: "ביצים",
        amount: 2,
        unit: "",
      },
      {
        id: "i3",
        name: "קמח תופח/ קמח רגיל + 2 כפיות אבקת אפיה",
        amount: 2,
        unit: "כוסות",
      },
      {
        id: "i4",
        name: "¼ כוס חלב סויה",
        amount: 1,
        unit: "",
      },
      {
        id: "i5",
        name: "½ כוס קרם קוקוס",
        amount: 1,
        unit: "",
      },
      {
        id: "i6",
        name: "בננות בשלות",
        amount: 3,
        unit: "",
      },
      {
        id: "i7",
        name: "קורט מלח",
        amount: 1,
        unit: "",
      },
    ],
    sections: [
      {
        title: "",
        steps: [
          {
            id: "s0-0",
            text: "ממיסים את החמאה, מערבבים אותה עם הסוכר והביצים.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s1-0",
            text: "מוסיפים לאט את הקמח המלח והחלב ומערבבים לתערובת אחידה.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s2-0",
            text: "מועכים את הבננות במזלג ומוסיפים לתערובת.",
            timer: null,
            warning: null,
          },
        ],
      },
      {
        title: "",
        steps: [
          {
            id: "s3-0",
            text: "אופים בתנור בחום 180 עד שקיסם יוצא נקי.",
            timer: null,
            warning: null,
          },
        ],
      },
    ],
  },
];

export const DEFAULT_TAG_EMOJI = {
  צהריים: "🕛",
  מתוקים: "🍰",
  צמחוני: "🥦",
  אירוח: "🥂",
};
