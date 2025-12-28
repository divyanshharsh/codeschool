import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  Clock, Users, Star, BookOpen, Check, ArrowLeft, 
  Play, Award, Code2, Globe, Gamepad2, Database, 
  Smartphone, Brain, Sparkles, Rocket, Award as AwardIcon,
  Calendar, Target, FileText, Video, Code, Zap
} from 'lucide-react'
import { allCourses } from '../data/courses'
import type { Course } from '../data/courses'

const categoryIcons: Record<string, JSX.Element> = {
  'Block Programming': <Code2 className="h-6 w-6" />,
  'Creative Coding': <Sparkles className="h-6 w-6" />,
  'Python': <Code2 className="h-6 w-6" />,
  'Web Development': <Globe className="h-6 w-6" />,
  'Game Development': <Gamepad2 className="h-6 w-6" />,
  'Data Science': <Database className="h-6 w-6" />,
  'Mobile Development': <Smartphone className="h-6 w-6" />,
  'AI & Machine Learning': <Brain className="h-6 w-6" />,
  'Cybersecurity': <AwardIcon className="h-6 w-6" />,
  'Robotics': <Rocket className="h-6 w-6" />,
}

const segmentColors: Record<string, { gradient: string; bg: string; border: string; button: string }> = {
  elementary: {
    gradient: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    button: 'bg-pink-600 hover:bg-pink-700',
  },
  middle: {
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    button: 'bg-blue-600 hover:bg-blue-700',
  },
  high: {
    gradient: 'from-purple-500 to-indigo-500',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    button: 'bg-purple-600 hover:bg-purple-700',
  },
}

export default function CourseDetailPage() {
  const { courseId, segment } = useParams<{ courseId: string; segment: string }>()
  const navigate = useNavigate()
  
  const course = allCourses.find(c => c.id === parseInt(courseId || '0'))
  
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Code2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Course Not Found</h1>
          <p className="text-gray-600 mb-4">The course you're looking for doesn't exist.</p>
          <Link to="/courses" className="btn-primary">
            Browse All Courses
          </Link>
        </div>
      </div>
    )
  }

  const segmentColor = segmentColors[course.segment]
  const relatedCourses = allCourses
    .filter(c => c.segment === course.segment && c.id !== course.id)
    .slice(0, 3)

  // Mock detailed course data
  const courseDetails = {
    whatYoullLearn: [
      'Master fundamental programming concepts',
      'Build real-world projects and applications',
      'Understand best practices and coding standards',
      'Develop problem-solving skills through coding challenges',
      'Create a portfolio of projects to showcase your skills',
      'Prepare for advanced programming courses',
    ],
    curriculum: [
      {
        week: 'Week 1-2',
        title: 'Introduction & Basics',
        topics: ['Course Overview', 'Setting Up Your Environment', 'Basic Concepts', 'First Program'],
        duration: '4 hours',
      },
      {
        week: 'Week 3-4',
        title: 'Core Concepts',
        topics: ['Variables & Data Types', 'Control Structures', 'Functions', 'Practice Exercises'],
        duration: '6 hours',
      },
      {
        week: 'Week 5-6',
        title: 'Intermediate Topics',
        topics: ['Advanced Concepts', 'Working with Data', 'Project Planning', 'Hands-on Projects'],
        duration: '8 hours',
      },
      {
        week: 'Week 7-8',
        title: 'Advanced & Projects',
        topics: ['Final Project Development', 'Code Review', 'Best Practices', 'Portfolio Building'],
        duration: '10 hours',
      },
    ],
    requirements: [
      'Basic computer skills',
      'Access to a computer with internet',
      'No prior programming experience required',
      'Dedication to complete assignments',
      'Curiosity and willingness to learn',
    ],
    instructor: {
      name: course.instructor,
      bio: 'Experienced educator with 10+ years of teaching programming to students. Passionate about making coding accessible and fun for all ages.',
      rating: 4.9,
      students: 5000,
      courses: 12,
    },
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'Advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${segmentColor.gradient} text-white py-16`}>
        <div className="section-container">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Courses</span>
          </button>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                {categoryIcons[course.category] || <Code2 className="h-6 w-6" />}
              </div>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
                {course.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(course.difficulty)}`}>
                {course.difficulty}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">{course.description}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-current" />
                <span>{course.rating} Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>{course.students.toLocaleString('en-IN')} Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                <span>{course.gradeLevel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <section className={`p-6 rounded-2xl border-2 ${segmentColor.border} ${segmentColor.bg}`}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className={`h-6 w-6 text-${course.segment === 'elementary' ? 'pink' : course.segment === 'middle' ? 'blue' : 'purple'}-600`} />
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {courseDetails.whatYoullLearn.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Curriculum */}
            <section className="bg-white p-6 rounded-2xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary-600" />
                Course Curriculum
              </h2>
              <div className="space-y-4">
                {courseDetails.curriculum.map((module, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4 py-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900">{module.week}: {module.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{module.duration}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-3">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center gap-2 text-gray-700">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary-500"></div>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section className="bg-white p-6 rounded-2xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary-600" />
                Requirements
              </h2>
              <ul className="space-y-3">
                {courseDetails.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Instructor */}
            <section className="bg-white p-6 rounded-2xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary-600" />
                About Your Instructor
              </h2>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl font-bold">
                  {courseDetails.instructor.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{courseDetails.instructor.name}</h3>
                  <div className="flex items-center gap-4 mb-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{courseDetails.instructor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{courseDetails.instructor.students.toLocaleString('en-IN')} Students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{courseDetails.instructor.courses} Courses</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{courseDetails.instructor.bio}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Enrollment Card */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    ₹{course.price.toLocaleString('en-IN')}
                  </div>
                  <p className="text-gray-600">One-time payment</p>
                </div>
                
                <button className={`w-full ${segmentColor.button} text-white py-4 rounded-xl font-bold text-lg mb-4 transition-all transform hover:scale-105`}>
                  Enroll Now
                </button>
                
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Access on mobile and desktop</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Includes {course.duration} of content
                  </p>
                </div>
              </div>

              {/* Course Stats */}
              <div className={`${segmentColor.bg} rounded-2xl border-2 ${segmentColor.border} p-6`}>
                <h3 className="font-bold text-gray-900 mb-4">Course Statistics</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Students Enrolled</span>
                    <span className="font-semibold text-gray-900">{course.students.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-semibold text-gray-900">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-900">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(course.difficulty)}`}>
                      {course.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Courses */}
        {relatedCourses.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCourses.map((relatedCourse) => {
                const segmentPath = relatedCourse.segment === 'elementary' ? 'elementary' : 
                                   relatedCourse.segment === 'middle' ? 'middle-school' : 'high-school'
                return (
                  <Link
                    key={relatedCourse.id}
                    to={`/courses/${segmentPath}/${relatedCourse.id}`}
                    className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all overflow-hidden group"
                  >
                  <div className={`h-32 bg-gradient-to-br ${segmentColor.gradient} flex items-center justify-center`}>
                    {categoryIcons[relatedCourse.category] || <Code2 className="h-12 w-12 text-white opacity-80" />}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {relatedCourse.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{relatedCourse.rating}</span>
                      </div>
                      <span className="font-bold text-gray-900">₹{relatedCourse.price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

