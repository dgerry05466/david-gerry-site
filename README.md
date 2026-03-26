# David Gerry Admissions Site

This is a simple Next.js site ready for deployment on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy on Vercel

1. Create a GitHub repository and upload these files.
2. Go to Vercel and import the GitHub repo.
3. Click Deploy.
4. Vercel will detect Next.js automatically.

## Update the headshot

Replace:

```bash
public/headshot.jpg
```

with any new image using the same file name.

## Update the consultation link

Edit this line in `app/page.tsx`:

```tsx
href="https://calendly.com/ivyathome/new-meeting"
```
