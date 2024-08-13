import React from 'react';
import Header from '../components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About Me</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Hello! I'm a passionate blogger and web developer. This blog is where I share my thoughts,
              experiences, and insights about technology, web development, and life in general.
            </p>
            <p className="text-gray-600">
              Feel free to explore my posts and get in touch if you'd like to connect or collaborate!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;