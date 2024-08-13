import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BlogPost from '../components/BlogPost';
import { toast } from "sonner";

const Index = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    setBlogPosts(storedPosts);
  }, []);

  const handleDeletePost = (id) => {
    const updatedPosts = blogPosts.filter(post => post.id !== id);
    setBlogPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    toast.success("Post deleted successfully");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Latest Posts</h1>
        {blogPosts.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">No posts yet. Create your first post!</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogPost key={post.id} {...post} onDelete={handleDeletePost} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;