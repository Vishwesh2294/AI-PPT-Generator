# PPT-AI : AI PPT GENERATOR🚀

### AI-Powered PowerPoint Presentation Generator

PPT-AI is a full-stack AI SaaS application that generates professional PowerPoint presentations from a simple text prompt. Using Google Gemini AI, the application automatically creates slide content, generates relevant images, stores presentations in PostgreSQL, and allows users to export complete presentations as PowerPoint (.pptx) files.

---

## ✨ Features

* 🤖 AI-powered presentation generation using Google Gemini
* 📝 Generate complete slide decks from a single prompt
* 🖼️ AI-generated images for slides
* 🎨 Multiple presentation styles and tones
* 📊 Dynamic slide generation
* 🎞️ Fullscreen slideshow mode
* 💾 Save and manage presentations
* 🔄 Regenerate presentations instantly
* 📤 Export presentations as PowerPoint (.pptx)
* 🔐 Secure authentication with Google and GitHub
* ⚡ Background job processing with Inngest
* 📱 Responsive and modern UI
* 🌙 Glassmorphism-inspired design system

---

## 🚀 Technical Highlights

* Full-stack application built with TanStack Start
* Server-side rendering and server functions
* OAuth authentication with Better Auth
* AI-powered content generation using Gemini
* Background workflow orchestration using Inngest
* PostgreSQL database with Prisma ORM
* Image storage and delivery through ImageKit
* PowerPoint export functionality using PPTXGenJS
* Responsive UI built with Tailwind CSS and Shadcn UI

---

## 🏗️ Tech Stack

### Frontend

* React 19
* TanStack Start
* TanStack Router
* TanStack Query
* TypeScript
* Tailwind CSS v4
* Shadcn UI
* Lucide React

### Backend

* TanStack Start Server Functions
* Prisma ORM
* PostgreSQL
* Better Auth

### AI & Automation

* Google Gemini AI
* Inngest
* ImageKit

### Presentation Generation

* PPTXGenJS

---

## 🚀 Getting Started

### Prerequisites

* Node.js 22+
* PostgreSQL Database
* Google Gemini API Key
* ImageKit Account
* GitHub OAuth App
* Google OAuth App

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/ppt-ai.git
cd ppt-ai
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL=

# Auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

# GitHub OAuth
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Gemini AI
GOOGLE_GENERATIVE_AI_API_KEY=

# ImageKit
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
VITE_IMAGEKIT_BASE_URL=

# Inngest
INNGEST_DEV=1
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

Start the Inngest development server:

```bash
npx inngest-cli@latest dev
```

Open:

```text
http://localhost:3000
```

---

## 📁 Project Structure

```text
AI-PPT-GENERATOR
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── auth/
│   │   ├── ui/
│   │   └── navbar.tsx
│   │
│   ├── features/
│   │   └── presentation/
│   │       ├── actions/
│   │       ├── components/
│   │       ├── constant/
│   │       ├── hooks/
│   │       ├── types/
│   │       └── utils/
│   │
│   ├── generated/
│   │   └── prisma/
│   │       ├── internal/
│   │       ├── models/
│   │       ├── browser.ts
│   │       ├── client.ts
│   │       ├── commonInputTypes.ts
│   │       ├── enums.ts
│   │       └── models.ts
│   │
│   ├── hooks/
│   │
│   ├── integrations/
│   │   ├── inngest/
│   │   │   ├── client.ts
│   │   │   └── function.ts
│   │   │
│   │   └── tanstack-query/
│   │
│   ├── lib/
│   │   ├── auth.ts
│   │   └── db.ts
│   │
│   ├── middleware/
│   │   └── auth.ts
│   │
│   ├── providers/
│   │
│   ├── routes/
│   │   ├── _auth/
│   │   │   └── login.tsx
│   │   │
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   └── inngest.ts
│   │   │
│   │   ├── __root.tsx
│   │   ├── about.tsx
│   │   ├── index.tsx
│   │   ├── presentations.$presentationId.tsx
│   │   ├── router.tsx
│   │   └── routeTree.gen.ts
│   │
│   └── styles.css
│
├── .env
├── components.json
├── package.json
├── prisma.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🏛️ Architecture Overview

* **TanStack Start** → Full-stack React framework
* **TanStack Router** → File-based routing
* **TanStack Query** → Data fetching and caching
* **Prisma ORM** → Database access layer
* **PostgreSQL** → Primary database
* **Better Auth** → Authentication and session management
* **Google Gemini AI** → Slide content generation
* **Inngest** → Background job processing
* **ImageKit** → Image storage and CDN delivery
* **PPTXGenJS** → PowerPoint export generation
* **Tailwind CSS + Shadcn UI** → Modern UI system

---

## ⚙️ Workflow

1. User enters a presentation topic.
2. Google Gemini generates slide content.
3. Inngest executes background workflows.
4. AI images are generated and uploaded.
5. Presentation data is stored in PostgreSQL.
6. User previews generated slides.
7. User launches slideshow mode.
8. User exports the presentation as a PowerPoint file.

---

## 🔐 Authentication

Supported authentication providers:

* Google OAuth
* GitHub OAuth

Authentication and session management are powered by Better Auth.

---

## 📤 Export to PowerPoint

Presentations can be exported directly as `.pptx` files using PPTXGenJS while preserving:

* Slide titles
* Slide content
* Images
* Presentation structure

---

## 🎯 Future Improvements

* Custom presentation themes
* Drag-and-drop slide editing
* Real-time collaboration
* PDF export support
* Speaker notes export
* Advanced slide templates
* Presentation analytics

---

## 👨‍💻 Author

**Vishwesh Upadhyay**

Built with React, TanStack Start, Prisma, PostgreSQL, Better Auth, Inngest, Google Gemini AI, ImageKit, and PPTXGenJS.
