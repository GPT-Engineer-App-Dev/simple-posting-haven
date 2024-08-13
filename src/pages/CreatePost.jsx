import React from 'react';
import Header from '../components/Header';
import CreatePostForm from '../components/CreatePostForm';

const CreatePost = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Create New Post</h1>
        <CreatePostForm />
      </main>
    </div>
  );
};

export default CreatePost;