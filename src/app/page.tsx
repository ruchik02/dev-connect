import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            DevConnect
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Connect, Collaborate, and Grow with Fellow Developers
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Share Your Work
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Showcase your projects and get feedback from the community
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Connect with Peers
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Network with developers who share your interests
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Learn & Grow
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Access resources and learn from experienced developers
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href="/auth/register"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Join the Community
          </a>
        </div>
      </main>
    </div>
  );
}
