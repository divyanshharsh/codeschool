import { Code2, Target, Eye, Users, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in our curriculum and teaching methods.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion',
      description: 'We\'re passionate about making coding education accessible and enjoyable.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'We believe in building a supportive learning community for all students.',
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We continuously innovate to provide the best learning experience.',
    },
  ]

  const team = [
    {
      name: 'Dr. Sarah Williams',
      role: 'Founder & CEO',
      bio: 'Former computer science professor with 15+ years of experience in K-12 education.',
    },
    {
      name: 'Michael Park',
      role: 'CTO',
      bio: 'Software engineer and education technology expert, passionate about making coding accessible.',
    },
    {
      name: 'Emily Chen',
      role: 'Head of Curriculum',
      bio: 'Curriculum designer specializing in age-appropriate computer science education.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About CodeSchool
            </h1>
            <p className="text-xl text-gray-600">
              Empowering the next generation of coders and computer scientists
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Code2 className="h-16 w-16 text-primary-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                At CodeSchool, we believe that every child should have the opportunity to learn 
                coding and computer science, regardless of their background or prior experience. 
                Our mission is to make high-quality coding education accessible, engaging, and 
                effective for K-12 students.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We understand that learning to code can be intimidating, which is why we've 
                designed our platform to be age-appropriate, interactive, and fun. Our courses 
                are created by experienced educators and industry professionals who understand 
                both the technical aspects of coding and the pedagogical needs of young learners.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Through hands-on projects, interactive exercises, and real-world applications, 
                we help students develop not just coding skills, but also critical thinking, 
                problem-solving, and creativity—skills that will serve them throughout their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white border border-gray-200"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                CodeSchool was founded in 2020 by a team of educators and technologists who 
                recognized a critical gap in K-12 education. While coding and computer science 
                are increasingly important skills, many schools lack the resources or expertise 
                to provide quality instruction in these areas.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                What started as a small initiative to help local students has grown into a 
                comprehensive platform serving thousands of students across the country. We've 
                partnered with schools, homeschool families, and individual learners to provide 
                flexible, high-quality coding education.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Today, we're proud to offer a wide range of courses covering everything from 
                block-based programming for elementary students to advanced Python and web 
                development for high schoolers. But our mission remains the same: to make 
                coding education accessible, engaging, and empowering for every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate educators and technologists behind CodeSchool
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center"
              >
                <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Whether you're a student, parent, or educator, we'd love to have you as part 
            of the CodeSchool community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Get Started
            </Link>
            <Link to="/courses" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

