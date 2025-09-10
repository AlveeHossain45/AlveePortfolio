import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  
  // In a real app, you would fetch the blog post based on the slug
  const post = {
    id: 1,
    title: "Getting Started with React Hooks",
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks are a powerful feature introduced in React 16.8 that allow you to use state and other React features without writing a class component. They provide a more direct API to the React concepts you already know.</p>
      
      <h2>Why Hooks?</h2>
      <p>Hooks solve a wide variety of seemingly unconnected problems in React that we've encountered over five years of writing and maintaining tens of thousands of components.</p>
      
      <h2>Basic Hooks</h2>
      <h3>useState</h3>
      <p>The useState Hook allows you to add state to functional components. Here's an example:</p>
      
      <pre><code>function Example() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>
      
      <h3>useEffect</h3>
      <p>The useEffect Hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.</p>
    `,
    date: "2023-10-15",
    readTime: "5 min read",
    author: "Alvee",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  };

  return (
    <main className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container mx-auto container-padding max-w-4xl">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary hover:underline mb-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
            
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="prose prose-lg dark:prose-invert max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
    </main>
  );
};

export default BlogPost;