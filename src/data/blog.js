export default [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      slug: "getting-started-with-react-hooks",
      excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
      content: `
        <h2>Introduction to React Hooks</h2>
        <p>React Hooks are a powerful feature introduced in React 16.8 that allow you to use state and other React features without writing a class component.</p>
        
        <h2>Why Hooks?</h2>
        <p>Hooks solve a wide variety of seemingly unconnected problems in React that we've encountered over years of writing components.</p>
        
        <h2>Basic Hooks</h2>
        <h3>useState</h3>
        <p>The useState Hook allows you to add state to functional components.</p>
        
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
      `,
      date: "2023-10-15",
      readTime: "5 min read",
      author: "Alvee",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "JavaScript", "Web Development"]
    },
    {
      id: 2,
      title: "Building Responsive Layouts with Tailwind CSS",
      slug: "responsive-layouts-tailwind-css",
      excerpt: "Discover how to create beautiful, responsive designs using Tailwind CSS utility classes.",
      content: `
        <h2>Introduction to Tailwind CSS</h2>
        <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML.</p>
        
        <h2>Responsive Design Principles</h2>
        <p>Learn how to use Tailwind's responsive modifiers to create layouts that work on all screen sizes.</p>
      `,
      date: "2023-09-22",
      readTime: "7 min read",
      author: "Alvee",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Tailwind", "CSS", "Responsive Design"]
    }
  ];