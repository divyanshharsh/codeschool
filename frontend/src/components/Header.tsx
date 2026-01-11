import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Code2, ChevronDown, Sparkles, Rocket, Brain, Users } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [coursesMenuOpen, setCoursesMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const courseSegments = [
    {
      title: 'By Grade Level',
      items: [
        { path: '/courses/elementary', label: 'Elementary (K-5)', icon: <Sparkles className="h-4 w-4" /> },
        { path: '/courses/middle-school', label: 'Middle School (6-8)', icon: <Rocket className="h-4 w-4" /> },
        { path: '/courses/high-school', label: 'High School (9-12)', icon: <Brain className="h-4 w-4" /> },
      ],
    },
    {
      title: 'By Category',
      items: [
        { path: '/courses?category=web', label: 'Web Development', icon: <Code2 className="h-4 w-4" /> },
        { path: '/courses?category=python', label: 'Python Programming', icon: <Code2 className="h-4 w-4" /> },
        { path: '/courses?category=game', label: 'Game Development', icon: <Code2 className="h-4 w-4" /> },
        { path: '/courses?category=data', label: 'Data Science', icon: <Code2 className="h-4 w-4" /> },
        { path: '/courses?category=mobile', label: 'Mobile Apps', icon: <Code2 className="h-4 w-4" /> },
        { path: '/courses?category=ai', label: 'AI & Machine Learning', icon: <Code2 className="h-4 w-4" /> },
      ],
    },
  ]

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/schools', label: 'For Schools' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-primary-600" />
            <span className="text-2xl font-bold text-gray-900">CodeSchool</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCoursesMenuOpen(true)}
              onMouseLeave={() => setCoursesMenuOpen(false)}
            >
              <Link
                to="/courses"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive('/courses')
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Courses
                <ChevronDown className={`h-4 w-4 transition-transform ${coursesMenuOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Dropdown Menu */}
              {coursesMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50">
                  <div className="grid grid-cols-2 gap-6">
                    {courseSegments.map((segment, idx) => (
                      <div key={idx}>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          {segment.title}
                        </h3>
                        <ul className="space-y-2">
                          {segment.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.path}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors group"
                                onClick={() => setCoursesMenuOpen(false)}
                              >
                                <span className="text-primary-600 group-hover:scale-110 transition-transform">
                                  {item.icon}
                                </span>
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      to="/courses"
                      className="block text-center px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors"
                      onClick={() => setCoursesMenuOpen(false)}
                    >
                      View All Courses
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-primary-600 font-medium px-4 py-2"
            >
              Log In
            </Link>
            <Link to="/register" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/courses')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Courses
            </Link>
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              >
                Log In
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white text-center hover:bg-primary-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

