import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const blogPosts = {
  1: {
    title: "My First Blog Post",
    content: "This is the full content of my first blog post. It's been an exciting journey starting this blog...",
    date: "2023-03-15"
  },
  2: {
    title: "Reflections on Web Development",
    content: "As I continue my journey in web development, I've learned that there's always something new to discover...",
    date: "2023-03-20"
  },
  3: {
    title: "The Importance of User Experience",
    content: "User experience is crucial in web design. A good UX can make or break a website...",
    date: "2023-03-25"
  }
};

const PostPage = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-6">{post.date}</p>
            <div className="prose max-w-none">
              <p>{post.content}</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default PostPage;