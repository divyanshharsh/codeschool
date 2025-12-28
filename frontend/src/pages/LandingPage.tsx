import { Link } from 'react-router-dom'
import { 
  Code2, Sparkles, Users, Award, ArrowRight, Check, 
  Play, BookOpen, Target, TrendingUp, Shield,
  Zap, Globe, Gamepad2, Database, Smartphone, Brain,
  Star, ChevronRight, HelpCircle, CheckCircle2, User,
  Crown, Rocket, Heart, Sparkle
} from 'lucide-react'
import { useState } from 'react'

export default function LandingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  const stats = [
    { number: '50,000+', label: 'Active Students', icon: <Users className="h-8 w-8" /> },
    { number: '500+', label: 'Expert Instructors', icon: <Award className="h-8 w-8" /> },
    { number: '200+', label: 'Interactive Courses', icon: <BookOpen className="h-8 w-8" /> },
    { number: '95%', label: 'Completion Rate', icon: <Target className="h-8 w-8" /> },
  ]

  const features = [
    {
      icon: <Code2 className="h-10 w-10" />,
      title: 'Interactive Coding Playground',
      description: 'Write, run, and debug code in real-time with our built-in IDE. Get instant feedback and learn from your mistakes.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: 'Age-Appropriate Curriculum',
      description: 'Carefully designed courses for each grade level, from block-based programming for kids to advanced algorithms for teens.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'Expert-Led Instruction',
      description: 'Learn from industry professionals and experienced educators who understand both coding and pedagogy.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: 'Certificates & Achievements',
      description: 'Earn digital certificates and unlock badges as you progress. Showcase your coding skills to colleges and employers.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Self-Paced Learning',
      description: 'Learn at your own speed with flexible schedules. Access courses 24/7 from any device, anywhere.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Safe & Secure Platform',
      description: 'COPPA-compliant platform with parental controls. Your child\'s safety and privacy are our top priorities.',
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  const howItWorks = [
    {
      step: '01',
      title: 'Sign Up & Choose Your Path',
      description: 'Create your free account and select courses based on your grade level and interests. We recommend the perfect starting point for you.',
      icon: <User className="h-12 w-12" />,
    },
    {
      step: '02',
      title: 'Learn Through Interactive Lessons',
      description: 'Watch engaging video tutorials, read comprehensive guides, and practice with hands-on coding exercises.',
      icon: <Play className="h-12 w-12" />,
    },
    {
      step: '03',
      title: 'Practice in Real Projects',
      description: 'Build real-world projects like games, websites, and apps. Apply what you learn in fun, creative ways.',
      icon: <Code2 className="h-12 w-12" />,
    },
    {
      step: '04',
      title: 'Get Feedback & Improve',
      description: 'Receive instant feedback on your code, get help from instructors, and track your progress with detailed analytics.',
      icon: <TrendingUp className="h-12 w-12" />,
    },
  ]

  const learningPaths = [
    {
      title: 'Elementary (K-5)',
      description: 'Start with visual programming and computational thinking',
      courses: ['Scratch Basics', 'Block Coding', 'Digital Art & Animation'],
      color: 'bg-pink-100 border-pink-300',
      icon: <Sparkles className="h-8 w-8 text-pink-600" />,
    },
    {
      title: 'Middle School (6-8)',
      description: 'Learn real programming languages and build projects',
      courses: ['Python for Kids', 'Web Development', 'Game Design'],
      color: 'bg-blue-100 border-blue-300',
      icon: <Code2 className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'High School (9-12)',
      description: 'Master advanced concepts and prepare for careers',
      courses: ['Data Science', 'Mobile Apps', 'AI & Machine Learning'],
      color: 'bg-purple-100 border-purple-300',
      icon: <Brain className="h-8 w-8 text-purple-600" />,
    },
  ]

  const courseCategories = [
    { name: 'Web Development', icon: <Globe className="h-6 w-6" />, count: 45 },
    { name: 'Game Development', icon: <Gamepad2 className="h-6 w-6" />, count: 32 },
    { name: 'Data Science', icon: <Database className="h-6 w-6" />, count: 28 },
    { name: 'Mobile Apps', icon: <Smartphone className="h-6 w-6" />, count: 25 },
    { name: 'Python Programming', icon: <Code2 className="h-6 w-6" />, count: 38 },
    { name: 'AI & Machine Learning', icon: <Brain className="h-6 w-6" />, count: 18 },
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      icon: <Rocket className="h-6 w-6" />,
      monthlyPrice: 499,
      annualPrice: 4999,
      description: 'Perfect for individual students',
      color: 'from-blue-500 to-cyan-500',
      badge: null,
      features: [
        'Access to basic courses',
        '5 coding exercises per week',
        'Progress tracking',
        'Email support',
        'Community forum access',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      icon: <Crown className="h-6 w-6" />,
      monthlyPrice: 999,
      annualPrice: 9999,
      description: 'Best for serious learners',
      color: 'from-primary-600 to-primary-700',
      badge: 'Most Popular',
      features: [
        'Access to all courses',
        'Unlimited coding exercises',
        'Advanced progress tracking',
        'Priority support',
        'Certificates & badges',
        'Live coding sessions',
        '1-on-1 tutoring (2 sessions/month)',
      ],
      popular: true,
    },
    {
      name: 'Family',
      icon: <Heart className="h-6 w-6" />,
      monthlyPrice: 1999,
      annualPrice: 19999,
      description: 'For families with multiple children',
      color: 'from-purple-500 to-pink-500',
      badge: 'Best Value',
      features: [
        'Up to 4 student accounts',
        'All Premium features',
        'Parent dashboard',
        'Family progress reports',
        'Dedicated support',
        'Family learning challenges',
        'Priority course access',
      ],
      popular: false,
    },
  ]

  const getSavings = (monthly: number, annual: number) => {
    const monthlyTotal = monthly * 12
    const savings = monthlyTotal - annual
    const percentage = Math.round((savings / monthlyTotal) * 100)
    return { savings, percentage }
  }

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent of 10-year-old',
      content: 'My daughter went from zero coding experience to building her own games in just 3 months! The interactive lessons keep her engaged and excited about learning.',
      rating: 5,
      image: '👩',
    },
    {
      name: 'Michael Chen',
      role: 'Student, Grade 8',
      content: 'I love the coding playground. It makes learning Python fun and easy. I\'ve already built my first game and shared it with my friends!',
      rating: 5,
      image: '👦',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Teacher',
      content: 'As an educator, I appreciate the well-structured curriculum and the ability to track my students\' progress. It\'s been a game-changer for my computer science class.',
      rating: 5,
      image: '👩‍🏫',
    },
    {
      name: 'David Park',
      role: 'Parent of twins, Grade 6',
      content: 'Both my kids are learning at their own pace. The family plan is perfect for us, and I love seeing their progress in the parent dashboard.',
      rating: 5,
      image: '👨',
    },
    {
      name: 'Jessica Martinez',
      role: 'Student, Grade 11',
      content: 'The data science course helped me win a science fair! The instructors are amazing and always available to help. Highly recommend!',
      rating: 5,
      image: '👧',
    },
    {
      name: 'Robert Thompson',
      role: 'Homeschool Parent',
      content: 'CodeSchool has become an essential part of our homeschool curriculum. The self-paced learning is perfect for our schedule.',
      rating: 5,
      image: '👨‍👩‍👧',
    },
  ]

  const faqs = [
    {
      question: 'What age groups does CodeSchool serve?',
      answer: 'We offer courses for all K-12 students, from kindergarten through 12th grade. Our curriculum is specifically designed for each age group, starting with visual block programming for younger students and progressing to advanced programming languages for high schoolers.',
    },
    {
      question: 'Do I need prior coding experience?',
      answer: 'Not at all! Our courses are designed for complete beginners. We start with the fundamentals and gradually build up to more advanced concepts. Each course includes step-by-step instructions and plenty of practice exercises.',
    },
    {
      question: 'What programming languages are taught?',
      answer: 'We cover a wide range of languages including Scratch (for beginners), Python, JavaScript, HTML/CSS, Java, and more. The specific languages depend on the course and grade level. We also teach important concepts like web development, game design, and data science.',
    },
    {
      question: 'Can parents track their child\'s progress?',
      answer: 'Yes! Parents have access to a dedicated dashboard where they can view their child\'s progress, completed courses, achievements, and time spent learning. You\'ll also receive regular progress reports via email.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 7-day free trial for all new users. You can explore our courses, try the coding playground, and see if CodeSchool is right for you. No credit card required.',
    },
    {
      question: 'What devices are supported?',
      answer: 'CodeSchool works on any device with a web browser - desktop computers, laptops, tablets, and smartphones. Our platform is fully responsive and optimized for all screen sizes.',
    },
    {
      question: 'Are the courses self-paced?',
      answer: 'Yes! All courses are self-paced, so students can learn at their own speed. However, we also offer live coding sessions and scheduled workshops for Premium and Family plan members.',
    },
    {
      question: 'What if my child needs extra help?',
      answer: 'We offer multiple support options including community forums, email support, and 1-on-1 tutoring sessions (available with Premium and Family plans). Our instructors are always ready to help!',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="section-container relative py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Trusted by 50,000+ students worldwide</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Learn Coding & Computer Science
              <span className="block mt-3 bg-gradient-to-r from-cyan-300 to-yellow-300 bg-clip-text text-transparent">
                Made Fun for K-12
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Interactive courses, hands-on projects, and expert guidance to help students 
              develop essential coding skills. Start your journey today with our free trial!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/register" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center justify-center text-lg px-8 py-4 shadow-xl">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/courses" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10 inline-flex items-center justify-center text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-primary-100">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-2" />
                <span>7-Day Free Trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-2" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-2" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose CodeSchool?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make coding education accessible, engaging, and effective for students of all ages. 
              Our platform combines cutting-edge technology with proven teaching methods.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started is easy. Follow these simple steps to begin your coding journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl border-2 border-primary-200 h-full">
                  <div className="text-6xl font-bold text-primary-200 mb-4">{step.step}</div>
                  <div className="text-primary-600 mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-8 w-8 text-primary-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Learning Paths by Grade Level
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect learning path based on your grade level and interests.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 ${path.color} hover:shadow-xl transition-all duration-300`}
              >
                <div className="mb-4">{path.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{path.title}</h3>
                <p className="text-gray-700 mb-6">{path.description}</p>
                <div className="space-y-2 mb-6">
                  {path.courses.map((course, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/courses"
                  className="inline-flex items-center font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Course Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover hundreds of courses across multiple programming domains.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {courseCategories.map((category, index) => (
              <Link
                key={index}
                to="/courses"
                className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} courses</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Innovative Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6">
              <Sparkle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Learning Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Affordable pricing options designed for Indian students. Start your 7-day free trial today!
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white p-1 rounded-full border-2 border-gray-200 shadow-lg mb-8">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 relative ${
                  billingPeriod === 'annual'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {pricingPlans.map((plan, index) => {
              const currentPrice = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice
              const savings = billingPeriod === 'annual' ? getSavings(plan.monthlyPrice, plan.annualPrice) : null
              
              return (
                <div
                  key={index}
                  className={`relative group ${
                    plan.popular ? 'md:-mt-4 md:mb-4' : ''
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-xl flex items-center gap-2 animate-pulse">
                        <Sparkle className="h-4 w-4" />
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div
                    className={`h-full p-8 rounded-3xl border-2 transition-all duration-500 ${
                      plan.popular
                        ? 'bg-gradient-to-br from-primary-50 via-white to-primary-50 border-primary-500 shadow-2xl scale-105'
                        : 'bg-white border-gray-200 hover:border-primary-300 hover:shadow-xl'
                    }`}
                  >
                    {/* Icon and Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} text-white shadow-lg`}>
                        {plan.icon}
                      </div>
                      {plan.badge && !plan.popular && (
                        <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    {/* Plan Name and Description */}
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold text-gray-900">
                          ₹{currentPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-gray-600 ml-2">
                          /{billingPeriod === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                      {billingPeriod === 'annual' && savings && (
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-sm text-gray-500 line-through">
                            ₹{(plan.monthlyPrice * 12).toLocaleString('en-IN')}
                          </span>
                          <span className="bg-green-100 text-green-700 text-sm font-semibold px-2 py-1 rounded">
                            Save {savings.percentage}%
                          </span>
                        </div>
                      )}
                      {billingPeriod === 'monthly' && (
                        <p className="text-sm text-gray-500 mt-2">
                          Billed monthly
                        </p>
                      )}
                    </div>

                    {/* Features List */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mr-3 mt-0.5`}>
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      to="/register"
                      className={`block w-full text-center py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl transform hover:scale-105'
                          : 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg'
                      }`}
                    >
                      Get Started Now
                      <ArrowRight className="inline-block ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>7-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Money-Back Guarantee</span>
              </div>
            </div>
            <p className="text-gray-600">
              Need help choosing?{' '}
              <Link to="/about" className="text-primary-600 hover:text-primary-700 font-semibold underline">
                Contact our team
              </Link>
              {' '}for personalized recommendations
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of students and parents who love CodeSchool
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
              <HelpCircle className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We've got answers. Check out our FAQ below.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-primary-300 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                  <span className="text-primary-600 mr-3">Q{index + 1}.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link to="/about" className="btn-primary inline-flex items-center">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        <div className="section-container text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join 50,000+ students learning to code. Start your free 7-day trial today - no credit card required!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/register" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center text-lg px-8 py-4 shadow-xl">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/courses" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10 inline-flex items-center text-lg px-8 py-4">
              Browse Courses
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-primary-100">
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              <span>7-Day Free Trial</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              <span>50,000+ Happy Students</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

