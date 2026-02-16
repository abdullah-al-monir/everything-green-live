# Everything Green (https://everything-green-live.vercel.app)
A modern, eco-friendly web application built with Next.js 16, React 19, and TypeScript. This frontend provides a beautiful user interface for tracking and managing sustainable web practices with real-time keyword attribution metrics.

## 🚀 Features

* Modern Stack: Built with Next.js 16 (App Router) and React 19
* Type-Safe: Full TypeScript support for better developer experience
* Responsive Design: Mobile-first design with Tailwind CSS 4
* Smooth Animations: Framer Motion for delightful user interactions
* State Management: Zustand for lightweight and efficient state management
* Authentication: Secure JWT-based authentication with HTTP-only cookies
* Profile Management: Complete user profile system with avatar support
* SEO Optimized: Built-in Next.js SEO features

## 📋 Prerequisites
Before you begin, ensure you have the following installed:

* Node.js (v18 or higher)
* npm or yarn or pnpm
* Everything Green Backend (running on http://localhost:5000 or deployed)

## 🛠️ Installation
1. Clone the repository
bashgit clone <repository-url>
cd everything-green
2. Install dependencies
```bash 
npm install
# or
yarn install
# or
pnpm install
```
3. Set up environment variables
* Create a .env.local file in the root directory:
```bash 
touch .env.local
```
* Add the following environment variables:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🏃 Running the Application
Development Mode
* Start the development server with hot-reload:
```bash
npm run dev
```
The application will be available at http://localhost:3000

## 📁 Project Structure
```
everything-green/
├── app/                      # Next.js App Router
│   ├── (profile)/           # Profile route group
│   │   └── profile/
│   │       ├── page.tsx     # Profile page
│   │       └── layout.tsx   # Profile layout
│   ├── about/               # About page
│   │   └── page.tsx
│   ├── blog/                # Blog page
│   │   └── page.tsx
│   ├── contact/             # Contact page
│   │   └── page.tsx
│   ├── login/               # Login page
│   │   └── page.tsx
│   ├── register/            # Register page
│   │   └── page.tsx
│   ├── favicon.ico          # App favicon
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # Reusable components
│   ├── AttributionMatch.tsx # Keyword attribution widget
│   ├── DeleteModal.tsx      # Delete confirmation modal
│   ├── Footer.tsx           # Footer component
│   ├── Header.tsx           # Header/Navigation
│   └── MeterGauge.tsx       # Animated gauge component
├── lib/                     # Utility libraries
│   └── api.ts               # API client (Axios)
├── store/                   # State management
│   └── auth.ts              # Zustand auth Store
├── types/                   # TypeScript type definitions
│   └── index.ts             # Global types
├── public/                  # Static assets
│   ├── auth-bg.png          # Authentication background
│   └── auth-banner.png      # Authentication banner
├── .env.local               # Environment variables (create this)
├── .env.example             # Environment variables template
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```
## 🎨 Key Pages & Features
### Authentication

* Login (/login) - User login with email/password or Google sign-in
* Register (/register) - New user registration

* User Profile

* Profile (/profile) - View and edit user profile

* Update username, full name, bio
* Upload avatar via URL
* Delete account functionality



### Public Pages

* Home (/) - Landing page with hero section
* About (/about) - About the project
* Blog (/blog) - Blog posts (coming soon)
* Contact (/contact) - Contact form

## 🔌 Test Credentials
* email: test@gmail.com
* password: Test1234