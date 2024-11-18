import React, { useState } from 'react';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { InvestorTest } from './components/InvestorTest';
import { LegislativePage } from './components/LegislativePage';
import { GetAccreditedPage } from './components/GetAccreditedPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'test' | 'legislative' | 'get-accredited'>('landing');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header onNavigate={setCurrentPage} />

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Legislative Update Notice */}
        {currentPage !== 'legislative' && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 flex items-center justify-between">
            <p className="text-amber-800 text-sm">
              <strong>Important Notice:</strong> The Equal Opportunity for All Investors Act of 2023 may change accredited investor qualifications.
            </p>
            <button
              onClick={() => setCurrentPage('legislative')}
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Learn More
            </button>
          </div>
        )}

        {currentPage === 'test' && <InvestorTest onGetAccredited={() => setCurrentPage('get-accredited')} />}
        {currentPage === 'landing' && <LandingPage onStartTest={() => setCurrentPage('test')} />}
        {currentPage === 'legislative' && <LegislativePage onBackToTest={() => setCurrentPage('test')} />}
        {currentPage === 'get-accredited' && <GetAccreditedPage />}

        {/* Disclaimer */}
        <div className="mt-8 text-sm text-gray-500">
          <p className="mb-2">
            <strong>Disclaimer:</strong> This information is for educational purposes only and does not constitute legal or financial advice.
          </p>
          <p>
            The determination of accredited investor status should be made in consultation with qualified legal and financial professionals.
          </p>
        </div>
      </main>
    </div>
  );
}