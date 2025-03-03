import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

export const DeleteAccountCard: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleDelete = () => {
    setIsDeleting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsDeleting(false);
      setIsSuccess(true);
      
      // Reset after showing success
      setTimeout(() => {
        setIsSuccess(false);
        setIsConfirming(false);
      }, 2000);
    }, 1500);
  };
  
  return (
    <div 
      className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ${
        isConfirming ? 'bg-red-50 w-80' : 'bg-white w-72'
      } ${isSuccess ? 'bg-green-50' : ''}`}
      style={{
        maxWidth: isConfirming ? '320px' : '288px',
        transform: isHovering && !isConfirming ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovering && !isConfirming 
          ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      {!isConfirming ? (
        <div 
          className="p-6 cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => setIsConfirming(true)}
        >
          <div className="flex items-center mb-4">
            <div className={`p-3 rounded-full mr-4 transition-colors duration-300 ${
              isHovering ? 'bg-red-100' : 'bg-gray-100'
            }`}>
              <Trash2 
                className={`transition-colors duration-300 ${
                  isHovering ? 'text-red-500' : 'text-gray-500'
                }`} 
                size={24} 
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Delete Account</h3>
              <p className="text-sm text-gray-500">Remove all your data</p>
            </div>
          </div>
          <div className={`h-1 w-0 bg-red-500 rounded-full transition-all duration-300 ${
            isHovering ? 'w-full' : 'w-0'
          }`} />
        </div>
      ) : (
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="mx-auto p-3 rounded-full bg-red-100 inline-block mb-3">
              <Trash2 
                className={`${isSuccess ? 'text-green-500' : 'text-red-500'}`}
                size={28} 
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">
              {isSuccess ? 'Account Deleted' : 'Delete Account?'}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {isSuccess 
                ? 'Your account has been successfully deleted.' 
                : 'This action cannot be undone. All your data will be permanently removed.'}
            </p>
          </div>
          
          {!isSuccess && (
            <div className="flex space-x-3">
              <button
                className="flex-1 py-2 px-4 rounded-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                onClick={() => setIsConfirming(false)}
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-lg font-medium text-white transition-all duration-300 ${
                  isDeleting ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
                }`}
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    <span>Deleting...</span>
                  </div>
                ) : 'Confirm'}
              </button>
            </div>
          )}
          
          {isSuccess && (
            <div className="w-full bg-green-500 h-1 mt-4">
              <div 
                className="h-full bg-green-300 animate-pulse"
                style={{
                  width: '100%',
                  animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DeleteAccountCard; 