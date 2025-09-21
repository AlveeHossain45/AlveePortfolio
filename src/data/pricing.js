// src/data/pricing.js
import { Star, Zap, Wrench, CheckCircle, Smartphone, LayoutTemplate, Mail, TrendingUp, LifeBuoy, Database, Share2, ShoppingCart, Code, UserCheck, KeyRound } from 'lucide-react';

// ফিচারগুলোর জন্য আইকন ম্যাপ
export const featureIcons = {
  "Responsive 1-3 Page Website": Smartphone,
  "Standard Template Design": LayoutTemplate,
  "Contact Form Integration": Mail,
  "Basic SEO Setup": TrendingUp,
  "30 Days of Free Support": LifeBuoy,
  "Up to 10 Pages Website": Smartphone,
  "Custom Premium Design": LayoutTemplate,
  "Content Management System (CMS)": Database,
  "Advanced SEO Optimization": TrendingUp,
  "Social Media Integration": Share2,
  "90 Days of Free Support": LifeBuoy,
  "Custom Feature Development": Code,
  "E-commerce Functionality": ShoppingCart,
  "API Integrations": Code,
  "Dedicated Project Manager": UserCheck,
  "Ongoing Maintenance Plan": LifeBuoy,
  "Full Ownership of Code": KeyRound,
  // ডিফল্ট আইকন
  "default": CheckCircle
};

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
    actionLink: "#contact", // <-- বাটনের লিঙ্ক
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
    actionLink: "#contact", // <-- বাটনের লিঙ্ক
    icon: Zap,
    isFeatured: true
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
    actionLink: "#contact", // <-- বাটনের লিঙ্ক
    icon: Wrench,
    isFeatured: false
  }
];