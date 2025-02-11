'use client';

import Image from 'next/image';
import { useState } from 'react';

// Fallback image URLs
const FALLBACK_AVATAR = '/placeholder-avatar.png';
const FALLBACK_PROJECT = '/placeholder-project.png';

// Image component with fallback
function SafeImage({ src, alt, className, ...props }: any) {
  const [error, setError] = useState(false);
  const isFallbackAvatar = src.includes('avatar');
  
  return (
    <Image
      src={error ? (isFallbackAvatar ? FALLBACK_AVATAR : FALLBACK_PROJECT) : src}
      alt={alt}
      className={`${className} ${error ? 'object-contain bg-gray-100 dark:bg-gray-700' : 'object-cover'}`}
      onError={() => setError(true)}
      {...props}
    />
  );
}

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Page Header */}
      <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Explore DevConnect
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Discover talented developers, exciting projects, and connect with the community
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search developers, projects, or skills..."
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="absolute right-3 top-2.5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
              </div>
              <div className="relative">
                <select 
                  className="appearance-none px-4 py-2 pr-8 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 bg-white dark:bg-gray-700"
                  defaultValue=""
                >
                  <option value="">All Categories</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="devops">DevOps</option>
                  <option value="ui/ux">UI/UX Design</option>
                </select>
                <span className="absolute right-3 top-2.5 text-gray-400 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Featured Developers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Developers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <SafeImage
                      src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                      alt={`Developer ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      John Doe {i}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">Full Stack Developer</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">React</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">Node.js</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">TypeScript</span>
                  </div>
                </div>
                <button className="mt-4 w-full border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                  <SafeImage
                    src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    alt={`Project ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Project Name {i}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A brief description of the project and what technologies were used in its development.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs px-2 py-1 rounded">React</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs px-2 py-1 rounded">Node.js</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="relative w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                        <SafeImage
                          src={`https://images.pexels.com/photos/14553713/pexels-photo-14553713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                          alt={`Contributor ${j}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <button className="text-blue-600 hover:underline">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Topics/Tags */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Popular Topics
          </h2>
          <div className="flex flex-wrap gap-3">
            {['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'TypeScript', 'GraphQL'].map((tag) => (
              <button
                key={tag}
                className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {tag}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 