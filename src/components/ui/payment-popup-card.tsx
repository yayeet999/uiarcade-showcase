import React, { useState } from 'react';
import { CreditCard, Calendar, Lock, CheckCircle } from 'lucide-react';

export const PaymentPopupCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    
    if (value.length > 2) {
      setExpiryDate(`${value.substring(0, 2)}/${value.substring(2, 4)}`);
    } else {
      setExpiryDate(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 1500);
  };

  if (isComplete) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm text-center">
        <div className="mb-4">
          <CheckCircle size={48} className="mx-auto text-green-500" />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-4">Your order has been processed.</p>
        <div className="bg-gray-50 rounded p-4 mb-6 text-left">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Total Paid</span>
            <span className="font-medium">$89.99</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Card</span>
            <span className="font-medium">•••• {cardNumber.slice(-4) || '0000'}</span>
          </div>
        </div>
        <button 
          className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
          onClick={() => {
            setIsComplete(false);
            setCardNumber('');
            setExpiryDate('');
            setCvv('');
          }}
        >
          Back to Checkout
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md w-full max-w-sm overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 p-6">
        <h2 className="text-white text-xl font-bold">Checkout</h2>
        <div className="mt-4 flex justify-between">
          <span className="text-blue-100">Total</span>
          <span className="text-white text-xl font-bold">$89.99</span>
        </div>
      </div>
      
      {/* Payment Form */}
      <form onSubmit={handleSubmit} className="p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Card Information</label>
          <div className="mb-2">
            <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <div className="bg-gray-50 p-2">
                <CreditCard size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Card number"
                className="w-full py-2 px-3 focus:outline-none"
                maxLength={19}
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                <div className="bg-gray-50 p-2">
                  <Calendar size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full py-2 px-3 focus:outline-none"
                  maxLength={5}
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                />
              </div>
            </div>
            
            <div>
              <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                <div className="bg-gray-50 p-2">
                  <Lock size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full py-2 px-3 focus:outline-none"
                  maxLength={4}
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">Name on Card</label>
          <input
            type="text"
            placeholder="John Smith"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className={`w-full py-3 text-white font-medium rounded-md transition ${
            isProcessing 
              ? 'bg-blue-400 cursor-wait' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Pay Now'
          )}
        </button>
        
        <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
          <Lock size={14} className="mr-1" />
          Secure payment
        </div>
      </form>
    </div>
  );
}; 