import React from 'react';
import logo from '../lib/logo.jpeg';

const Taskbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-20 bg-blue-300 flex items-center justify-between px-2">
      <div className="flex items-center">
        <img src={logo.src} alt="Logo" className="w-14 h-14 mr-4" />

      </div>
      <div className="flex-1 text-black font-bold text-lg">
        HILAL AI
      </div>
      <div className="flex items-center">
        <div className="text-black px-4">
          <span>
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;