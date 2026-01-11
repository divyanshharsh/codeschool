import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import ElementaryCoursesPage from './pages/ElementaryCoursesPage'
import MiddleSchoolCoursesPage from './pages/MiddleSchoolCoursesPage'
import HighSchoolCoursesPage from './pages/HighSchoolCoursesPage'
import CourseDetailPage from './pages/CourseDetailPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import SchoolsPage from './pages/SchoolsPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/elementary" element={<ElementaryCoursesPage />} />
          <Route path="/courses/middle-school" element={<MiddleSchoolCoursesPage />} />
          <Route path="/courses/high-school" element={<HighSchoolCoursesPage />} />
          <Route path="/courses/:segment/:courseId" element={<CourseDetailPage />} />
          <Route path="/schools" element={<SchoolsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

