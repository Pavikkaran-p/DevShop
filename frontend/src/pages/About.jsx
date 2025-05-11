import React from 'react'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are dedicated to providing the best shopping experience for our customers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600">
            To provide high-quality products at competitive prices while ensuring excellent customer service.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-600">
            To become the leading e-commerce platform trusted by millions of customers worldwide.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Our Values</h3>
          <p className="text-gray-600">
            Integrity, customer satisfaction, innovation, and continuous improvement drive everything we do.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About