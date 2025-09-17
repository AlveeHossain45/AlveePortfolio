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
    image: "school3.png",
    description: "A modern and clean portfolio design with smooth animations and responsive layout.",
    techStack: ["Figma", "Adobe XD", "Illustrator"],
    tags: ["design", "web"]
  }
];