'use client';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <main className="container mx-auto px-4 py-8">
        {/* User Welcome Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, Developer!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Here&apos;s what&apos;s happening in your developer community.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {/* Activity Items */}
                <div className="border-b dark:border-gray-700 pb-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    No recent activity to show.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Your Profile
              </h2>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
                <p className="text-gray-900 dark:text-white font-medium">
                  Developer Name
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  @username
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Quick Links
              </h2>
              <div className="space-y-2">
                <a href="/projects/new" className="block text-blue-600 hover:underline">
                  Create New Project
                </a>
                <a href="/messages" className="block text-blue-600 hover:underline">
                  Messages
                </a>
                <a href="/settings" className="block text-blue-600 hover:underline">
                  Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 