# Bolt's Journal

## 2025-02-23 - Critical LCP Optimization
**Learning:** The Hero section image was lazily loaded by default, negatively impacting LCP (Largest Contentful Paint).
**Action:** Added `priority` prop to `SectionBackground` component and enabled it for the Hero section to ensure eager loading.
