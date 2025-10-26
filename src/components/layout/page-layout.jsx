import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import TopBar from '@components/common/top-bar';


/**
 * Main page layout component with header, footer, and optional top bar
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} [props.title] - Page title for document.title
 * @param {boolean} [props.showTopBar=true] - Whether to show top bar
 * @param {boolean} [props.showHeader=true] - Whether to show header
 * @param {boolean} [props.showFooter=true] - Whether to show footer
 * @param {string} [props.className=''] - Additional CSS classes
 */
function PageLayout({
  children,
  title,
  showTopBar = true,
  showHeader = true,
  showFooter = true,
  className = ''
}) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <div className={`antialiased bg-body text-body font-body ${className}`}>
      {showTopBar && <TopBar />}
      {showHeader && <Header />}
      <main>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

export default PageLayout;