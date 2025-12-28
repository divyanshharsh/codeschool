import { Link } from 'react-router-dom'
import { Sparkles, Rocket, Brain, ArrowRight, Users, Star, BookOpen } from 'lucide-react'
import { allCourses } from '../data/courses'

const courseSegments = [
  {
    id: 'elementary',
    title: 'Elementary School',
    subtitle: 'Grades K-5',
    description: 'Perfect for young learners starting their coding journey with visual programming and fun projects',
    icon: <Sparkles className="h-12 w-12" />,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-300',
    path: '/courses/elementary',
  },
  {
    id: 'middle',
    title: 'Middle School',
    subtitle: 'Grades 6-8',
    description: 'Build real programming skills with hands-on projects in Python, Web Development, and Game Design',
    icon: <Rocket className="h-12 w-12" />,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    path: '/courses/middle-school',
  },
  {
    id: 'high',
    title: 'High School',
    subtitle: 'Grades 9-12',
    description: 'Advanced courses preparing you for college and careers in Data Science, AI, Mobile Apps, and more',
    icon: <Brain className="h-12 w-12" />,
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-300',
    path: '/courses/high-school',
  },
]

export default function CoursesPage() {
  const elementaryCount = allCourses.filter(c => c.segment === 'elementary').length
  const middleCount = allCourses.filter(c => c.segment === 'middle').length
  const highCount = allCourses.filter(c => c.segment === 'high').length

  const segmentStats = [
    { segment: 'elementary', count: elementaryCount },
    { segment: 'middle', count: middleCount },
    { segment: 'high', count: highCount },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your Learning Path
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Explore courses designed specifically for your grade level. Start coding today!
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>{allCourses.length} Total Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>50,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>4.8 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Segments */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courseSegments.map((segment, index) => {
              const stats = segmentStats.find(s => s.segment === segment.id)
              return (
                <Link
                  key={segment.id}
                  to={segment.path}
                  className={`group relative p-8 rounded-3xl border-2 ${segment.borderColor} ${segment.bgColor} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${segment.color} text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    {segment.icon}
                  </div>

                  {/* Content */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {segment.title}
                  </h2>
                  <p className="text-primary-600 font-semibold mb-4">{segment.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{segment.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpen className="h-5 w-5" />
                      <span className="font-semibold">{stats?.count || 0} Courses</span>
                    </div>
                    <div className={`flex items-center gap-2 text-white bg-gradient-to-r ${segment.color} px-4 py-2 rounded-full font-semibold group-hover:scale-105 transition-transform`}>
                      <span>Explore</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${segment.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}></div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200">
              <div className="text-4xl font-bold text-pink-600 mb-2">{elementaryCount}</div>
              <div className="text-gray-700 font-semibold">Elementary Courses</div>
              <div className="text-sm text-gray-600 mt-1">Perfect for ages 5-10</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">{middleCount}</div>
              <div className="text-gray-700 font-semibold">Middle School Courses</div>
              <div className="text-sm text-gray-600 mt-1">Perfect for ages 11-14</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">{highCount}</div>
              <div className="text-gray-700 font-semibold">High School Courses</div>
              <div className="text-sm text-gray-600 mt-1">Perfect for ages 15-18</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning to code. Choose your grade level and begin your journey today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/courses/elementary"
              className="px-6 py-3 bg-white text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
            >
              Explore Elementary
            </Link>
            <Link
              to="/courses/middle-school"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Middle School
            </Link>
            <Link
              to="/courses/high-school"
              className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Explore High School
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
