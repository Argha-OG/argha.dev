import './index.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import MainLayout from './layout/MainLayout.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import BlogPage from './pages/BlogPage/BlogPage.jsx'
import BlogArticle from './pages/BlogPage/BlogArticle.jsx'
import SEO from './components/SEO.jsx'

// Scroll to top component
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogArticle />} />
          </Routes>
        </MainLayout>
      </Router>
    </HelmetProvider>
  )
}

export default App
