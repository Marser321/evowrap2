## 2024-05-22 - Context-Aware Accessible Labels
**Learning:** Floating action buttons that change context based on scroll position need dynamic aria-labels to communicate that context to screen reader users, otherwise they just hear 'Contact'.
**Action:** Always bind aria-label to the same state variable that drives the visual context/tooltip.
