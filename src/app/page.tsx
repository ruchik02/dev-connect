'use client';

// import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  // const { loading } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link 
                href="/"
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                DevConnect
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/auth/login"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Login
              </Link>
              <Link href="/auth/register">
                <Button variant="primary" size="sm">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Connect with Developers
            <span className="text-blue-600"> Worldwide</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join a community of passionate developers. Share your work, learn from others,
            and grow your network in a space built for developers like you.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/auth/register">
              <Button variant="primary" size="lg">
                Join the Community
              </Button>
            </Link>
            <Link href="/explore">
              <Button variant="outline" size="lg">
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Share Your Work
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Showcase your projects and get valuable feedback from experienced developers
              in the community.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Connect with Peers
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Network with developers who share your interests and build lasting
              professional relationships.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Learn & Grow
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Access resources, join discussions, and learn from experienced developers
              in the community.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Active Developers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5K+</div>
              <div className="text-blue-100">Projects Shared</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Code Collaborations</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Join?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Start your journey with DevConnect today and become part of a thriving
            developer community.
          </p>
          <Link href="/auth/register">
            <Button variant="primary" size="lg">
              Create Your Account
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© 2024 DevConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
