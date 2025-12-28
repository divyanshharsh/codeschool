# Quick Start Guide

## 🚀 First Time Setup

1. **Install Dependencies:**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

2. **Start Development Servers:**
   
   From the root directory:
   ```bash
   npm run dev
   ```
   
   This will start:
   - Frontend on http://localhost:3000
   - Backend on http://localhost:5000

## 📱 Available Pages

Once the servers are running, you can access:

- **Landing Page:** http://localhost:3000/
- **About Page:** http://localhost:3000/about
- **Courses Catalog:** http://localhost:3000/courses
- **Login:** http://localhost:3000/login
- **Register:** http://localhost:3000/register

## 🎨 Features Implemented

### Landing Page
- Hero section with call-to-action
- Features showcase
- Pricing plans (3 tiers)
- Testimonials section
- Final CTA section

### About Page
- Mission statement
- Company values
- Our story
- Team section
- CTA section

### Courses Catalog
- Search functionality
- Grade level filter
- Difficulty filter
- Category filter
- Course cards with details
- Responsive grid layout

### Login Page
- Email/password authentication
- Remember me option
- Forgot password link
- Social login buttons (UI only)
- Link to registration

### Register Page
- Role selection (Student/Parent/Teacher)
- Form validation
- Grade level selection (for students)
- Password confirmation
- Terms acceptance
- Social sign-up options (UI only)

## 🛠️ Next Steps

1. **Backend API Integration:**
   - Set up authentication endpoints
   - Create course API endpoints
   - Implement user registration/login

2. **Database Setup:**
   - Configure PostgreSQL
   - Run migrations
   - Seed initial data

3. **Protected Routes:**
   - Student dashboard
   - Teacher dashboard
   - Parent dashboard

4. **Additional Features:**
   - Coding playground
   - Course enrollment
   - Progress tracking

## 💡 Tips

- The frontend uses Tailwind CSS for styling
- All components are responsive and mobile-friendly
- The backend is set up with Express and TypeScript
- API routes are prefixed with `/api`

## 🐛 Troubleshooting

**Port already in use?**
- Change the port in `frontend/vite.config.ts` (frontend)
- Change the PORT in `backend/.env` (backend)

**Dependencies not installing?**
- Make sure you have Node.js v18+ installed
- Try deleting `node_modules` and `package-lock.json` and reinstalling

