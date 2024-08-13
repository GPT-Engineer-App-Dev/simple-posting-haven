import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      excerpt: content.slice(0, 100) + '...'
    };

    // Get existing posts from local storage
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    
    // Add new post to the beginning of the array
    const updatedPosts = [newPost, ...existingPosts];
    
    // Save updated posts to local storage
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

    // Redirect to home page
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1"
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Content</label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="mt-1"
          rows={10}
        />
      </div>
      <Button type="submit">Create Post</Button>
    </form>
  );
};

export default CreatePostForm;