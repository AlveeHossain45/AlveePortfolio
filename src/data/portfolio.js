// src/data/portfolio.js

export default [
  {
    id: 1,
    title: "School Management System Premium",
    category: "Web Development",
    
    // এখানে আপনি যত খুশি তত ছবির নাম যোগ করতে পারবেন
    images: [
      "/school.png",              // <-- প্রথম ছবি (গ্রিডে দেখাবে)
      "/school-details-1.png",    // <-- দ্বিতীয় ছবি
      "/school-details-2.png",
      "/school-details-3.png",
      "/school-details-4.png",   // <-- তৃতীয় ছবি
      // "/school-details-3.png", // <-- প্রয়োজনে আরও ছবি যোগ করুন
    ],
    
    description: "A comprehensive school management system to streamline administrative tasks, manage student data, and facilitate communication between teachers and parents.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    tags: ["web", "react"],
    liveUrl: "https://alveeweb.netlify.app/",
    githubUrl: "https://github.com/AlveeHossain45"
  },
  {
    id: 2,
    title: "School Management System Basic",
    category: "Web Development",
    
    // এই প্রজেক্টের জন্য ছবি যোগ করুন
    images: [
      "/school1.png",             // <-- প্রথম ছবি
      "/school1-details-1.png",   // <-- দ্বিতীয় ছবি
      // "/school1-details-2.png", // <-- আপনার যতগুলো ছবি আছে, যোগ করুন
    ],
    
    description: "School Management System Basic is a simple software to manage students, attendance, grades, and class schedules easily. It helps schools stay organized and save time.",
    techStack: ["React Native", "API Integration", "JavaScript"],
    tags: ["mobile", "react"]
  },
  {
    id: 3,
    title: "Inventory Management System",
    category: "Web Development",
    
    // এই প্রজেক্টের জন্যও একইভাবে ছবি যোগ করুন
    images: [
      "/school3.png",
      "/inventory-details-1.png",
      "/inventory-details-2.png",
      // "/inventory-details-3.png",
      // "/inventory-details-4.png", // যত খুশি যোগ করুন
    ],
    
    description: "A modern and clean inventory management system with smooth animations and responsive layout.",
    techStack: ["React", "Node.js", "Tailwind CSS"],
    tags: ["web", "react"],
    liveUrl: "https://samisahil.github.io/aicinventory/",
    githubUrl: "https://github.com/AlveeHossain45"
  }
  // আপনি নতুন প্রজেক্ট যোগ করলে, সেটির জন্যও `images` অ্যারে তৈরি করবেন
];