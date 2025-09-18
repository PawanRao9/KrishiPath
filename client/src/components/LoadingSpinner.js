import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
                <span className="text-gray-600">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingSpinner;