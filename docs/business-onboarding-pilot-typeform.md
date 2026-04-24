## Business onboarding pilot (Typeform + Google Sheets)

### Background (plain English)
Right now, adding a business on the site uses an in-app form (`/add`) and stores data in memory (`lib/data/businesses.ts`). That’s fine for a demo, but it’s not a great pilot workflow because:
- It’s extra engineering to maintain
- It doesn’t give us a clean review process
- We want to validate demand first with minimal build

### Goal
Collect business onboarding info with a great UX, keep cost as low as possible (preferably $0), and manually publish good listings on the site while we learn.

### Proposed pilot approach
We will use:
- **Typeform** for the onboarding form (embedded on `/add`)
- **Google Sheets** as the submissions inbox
- **Manual publish**: a team member reviews the sheet and publishes approved listings

Flow:
1) Business owner fills Typeform (on `/add`)
2) Submission automatically lands in Google Sheets (new row)
3) Ria (PO) reviews and sets `publish=TRUE` (and optionally `featured=TRUE`)
4) Ife publishes approved rows to the site (initially by copying into `lib/data/businesses.ts`)

### Why this is ideal for a pilot
- Fast to launch (hours, not weeks)
- Easy to iterate on questions without redeploys
- Adds a review gate to prevent spam/low-quality listings
- Works at low volume without building admin tooling

### What we need
Accounts:
- A Typeform account
- A Google account + one shared Sheet

Typeform questions (map to current CreateBusiness fields):
- name
- description
- category
- address
- phone
- email
- website

Google Sheet columns (recommended):
- name, description, category, address, phone, email, website
- publish (boolean, default FALSE)
- featured (boolean, default FALSE)
- notes (text)

### Team roles
- **Ria (Product Owner)**: owns the questions, what “publishable” means, and early submission QA.
- **Ife (Engineer, solo owner)**: embeds Typeform on `/add`, updates copy, owns publishing steps (manual now, automate later if needed).
- **Ini (assistive only if delegated by Ife)**: small scoped tasks only.

### Success criteria (pilot)
- We can collect submissions reliably
- We can publish listings without building a full admin app
- We learn what info we’re missing after the first ~10 submissions

### Later (not required for pilot)
If volume grows or manual publishing becomes painful:
- Add a simple sync step (Sheet → DB/JSON)
- Move to durable DB storage for listings
- Add spam controls / “hidden” status switch inside the app
