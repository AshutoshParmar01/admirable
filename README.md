# Admirable

Admirable is an AI-powered website builder inspired by modern prompt-driven development tools. Describe your application requirements in plain English, and Admirable generates a complete full-stack website structure (React frontend + Node.js backend) instantly.

## Features

- ⚡ **Prompt-to-Code Generation**: Describe what you need, and Admirable generates full-stack code and directory structures using Google Gemini.
- 🎨 **Modern Design System**: Built with React 18, TypeScript, Tailwind CSS, and Radix UI / shadcn/ui primitives.
- 🚀 **Fast Developer Experience**: Powered by Vite for near-instant hot module replacement and optimized production builds.
- 🔒 **Secure Environment Config**: API keys and endpoints are configured via environment variables and kept out of version control.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Lucide React, Radix UI
- **AI Integration**: Google Gemini API
- **Routing & State**: React Router DOM, TanStack React Query

## Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

### 2. Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/AshutoshParmar01/admirable.git
cd admirable
npm install
```

### 3. Environment Variables Configuration

Create a `.env` file in the root directory by copying `.env.example`:

```bash
cp .env.example .env
```

Open `.env` and configure your Google Gemini API key:

```env
# Gemini API Configuration
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
```

> **Note**: Never commit your `.env` file containing secret keys to version control. The `.env` file is included in `.gitignore`.

### 4. Running the Development Server

Start the local Vite dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:8080/` (or the port specified in terminal output).

### 5. Production Build

To create an optimized production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Starts the Vite development server
- `npm run build` - Builds the application for production
- `npm run preview` - Locally previews the production build
- `npm run lint` - Runs ESLint to identify code issues
