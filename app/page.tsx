export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hofmedia</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Welcome to Hofmedia
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Your trusted partner for innovative digital media solutions
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300">
              Get Started
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              About Us
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              Hofmedia is dedicated to providing exceptional digital media services. 
              We combine creativity with technology to deliver outstanding results for our clients.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Our Services
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Design
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Creative and modern design solutions tailored to your brand identity.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">💻</div>
                <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Development
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Cutting-edge web development with the latest technologies.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Digital Media
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive digital media strategies to grow your online presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              Get In Touch
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Ready to start your next project? Contact us today!
            </p>
            <a 
              href="mailto:info@hofmedia.com" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            >
              Email Us
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Hofmedia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
