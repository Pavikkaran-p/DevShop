import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-gray-900">
      <header className="px-6 h-16 flex items-center justify-between border-b shadow-sm">
        <a className="flex items-center gap-2 text-lg font-semibold" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
          </svg>
          <span>DevShop</span>
        </a>
        <nav className="flex gap-6 text-sm font-medium">
          <Link className="hover:underline" href="/home">Shop</Link>
          <Link className="hover:underline" to="/about">About</Link>
          <Link className="hover:underline" to="/home">Contact</Link>
          <Link className="hover:underline" to="/home">Cart</Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 sm:py-28 lg:py-36 text-center bg-gray-50">
          <div className="container px-4 mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              Elevate Your Style with Our Premium Products
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover the perfect blend of quality, design, and innovation in our carefully curated collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/home" className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition">
                Shop Now
              </Link>
              <a href="#" className="border px-6 py-3 rounded-md hover:bg-gray-100 transition">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Website Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the features that make our e-commerce store stand out.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                  ),
                  title: "Best quality products",
                  desc: "Discover our premium selection of high-quality products.",
                },
                {
                  icon: (
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                  ),
                  title: "Personalised recommendation",
                  desc: "Get tailored product suggestions just for you.",
                },
                {
                  icon: (
                    <circle cx="8" cy="21" r="1" />
                  ),
                  title: "Exclusive Offers",
                  desc: "Enjoy special discounts and promotions.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border rounded-xl p-6 text-center shadow-sm">
                  <div className="bg-gray-100 p-4 rounded-full inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl grid gap-10 lg:grid-cols-2 items-center">
            <div className="aspect-video w-full bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
              Image Placeholder
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">About Our E-commerce Store</h2>
              <p className="text-gray-600 mb-6">
                Learn about our commitment to quality, sustainability, and exceptional customer service.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container px-4 mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2].map((i) => (
                <div key={i} className="p-6 bg-white rounded-xl border shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-600">
                      {i === 1 ? 'JD' : 'JA'}
                    </div>
                    <div>
                      <p className="font-semibold">{i === 1 ? 'John Doe' : 'Jane Appleseed'}</p>
                      <p className="text-xs text-gray-500">Verified Customer</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    {i === 1
                      ? "I'm thrilled with my purchase from this store. The quality and attention to detail are unmatched."
                      : "I'm impressed with the seamless shopping experience. This is now my go-to store."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-2">Stay Updated with Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to receive the latest updates, exclusive offers, and helpful tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-2 rounded-md border border-gray-300"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              We respect your privacy. Your email will not be shared.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm">
          {[
            ['Company', ['About Us', 'Our Team', 'Careers', 'News']],
            ['Products', ['Men', 'Women', 'Kids', 'Accessories']],
            ['Resources', ['Blog', 'Community', 'Support', 'FAQs']],
            ['Legal', ['Privacy Policy', 'Terms of Service', 'Cookies']],
            ['Contact', ['Support', 'Sales', 'Press', 'Partners']],
          ].map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              {links.map((link) => (
                <a key={link} href="#" className="block hover:underline">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default Landing
