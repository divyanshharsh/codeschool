import { Link } from 'react-router-dom'
import { Briefcase, Users, BookOpen, Check, Globe, Mail } from 'lucide-react'

export default function SchoolsPage() {
  return (
    <div className="bg-white">
      <section className="section-container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Education Partnerships for Schools</h1>
          <p className="text-lg text-gray-600 mb-8">
            Provide your students with a modern, standards-aligned computer science
            curriculum. Hands-on projects, teacher dashboards, and classroom-ready
            lesson plans designed for Grades 8–12.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/register" className="btn-primary">Get Started</Link>
            <a href="#contact" className="btn-secondary">Contact Sales</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-primary-50 to-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Scalable Classroom Licenses</h3>
              <p className="text-gray-600">Flexible licensing for grades, departments, or whole schools.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                <BookOpen className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Curriculum & Assessments</h3>
              <p className="text-gray-600">Standards-aligned units, rubrics, and built-in assessments for teachers.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                <Briefcase className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Development</h3>
              <p className="text-gray-600">Teacher onboarding, live workshops, and coaching to support success.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Request a School Demo</h2>
          <p className="text-gray-600 mb-6">Fill in the form and our partnerships team will be in touch within 2 business days.</p>

          <form className="grid grid-cols-1 gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="School Name" className="border border-gray-200 rounded-lg px-4 py-3" />
              <input placeholder="Contact Name" className="border border-gray-200 rounded-lg px-4 py-3" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="Email" className="border border-gray-200 rounded-lg px-4 py-3" />
              <input placeholder="Phone" className="border border-gray-200 rounded-lg px-4 py-3" />
            </div>
            <textarea placeholder="Message / Requirements" className="border border-gray-200 rounded-lg px-4 py-3 h-28" />
            <div className="flex items-center gap-4">
              <button type="button" className="btn-primary">Request Demo</button>
              <a href="mailto:partnerships@codeschool.com" className="text-primary-600 font-medium inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> Email Partnerships
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
