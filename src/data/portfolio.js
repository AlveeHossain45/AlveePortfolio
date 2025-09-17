// src/data/portfolio.js
export default [
  {
    id: 1,
    title: "School Management System Premium",
    category: "Web Development",
    // দ্রষ্টব্য: এই ছবিটি একটি placeholder। আপনার ছবিটি public ফোল্ডারে রেখে এখানে তার পাথ দিন।
    // যেমন: image: "/school-management.png",
    image: "school.png",
    description: "A comprehensive school management system to streamline administrative tasks, manage student data, and facilitate communication between teachers and parents.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    tags: ["web", "react"],
    liveUrl: "https://alveeweb.netlify.app/", // আপনার দেওয়া লাইভ ওয়েবসাইটের লিঙ্ক
    githubUrl: "https://github.com/AlveeHossain45" // আপনার গিটহাব লিঙ্ক (যদি থাকে)
  },
  {
    id: 2,
    title: "School Management System Basic",
    category: "Web Development",
    image: "school1.png",
    description: "A weather application that provides real-time weather data and forecasts for locations worldwide.",
    techStack: ["React Native", "API Integration", "JavaScript"],
    tags: ["mobile", "react"]
  },
  {
    id: 3,
    title: "Portfolio Design",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "A modern and clean portfolio design with smooth animations and responsive layout.",
    techStack: ["Figma", "Adobe XD", "Illustrator"],
    tags: ["design", "web"]
  }
];