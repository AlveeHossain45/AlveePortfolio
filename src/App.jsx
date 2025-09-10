import React from 'react'; // <-- এই লাইনটি যোগ করুন
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="min-h-screen bg-day-background text-day-text dark:bg-night-background dark:text-night-text transition-colors duration-300">
      <Router>
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </AnimatePresence>
        
        <Footer />
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;