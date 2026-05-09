# AI Etsy OS - Claude Project Instructions

## Project Goal
Build a clean MVP web app called AI Etsy OS.

The app helps users discover Etsy digital product ideas, analyze niches, generate SEO titles, descriptions, tags, TikTok hooks, and product strategy using AI.

## Tech Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- API routes inside `app/api`
- OpenRouter API for AI generation later

## Working Rules
1. Keep the project simple and working first.
2. Do not add complex features before the MVP works.
3. Always fix errors before adding new features.
4. Do not delete important files without explaining why.
5. Keep the UI clean, modern, black background, SaaS style.
6. Use reusable components when useful.
7. Prefer clear code over complex code.
8. Every change must keep `npm run dev` working.

## MVP Features
Build these features first:

### 1. Niche Analyzer
User enters a niche.
The app returns:
- trending digital product ideas
- target audience
- demand level
- competition level
- product angle

### 2. Etsy SEO Generator
Generate:
- Etsy product title
- product description
- 13 Etsy tags
- short benefits
- price suggestion

### 3. TikTok Hook Generator
Generate:
- viral TikTok hooks
- short video script
- CTA
- hashtags

## Folder Structure
Use this structure:

```txt
app/
  page.tsx
  api/
    analyze/
      route.ts

components/
  ProductCard.tsx
  SearchBox.tsx
  ResultSection.tsx

lib/
  openrouter.ts
  prompts.ts

types/
  index.
  :

First inspect the existing files.
Detect errors or missing files.
Explain shortly what you will change.
Apply the changes.
Test logically if the app should run.
Never overcomplicate the project.
API Rules

For now, mock data is allowed only for testing.
Later replace mock data with OpenRouter.

When OpenRouter is added:

use .env.local
never hardcode API keys
always return clean JSON
handle errors properly
Design Direction

The UI should look like a modern AI SaaS tool:

dark background
white text
rounded cards
clean input box
clear CTA buttons
mobile responsive
Do Not Do
Do not add authentication yet.
Do not add payments yet.
Do not add database yet.
Do not add n8n yet.
Do not add too many pages yet.
Do not use random packages unless needed.
Next Task

Make the homepage interactive:

input for niche
Analyze button
show product ideas
show SEO suggestions
show TikTok hooks