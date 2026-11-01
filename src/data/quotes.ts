export interface QuoteLine {
  text: string;
  isAccent?: boolean;
}

export interface HeroQuote {
  id: number;
  lines: QuoteLine[][]; // Multi-line layout
}

export const heroQuotes: HeroQuote[] = [
  // 1. I don't chase success. I make it inevitable.
  {
    id: 1,
    lines: [
      [{ text: "I don't chase success." }],
      [{ text: "I make it " }, { text: "inevitable", isAccent: true }, { text: "." }],
    ],
  },
  // 2. I wasn't built to be average.
  {
    id: 2,
    lines: [
      [{ text: "I wasn't built to be " }, { text: "average", isAccent: true }, { text: "." }],
    ],
  },
  // 3. There is always another level.
  {
    id: 3,
    lines: [
      [{ text: "There is always " }, { text: "another level", isAccent: true }, { text: "." }],
    ],
  },
  // 4. Success doesn't need an invitation.
  {
    id: 4,
    lines: [
      [{ text: "Success doesn't need an " }, { text: "invitation", isAccent: true }, { text: "." }],
    ],
  },
  // 5. I don't need permission to become exceptional.
  {
    id: 5,
    lines: [
      [{ text: "I don't need permission to become " }, { text: "exceptional", isAccent: true }, { text: "." }],
    ],
  },
  // 6. I don't ask whether it's possible. I ask what it will take.
  {
    id: 6,
    lines: [
      [{ text: "I don't ask whether it's possible." }],
      [{ text: "I ask what it will " }, { text: "take", isAccent: true }, { text: "." }],
    ],
  },
  // 7. The goal isn't to be better than everyone. It's to be impossible to ignore.
  {
    id: 7,
    lines: [
      [{ text: "The goal isn't to be better than everyone." }],
      [{ text: "It's to be " }, { text: "impossible to ignore", isAccent: true }, { text: "." }],
    ],
  },
  // 8. I don't wait for opportunities. I create leverage.
  {
    id: 8,
    lines: [
      [{ text: "I don't wait for opportunities." }],
      [{ text: "I create " }, { text: "leverage", isAccent: true }, { text: "." }],
    ],
  },
  // 9. Good enough was never the objective.
  {
    id: 9,
    lines: [
      [{ text: "Good enough was " }, { text: "never", isAccent: true }],
      [{ text: "the objective." }],
    ],
  },
  // 10. I don't wait for the future. I engineer it.
  {
    id: 10,
    lines: [
      [{ text: "I don't wait for the future." }],
      [{ text: "I " }, { text: "engineer", isAccent: true }, { text: " it." }],
    ],
  },
];
