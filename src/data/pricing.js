// src/data/pricing.js
import { Star, Zap, Tool } from 'lucide-react';

export const pricingPlans = [
  {
    title: "Basic Plan",
    price: "$199",
    frequency: "/ one-time",
    description: "For personal websites or small portfolios.",
    features: [
      "Responsive 1-3 Page Website",
      "Standard Template Design",
      "Contact Form Integration",
      "Basic SEO Setup",
      "30 Days of Free Support"
    ],
    buttonText: "Get Started",
    icon: Star,
    isFeatured: false
  },
  {
    title: "Premium Plan",
    price: "$499",
    frequency: "/ one-time",
    description: "Ideal for businesses and professionals.",
    features: [
      "Up to 10 Pages Website",
      "Custom Premium Design",
      "Content Management System (CMS)",
      "Advanced SEO Optimization",
      "Social Media Integration",
      "90 Days of Free Support"
    ],
    buttonText: "Choose Premium",
    icon: Zap,
    isFeatured: true // এই প্ল্যানটি হাইলাইট করা হবে
  },
  {
    title: "Custom Project",
    price: "Let's Talk",
    frequency: "",
    description: "For large-scale or unique applications.",
    features: [
      "Custom Feature Development",
      "E-commerce Functionality",
      "API Integrations",
      "Dedicated Project Manager",
      "Ongoing Maintenance Plan",
      "Full Ownership of Code"
    ],
    buttonText: "Contact Me",
    icon: Tool,
    isFeatured: false
  }
];