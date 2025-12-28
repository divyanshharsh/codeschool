# CodeSchool - K-12 Coding & Computer Science EdTech Platform

A comprehensive full-stack web platform designed to teach coding and computer science to K-12 students.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL (for backend, optional for now)

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

   Or install separately:
   ```bash
   # Root dependencies
   npm install
   
   # Frontend dependencies
   cd frontend
   npm install
   
   # Backend dependencies
   cd ../backend
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Development

**Run both frontend and backend:**
```bash
npm run dev
```

**Or run separately:**

Frontend (port 3000):
```bash
npm run dev:frontend
# or
cd frontend && npm run dev
```

Backend (port 5000):
```bash
npm run dev:backend
# or
cd backend && npm run dev
```

### Build

```bash
npm run build
```

## 📁 Project Structure

```
edtech-platform/
├── frontend/          # React + TypeScript frontend
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/     # Page components
│   │   └── ...
│   └── ...
├── backend/           # Express + TypeScript backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── ...
│   └── ...
└── ...
```

## 🎨 Features

### Public Pages (Current)
- ✅ Landing Page with hero, features, pricing, testimonials
- ✅ About Us page
- ✅ Courses Catalog with filtering
- ✅ Login page
- ✅ Register page (Student/Parent/Teacher)

### Coming Soon
- Student Dashboard
- Teacher Dashboard
- Parent Dashboard
- Coding Playground
- Course Management
- And more...

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, React Router
- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL (to be configured)

## 📝 License

This project is private and proprietary.

