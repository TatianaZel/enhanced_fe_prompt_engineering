import React from 'react';

type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

export default function PricingCard({
                                      plan,
                                      price,
                                      features,
                                      isFeatured = false,
                                    }: PricingCardProps) {
  return (
      <div
          tabIndex={0}
          className={`flex flex-col items-center rounded-xl border p-6 text-center transition-all focus:outline-none focus:ring-4 focus:ring-blue-500 ${
              isFeatured
                  ? 'bg-blue-800 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-900 shadow-sm hover:shadow-md'
          }`}
      >
        <h2 className="text-lg font-semibold mb-2">{plan}</h2>
        <p className="text-4xl font-extrabold mb-4">{price}</p>
        <div className="w-full border-t border-gray-300 mb-4" />
        <ul className="space-y-2 text-sm mb-6">
          {features.map((feature, index) => (
              <li key={index}>{feature}</li>
          ))}
        </ul>
        <button
            className={`mt-auto py-2 px-4 rounded font-semibold uppercase tracking-wide transition-colors ${
                isFeatured
                    ? 'bg-white text-blue-800 hover:bg-gray-200'
                    : 'bg-blue-800 text-white hover:bg-blue-700'
            }`}
        >
          Subscribe
        </button>
      </div>
  );
}