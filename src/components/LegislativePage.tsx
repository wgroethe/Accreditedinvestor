import React, { useState } from 'react';
import { BookOpen, Users, TrendingUp, LineChart, Building2, ArrowRight, Scale, Mail, CheckCircle } from 'lucide-react';

type ChangeItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function ChangeItem({ icon, title, description }: ChangeItemProps) {
  return (
    <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
      <div className="flex-shrink-0">
        <div className="p-3 bg-indigo-100 rounded-lg">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function LegislativePage({ onBackToTest }: { onBackToTest: () => void }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Equal Opportunity for All Investors Act of 2023
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding the proposed changes to accredited investor qualifications and their potential impact on private market access.
        </p>
      </div>

      {/* Key Changes Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center mb-12">Proposed Changes</h2>
        <div className="grid gap-6">
          <ChangeItem
            icon={<Users className="h-6 w-6 text-indigo-600" />}
            title="Expanded Access"
            description="The Act aims to broaden investment opportunities by allowing more individuals to qualify as accredited investors through various means beyond traditional income and net worth requirements."
          />
          <ChangeItem
            icon={<BookOpen className="h-6 w-6 text-indigo-600" />}
            title="Knowledge-Based Qualification"
            description="Introduces new pathways for qualification based on financial knowledge, experience, and professional certifications, emphasizing expertise over wealth."
          />
          <ChangeItem
            icon={<TrendingUp className="h-6 w-6 text-indigo-600" />}
            title="Investment Limits"
            description="Proposes modified investment limits for newly qualified investors to ensure appropriate risk management while expanding market participation."
          />
        </div>
      </div>

      {/* Impact Analysis */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Market Impact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center">
              <LineChart className="h-5 w-5 text-indigo-600 mr-2" />
              Private Markets
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Increased pool of eligible investors</li>
              <li>• Potential growth in private market participation</li>
              <li>• Enhanced capital formation opportunities</li>
              <li>• Greater diversity in investment portfolios</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center">
              <Building2 className="h-5 w-5 text-indigo-600 mr-2" />
              Industry Changes
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Modified compliance requirements</li>
              <li>• New investor verification methods</li>
              <li>• Updated disclosure obligations</li>
              <li>• Revised risk assessment procedures</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Timeline and Implementation */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Implementation Timeline</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-indigo-200"></div>
          <div className="space-y-12 relative">
            {/* Timeline items */}
            <div className="flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-sm w-full md:w-2/3 relative">
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Proposal Phase</h3>
                <p className="text-gray-600">Initial introduction and legislative review of the Act</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-sm w-full md:w-2/3 relative">
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Transition Period</h3>
                <p className="text-gray-600">Industry preparation and regulatory guidance development</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-sm w-full md:w-2/3 relative">
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                <p className="text-gray-600">Full adoption of new qualification criteria and requirements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600 text-white rounded-2xl p-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-lg opacity-90 mb-8">
            Take our accredited investor test to understand your current status and how these changes might affect you.
          </p>
          <button
            onClick={onBackToTest}
            className="inline-flex items-center px-6 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-indigo-600 transition duration-150"
          >
            Take the Test
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Mail className="h-12 w-12 text-indigo-600 mx-auto" />
          <h2 className="text-3xl font-bold text-gray-900">Stay Updated on HR 2797</h2>
          <p className="text-lg text-gray-600">
            Get the latest updates about the Equal Opportunity for All Investors Act and how it might affect your investment opportunities.
          </p>
          
          {isSubscribed ? (
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="text-lg">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-150 whitespace-nowrap"
              >
                Sign Up for Updates
              </button>
            </form>
          )}
          
          <p className="text-sm text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Additional Resources</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Scale className="h-6 w-6 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Current SEC Guidelines</h3>
            <p className="text-gray-600">Access the latest SEC regulations and guidelines for accredited investors.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <BookOpen className="h-6 w-6 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Educational Materials</h3>
            <p className="text-gray-600">Learn more about private market investing and qualification requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
}