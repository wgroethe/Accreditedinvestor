import React from 'react';
import { Scale, AlertTriangle } from 'lucide-react';

type HeaderProps = {
  onNavigate: (page: 'landing' | 'test' | 'legislative' | 'get-accredited') => void;
};

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('landing')}>
            <Scale className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Accredited Investor Test</h1>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('test')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
            >
              Free Assessment
            </button>
            <button
              onClick={() => onNavigate('legislative')}
              className="inline-flex items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition duration-150"
            >
              HR 2797
            </button>
            <button
              onClick={() => onNavigate('get-accredited')}
              className="inline-flex items-center px-4 py-2 border border-green-600 text-sm font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition duration-150"
            >
              Get Accredited
            </button>
            <div className="flex items-center space-x-2 bg-amber-50 px-3 py-1 rounded-full">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <span className="text-sm text-amber-700">Pre-Reform Assessment</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}