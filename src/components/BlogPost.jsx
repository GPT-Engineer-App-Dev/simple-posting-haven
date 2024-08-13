import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ id, title, excerpt, date }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">
          <Link to={`/post/${id}`} className="text-gray-900 hover:text-blue-600">{title}</Link>
        </h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{date}</span>
          <Link to={`/post/${id}`} className="text-blue-600 hover:text-blue-800">Read more</Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;