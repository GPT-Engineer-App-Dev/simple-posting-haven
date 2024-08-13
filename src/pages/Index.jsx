import React from 'react';
import Header from '../components/Header';
import BlogPost from '../components/BlogPost';

const blogPosts = [
  { id: 1, title: "My First Blog Post", excerpt: "This is the beginning of my blogging journey...", date: "2023-03-15" },
  { id: 2, title: "Reflections on Web Development", excerpt: "As I delve deeper into web development...", date: "2023-03-20" },
  { id: 3, title: "The Importance of User Experience", excerpt: "User experience is at the heart of every successful website...", date: "2023-03-25" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;