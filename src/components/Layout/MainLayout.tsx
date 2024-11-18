import React, { ReactNode } from 'react';
import Header from "../Parts/Header";
import Footer from "../Parts/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  );
};

export default MainLayout;