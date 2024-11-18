import React, { useState } from 'react';
import { DollarSign, BadgeCheck, ChevronRight, RefreshCcw, Mail, CheckCircle, ExternalLink } from 'lucide-react';

type Question = {
  id: number;
  text: string;
  info: string;
};

const questions: Question[] = [
  {
    id: 1,
    text: "Do you have an individual income exceeding $200,000 in each of the two most recent years?",
    info: "Or joint income with spouse exceeding $300,000 in those years with reasonable expectation of same in current year."
  },
  {
    id: 2,
    text: "Do you have a net worth exceeding $1 million (individually or jointly with spouse), excluding primary residence?",
    info: "This includes assets like investments, property (excluding primary residence), and cash, minus liabilities."
  },
  {
    id: 3,
    text: "Do you hold any professional certifications, designations, or credentials recognized by the SEC?",
    info: "Such as Series 7, Series 65, Series 82 licenses, or certain professional designations."
  },
  {
    id: 4,
    text: "Are you a 'knowledgeable employee' of a private fund?",
    info: "This includes executives, directors, trustees, general partners, or employees who participate in investment activities."
  }
];

type InvestorTestProps = {
  onGetAccredited: () => void;
};

export function InvestorTest({ onGetAccredited }: InvestorTestProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleAnswer = (answer: boolean) => {
    setAnswers(prev => ({ ...prev, [questions[currentStep].id]: answer }));
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const resetTest = () => {
    setCurrentStep(0);
    setAnswers({});
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const allQuestionsAnswered = Object.keys(answers).length === questions.length;
  const isAccredited = Object.values(answers).some(answer => answer);

  if (!allQuestionsAnswered) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Question {currentStep + 1} of {questions.length}
            </h2>
            <p className="text-lg text-gray-700">{questions[currentStep].text}</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">{questions[currentStep].info}</p>
            </div>
          </div>

          {/* Answer Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <button
              onClick={() => handleAnswer(true)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-150"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-150"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center">
          {isAccredited ? (
            <>
              <BadgeCheck className="mx-auto h-16 w-16 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">You May Qualify as an Accredited Investor</h2>
              <p className="text-gray-600 mb-6">
                Based on your responses, you may meet the SEC's current criteria for accredited investor status. However, this is not legal advice. Please consult with a qualified financial advisor or legal professional for official determination.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={resetTest}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
                >
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Take Test Again
                </button>
                <button
                  onClick={onGetAccredited}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Get Accredited
                </button>
              </div>
            </>
          ) : (
            <>
              <DollarSign className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">You May Not Currently Qualify</h2>
              <p className="text-gray-600 mb-6">
                Based on your responses, you may not meet the current SEC criteria for accredited investor status. However, upcoming legislative changes could affect these requirements.
              </p>
              <button
                onClick={resetTest}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
              >
                <RefreshCcw className="mr-2 h-4 w-4" />
                Take Test Again
              </button>
            </>
          )}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Mail className="h-12 w-12 text-indigo-600 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-900">Stay Informed About Your Status</h2>
          <p className="text-gray-600">
            Get updates about the Equal Opportunity for All Investors Act and how changes might affect your accredited investor status.
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
    </div>
  );
}