import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-10 pb-6">
      <div className="max-w-5xl mx-auto px-4">
        
        

     
        <div className="text-center border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}