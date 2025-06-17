import React from 'react';

const ReadyToStart = () => {
    return (
        <>
            {/* CTA Section */}
            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h4>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Join thousands of businesses already using Bitmopay for their cryptocurrency payment needs
                </p>
                <button
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300 inline-flex items-center">
                    Start accepting crypto payments
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                </button>
            </div>
        </>
    );
};

export default ReadyToStart;
