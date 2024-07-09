import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  const backgroundImageUrl = 'https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg';

  return (
    <>
      <div className='relative bg-cover bg-center bg-no-repeat h-screen w-screen overflow-x-hidden' style={{ 
        backgroundImage: `url(${backgroundImageUrl})` 
      }}>
        <Navbar />
        {children}
      </div>
    </>
  );
}

export default MainLayout;
