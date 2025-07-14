import React from 'react';
import { ChevronDown, Mountain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Mountain className="h-8 w-8 text-white" />
          <span className="text-xl font-bold">Fjelldata</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
            <span>Tjenester</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <a href="#" className="hover:text-gray-300">Om</a>
          <a href="#" className="hover:text-gray-300">Blogg</a>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
            <span>Support</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
        
        <button className="btn-primary">
          Få tilbud
        </button>
      </nav>
    </header>
  );
};

export default Header;