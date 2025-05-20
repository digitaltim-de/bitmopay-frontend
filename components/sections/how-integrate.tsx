import React from 'react';

const steps = [
    {
        title: '1. Connect',
        text: 'API & Webhooks',
        icon: (
            <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h2" />
            </svg>
        ),
    },
    {
        title: '2. Accept',
        text: 'BTC, ETH, USDT',
        icon: (
            <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
            </svg>
        ),
    },
    {
        title: '3. Get Paid',
        text: 'Wallet or FIAT',
        icon: (
            <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5" />
            </svg>
        ),
    },
];

const HowIntegrate = () => {
    return (
        <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Start in 3 Steps</h2>
                <p className="text-gray-600">Simple. Fast. Crypto-ready in minutes.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
                    >
                        <div className="mb-4 flex justify-center">{step.icon}</div>
                        <h4 className="text-xl font-semibold text-gray-800">{step.title}</h4>
                        <p className="text-gray-500 text-sm">{step.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowIntegrate;
