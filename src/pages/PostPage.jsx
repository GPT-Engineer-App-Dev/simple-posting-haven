import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const foundPost = storedPosts.find(p => p.id.toString() === id);
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-muted-foreground mb-6">{post.date}</p>
            <div className="prose dark:prose-invert max-w-none">
              <p>{post.content}</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default PostPage;