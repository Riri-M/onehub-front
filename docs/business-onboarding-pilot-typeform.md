## Business onboarding pilot (Typeform + Google Sheets)

### Context
Today, the site’s businesses are seeded/in-memory (`lib/data/businesses.ts`). For a pilot, we want a faster intake path than building and maintaining custom onboarding UX + backend.

### Purpose
Collect onboarding info with good UX at **$0 (or close)**, and manually publish quality listings while we learn.

### Approach
- Use **Typeform** for intake (embed it on `/add`).
- Send submissions to a **Google Sheet** (inbox).
- Review rows and set `publish=TRUE` (optional: `featured=TRUE`).
- Publish approved listings by copying rows into `lib/data/businesses.ts` (until we automate).

Recommended Typeform fields: `name`, `description`, `category`, `address`, `phone`, `email`, `website`  
Recommended Sheet columns: those fields + `publish`, `featured`, `notes`
