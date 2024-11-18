import React, { useState } from 'react';
import { ArrowRight, Shield, DollarSign, Scale, Mail, CheckCircle } from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="bg-indigo-100 p-3 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function LandingPage({ onStartTest }: { onStartTest: () => void }) {
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
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Discover Your Investor Status
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Take our comprehensive assessment to determine if you qualify as an accredited investor under current SEC regulations.
        </p>
        <button
          onClick={onStartTest}
          className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
        >
          Start Free Assessment
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-12">
        <Feature
          icon={<Shield className="h-8 w-8 text-indigo-600" />}
          title="SEC Compliant"
          description="Our test is based on current SEC regulations and requirements for accredited investor status"
        />
        <Feature
          icon={<DollarSign className="h-8 w-8 text-indigo-600" />}
          title="Investment Ready"
          description="Understand if you're eligible to participate in private investment opportunities"
        />
        <Feature
          icon={<Scale className="h-8 w-8 text-indigo-600" />}
          title="Legal Framework"
          description="Stay informed about current regulations and potential upcoming changes"
        />
      </div>

      {/* Legislative Update */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Preparing for Change</h2>
          <p className="text-lg opacity-90 mb-6">
            The Equal Opportunity for All Investors Act of 2023 may bring significant changes to accredited investor qualifications. Stay ahead by understanding your current status.
          </p>
          <button
            onClick={onStartTest}
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
          <h2 className="text-3xl font-bold text-gray-900">Stay Updated</h2>
          <p className="text-lg text-gray-600">
            Get notified about changes to the Equal Opportunity for All Investors Act and how they might affect your investor status.
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

      {/* FAQ Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">What is an accredited investor?</h3>
            <p className="text-gray-600">An accredited investor is an individual or entity that meets specific SEC criteria regarding income, net worth, or professional qualifications.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Why does it matter?</h3>
            <p className="text-gray-600">Accredited investor status allows participation in private investment opportunities not available to the general public.</p>
          </div>
        </div>
      </div>
    </div>
  );
}