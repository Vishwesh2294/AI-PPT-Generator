# PPT-AI : AI PPT GENERATOR 🚀

An AI-powered presentation generator that creates professional PowerPoint presentations from a simple text prompt. Built with modern full-stack technologies including React, TanStack Start, Prisma, PostgreSQL, Better Auth, Inngest, Google Gemini AI, and PPTXGenJS.

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
* 🌙 Beautiful glassmorphism design

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

BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GOOGLE_GENERATIVE_AI_API_KEY=

IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
VITE_IMAGEKIT_BASE_URL=

INNGEST_DEV=1
```

Generate Prisma client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

Start development server:

```bash
npm run dev
```

Start Inngest Dev Server:

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
│   │   ├── route.tsx
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

### Architecture Overview

* **TanStack Start** → Full-stack React framework
* **TanStack Router** → File-based routing
* **TanStack Query** → Data fetching and caching
* **Prisma ORM** → Database access layer
* **PostgreSQL** → Primary database
* **Better Auth** → Authentication and session management
* **Google Gemini AI** → Slide content generation
* **Inngest** → Background job processing
* **ImageKit** → AI image storage and delivery
* **PPTXGenJS** → PowerPoint export generation
* **Tailwind CSS + Shadcn UI** → Modern UI system

```

---

## ⚙️ Workflow

1. User enters a presentation topic.
2. Gemini AI generates slide content.
3. Inngest processes background jobs.
4. Images are generated and uploaded.
5. Slides are saved to PostgreSQL.
6. User previews presentation.
7. User can launch slideshow mode.
8. User exports the presentation as a PowerPoint file.

---

## 🔐 Authentication

The application supports:

* Google Sign In
* GitHub Sign In

Powered by Better Auth.

---

## 📤 Export to PowerPoint

Presentations can be exported directly as `.pptx` files using PPTXGenJS while preserving:

* Slide titles
* Content
* Images
* Presentation structure

---

## 🎯 Future Improvements

* Custom presentation themes
* Drag-and-drop slide editing
* Real-time collaboration
* PDF export
* Speaker notes export
* Advanced slide templates
* Presentation analytics

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 👨‍💻 Author

**Vishwesh Upadhyay**

Built with ❤️ using React, TanStack Start, Prisma, Better Auth, Inngest, Gemini AI, and PPTXGenJS.
