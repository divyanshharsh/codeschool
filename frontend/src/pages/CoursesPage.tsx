import { useState } from 'react'
import { Search, Filter, Code2, Clock, Users, Star } from 'lucide-react'

interface Course {
  id: number
  title: string
  description: string
  instructor: string
  gradeLevel: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  students: number
  rating: number
  price: number
  thumbnail: string
  category: string
}

const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Introduction to Scratch Programming',
    description: 'Learn the basics of coding through fun, interactive Scratch projects designed for elementary students.',
    instructor: 'Dr. Sarah Williams',
    gradeLevel: 'Grades K-3',
    difficulty: 'Beginner',
    duration: '8 weeks',
    students: 1250,
    rating: 4.8,
    price: 49.99,
    thumbnail: 'scratch',
    category: 'Block Programming',
  },
  {
    id: 2,
    title: 'Python for Kids',
    description: 'Start your Python journey with fun projects and games. Perfect for middle school students.',
    instructor: 'Michael Park',
    gradeLevel: 'Grades 4-6',
    difficulty: 'Beginner',
    duration: '12 weeks',
    students: 2100,
    rating: 4.9,
    price: 79.99,
    thumbnail: 'python',
    category: 'Python',
  },
  {
    id: 3,
    title: 'Web Development Basics',
    description: 'Build your first website using HTML, CSS, and JavaScript. No prior experience needed!',
    instructor: 'Emily Chen',
    gradeLevel: 'Grades 7-9',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    students: 1800,
    rating: 4.7,
    price: 89.99,
    thumbnail: 'web',
    category: 'Web Development',
  },
  {
    id: 4,
    title: 'Game Development with JavaScript',
    description: 'Create your own games using JavaScript and game development principles.',
    instructor: 'Michael Park',
    gradeLevel: 'Grades 7-9',
    difficulty: 'Intermediate',
    duration: '14 weeks',
    students: 950,
    rating: 4.6,
    price: 99.99,
    thumbnail: 'game',
    category: 'Game Development',
  },
  {
    id: 5,
    title: 'Data Science for Teens',
    description: 'Explore data analysis and visualization using Python. Perfect for high school students.',
    instructor: 'Dr. Sarah Williams',
    gradeLevel: 'Grades 10-12',
    difficulty: 'Advanced',
    duration: '16 weeks',
    students: 650,
    rating: 4.9,
    price: 119.99,
    thumbnail: 'data',
    category: 'Data Science',
  },
  {
    id: 6,
    title: 'Mobile App Development',
    description: 'Learn to build mobile apps using modern frameworks. Great for aspiring app developers.',
    instructor: 'Emily Chen',
    gradeLevel: 'Grades 10-12',
    difficulty: 'Advanced',
    duration: '18 weeks',
    students: 520,
    rating: 4.8,
    price: 129.99,
    thumbnail: 'mobile',
    category: 'Mobile Development',
  },
]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGrade, setSelectedGrade] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const gradeLevels = ['all', 'K-3', '4-6', '7-9', '10-12']
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced']
  const categories = ['all', 'Block Programming', 'Python', 'Web Development', 'Game Development', 'Data Science', 'Mobile Development']

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGrade = selectedGrade === 'all' || course.gradeLevel.includes(selectedGrade)
    const matchesDifficulty = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory

    return matchesSearch && matchesGrade && matchesDifficulty && matchesCategory
  })

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
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-12">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-gray-600">
            Find the perfect coding course for your grade level and interests
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Grade Level Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Grades</option>
                {gradeLevels.slice(1).map((grade) => (
                  <option key={grade} value={grade}>
                    Grades {grade}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Levels</option>
              {difficulties.slice(1).map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.slice(1).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="section-container">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
              >
                {/* Thumbnail */}
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <Code2 className="h-20 w-20 text-white opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(course.difficulty)}`}>
                      {course.difficulty}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold text-gray-900">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                    </div>
                    <button className="btn-primary text-sm px-4 py-2">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <Code2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No courses found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

