import React, { useState } from 'react';
import { CheckCircle, Shield, Scale, Users, BadgeCheck } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  investmentInterest: string;
  estimatedInvestment: string;
  timeframe: string;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  investmentInterest: '',
  estimatedInvestment: '',
  timeframe: '',
};

export function GetAccreditedPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Let Netlify handle the form submission
    const form = e.target as HTMLFormElement;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form) as any).toString(),
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => alert('Error submitting form. Please try again.'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h2 className="text-3xl font-bold text-gray-900">Thank You for Your Interest!</h2>
        <p className="text-lg text-gray-600">
          Our team will review your information and contact you shortly to discuss your accredited investor journey.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Begin Your Accredited Investor Journey
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get personalized guidance on becoming an accredited investor and accessing exclusive investment opportunities.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <Shield className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
          <p className="text-gray-600">Receive personalized support from experienced professionals</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <Scale className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Compliance Support</h3>
          <p className="text-gray-600">Navigate SEC requirements with confidence</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <Users className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Network Access</h3>
          <p className="text-gray-600">Connect with like-minded investors and opportunities</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <BadgeCheck className="h-12 w-12 text-indigo-600" />
        </div>
        <form 
          name="accredited-investor-contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="accredited-investor-contact" />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="investmentInterest" className="block text-sm font-medium text-gray-700 mb-1">
              Primary Investment Interest
            </label>
            <select
              id="investmentInterest"
              name="investmentInterest"
              required
              value={formData.investmentInterest}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select an option</option>
              <option value="private-equity">Private Equity</option>
              <option value="venture-capital">Venture Capital</option>
              <option value="real-estate">Real Estate</option>
              <option value="hedge-funds">Hedge Funds</option>
              <option value="startups">Startup Investments</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="estimatedInvestment" className="block text-sm font-medium text-gray-700 mb-1">
                Estimated Investment Range
              </label>
              <select
                id="estimatedInvestment"
                name="estimatedInvestment"
                required
                value={formData.estimatedInvestment}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select range</option>
                <option value="25-50k">$25,000 - $50,000</option>
                <option value="50-100k">$50,000 - $100,000</option>
                <option value="100-250k">$100,000 - $250,000</option>
                <option value="250k+">$250,000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                Investment Timeframe
              </label>
              <select
                id="timeframe"
                name="timeframe"
                required
                value={formData.timeframe}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select timeframe</option>
                <option value="immediate">Immediate</option>
                <option value="3-months">Within 3 months</option>
                <option value="6-months">Within 6 months</option>
                <option value="12-months">Within 12 months</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-150"
          >
            Get Started
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Your information is secure and will never be shared with third parties.
        </p>
      </div>
    </div>
  );
}