import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const BlogPost = ({ id, title, excerpt, date, onDelete }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete this post?')) {
      onDelete(id);
    }
  };

  return (
    <article className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-semibold">
            <Link to={`/post/${id}`} className="text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400">{title}</Link>
          </h2>
          <Button variant="ghost" size="icon" onClick={handleDelete} className="text-red-500 hover:text-red-700">
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
          <Link to={`/post/${id}`} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Read more</Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;