import React, { useState, useEffect } from 'react';
import { CheckCircle, Lock, Wifi } from 'lucide-react';

export const CreditCardPayment = () => {
  // Card data state
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  
  // UI state
  const [focusedField, setFocusedField] = useState(null);
  const [cardBrand, setCardBrand] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  // Determine card brand based on number
  useEffect(() => {
    if (cardNumber) {
      if (cardNumber.startsWith('4')) {
        setCardBrand('visa');
      } else if (/^5[1-5]/.test(cardNumber)) {
        setCardBrand('mastercard');
      } else if (/^3[47]/.test(cardNumber)) {
        setCardBrand('amex');
      } else if (/^6(?:011|5)/.test(cardNumber)) {
        setCardBrand('discover');
      } else {
        setCardBrand('');
      }
    } else {
      setCardBrand('');
    }
  }, [cardNumber]);
  
  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    if (!value) return '';
    
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format based on card type
    if (/^3[47]/.test(digits)) {
      // AMEX format: XXXX XXXXXX XXXXX
      return digits.replace(/(\d{4})(\d{6})(\d{0,5})/, (match, p1, p2, p3) => {
        return [p1, p2, p3].filter(Boolean).join(' ');
      });
    } else {
      // Regular format: XXXX XXXX XXXX XXXX
      return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    }
  };
  
  // Format expiry date (MM/YY)
  const formatExpiryDate = (value: string) => {
    if (!value) return '';
    
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    if (digits.length <= 2) {
      return digits;
    } else {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
    }
  };
  
  // Handle card number input
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatCardNumber(value);
    setCardNumber(formattedValue);
  };
  
  // Handle card holder input
  const handleHolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setCardHolder(value);
  };
  
  // Handle expiry date input
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatExpiryDate(value);
    setExpiryDate(formattedValue);
  };
  
  // Handle CVV input
  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCvv(value);
  };
  
  // Check if all fields are filled and valid
  const isFormComplete = () => {
    const hasCardNumber = cardNumber.replace(/\D/g, '').length >= 15;
    const hasCardHolder = cardHolder.trim().length >= 3;
    const hasValidExpiry = expiryDate.length === 5;
    const hasCvv = cvv.length >= 3;
    
    return hasCardNumber && hasCardHolder && hasValidExpiry && hasCvv;
  };
  
  // Handle form submission
  const handleSubmit = () => {
    if (isFormComplete()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsComplete(true);
      }, 1500);
    }
  };
  
  // Reset form
  const resetForm = () => {
    setCardNumber('');
    setCardHolder('');
    setExpiryDate('');
    setCvv('');
    setFocusedField(null);
    setCardBrand('');
    setIsComplete(false);
    setIsSubmitting(false);
  };
  
  // Get card background based on brand
  const getCardBackground = () => {
    switch (cardBrand) {
      case 'visa':
        return 'from-blue-700 to-blue-400';
      case 'mastercard':
        return 'from-orange-600 to-red-500';
      case 'amex':
        return 'from-cyan-600 to-cyan-400';
      case 'discover':
        return 'from-orange-500 to-yellow-500';
      default:
        return 'from-gray-800 to-gray-600';
    }
  };
  
  // Card brand logo
  const CardLogo = () => {
    switch (cardBrand) {
      case 'visa':
        return <div className="text-white font-serif italic font-bold text-2xl">VISA</div>;
      case 'mastercard':
        return (
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-500 opacity-90 -mr-3"></div>
            <div className="w-8 h-8 rounded-full bg-yellow-400 opacity-90"></div>
          </div>
        );
      case 'amex':
        return <div className="text-white font-serif font-bold">American Express</div>;
      case 'discover':
        return <div className="text-white font-serif font-bold">Discover</div>;
      default:
        return <Wifi className="text-white opacity-70" />;
    }
  };
  
  // Is the form ready to submit?
  const canSubmit = isFormComplete() && !isSubmitting;
  
  // Main component render
  return (
    <div className="w-full max-w-md mx-auto p-6">
      {isComplete ? (
        <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-success-bounce">
            <CheckCircle size={32} className="text-green-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Card Saved</h2>
          <p className="text-gray-600 mb-6 text-center">Your card has been securely saved for future payments.</p>
          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Add Another Card
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {/* Interactive card */}
          <div className="relative w-full max-w-sm mb-12">
            <div className={`
              relative w-full h-56 rounded-2xl shadow-xl transition-all duration-300
              bg-gradient-to-br ${getCardBackground()}
            `}>
              {/* Card background effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full">
                  <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-white opacity-10"></div>
                  <div className="absolute right-10 bottom-0 w-24 h-24 rounded-full bg-white opacity-10"></div>
                  <div className="absolute -left-10 top-32 w-40 h-40 rounded-full bg-white opacity-5"></div>
                </div>
              </div>
              
              {/* Card content */}
              <div className="relative flex flex-col h-full z-10 p-6">
                {/* Card chip and logo */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-10 bg-yellow-500 bg-opacity-90 rounded-md flex items-center justify-center overflow-hidden">
                    <div className="w-full h-4 border-t border-b border-black border-opacity-30"></div>
                  </div>
                  <div>
                    <CardLogo />
                  </div>
                </div>
                
                {/* Card number field */}
                <div className={`
                  relative mb-5 transition-all duration-200
                  ${focusedField === 'cardNumber' ? 'scale-102' : ''}
                `}>
                  <label className="text-white text-opacity-70 text-xs mb-1 block">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={handleNumberChange}
                    onFocus={() => setFocusedField('cardNumber')}
                    onBlur={() => setFocusedField(null)}
                    maxLength={19}
                    placeholder="•••• •••• •••• ••••"
                    className={`
                      w-full bg-transparent border-none outline-none text-white text-xl tracking-wider font-medium
                      placeholder-white placeholder-opacity-50 transition-all duration-300
                      ${focusedField === 'cardNumber' ? 'ring-2 ring-white ring-opacity-30 px-2 py-1 -mx-2 rounded' : ''}
                    `}
                  />
                </div>
                
                {/* Bottom row - card holder, expiry, and CVV */}
                <div className="mt-auto flex justify-between items-end">
                  {/* Card holder field */}
                  <div className={`
                    relative transition-all duration-200 mr-4
                    ${focusedField === 'cardHolder' ? 'scale-102' : ''}
                  `}>
                    <label className="text-white text-opacity-70 text-xs mb-1 block">Card Holder</label>
                    <input
                      type="text"
                      value={cardHolder}
                      onChange={handleHolderChange}
                      onFocus={() => setFocusedField('cardHolder')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="YOUR NAME"
                      className={`
                        w-full bg-transparent border-none outline-none text-white tracking-wide font-medium
                        placeholder-white placeholder-opacity-50 transition-all duration-300
                        ${focusedField === 'cardHolder' ? 'ring-2 ring-white ring-opacity-30 px-2 py-1 -mx-2 rounded' : ''}
                      `}
                    />
                  </div>
                  
                  <div className="flex space-x-3">
                    {/* Expiry date field */}
                    <div className={`
                      relative transition-all duration-200
                      ${focusedField === 'expiryDate' ? 'scale-102' : ''}
                    `}>
                      <label className="text-white text-opacity-70 text-xs mb-1 block">Expires</label>
                      <input
                        type="text"
                        value={expiryDate}
                        onChange={handleExpiryChange}
                        onFocus={() => setFocusedField('expiryDate')}
                        onBlur={() => setFocusedField(null)}
                        maxLength={5}
                        placeholder="MM/YY"
                        className={`
                          w-full bg-transparent border-none outline-none text-white tracking-wide font-medium
                          placeholder-white placeholder-opacity-50 transition-all duration-300
                          ${focusedField === 'expiryDate' ? 'ring-2 ring-white ring-opacity-30 px-2 py-1 -mx-2 rounded' : ''}
                        `}
                      />
                    </div>
                    
                    {/* CVV field */}
                    <div className={`
                      relative transition-all duration-200
                      ${focusedField === 'cvv' ? 'scale-102' : ''}
                    `}>
                      <label className="text-white text-opacity-70 text-xs mb-1 block">CVV</label>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          value={cvv}
                          onChange={handleCvvChange}
                          onFocus={() => setFocusedField('cvv')}
                          onBlur={() => setFocusedField(null)}
                          maxLength={4}
                          placeholder="•••"
                          className={`
                            w-12 bg-transparent border-none outline-none text-white tracking-wide font-medium text-center
                            placeholder-white placeholder-opacity-50 transition-all duration-300
                            ${focusedField === 'cvv' ? 'ring-2 ring-white ring-opacity-30 px-2 py-1 rounded' : ''}
                          `}
                        />
                        {focusedField !== 'cvv' && (
                          <Lock size={12} className="text-white text-opacity-70 ml-1" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card instruction tooltip */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-3 py-1.5 rounded-lg text-xs opacity-70 whitespace-nowrap">
              Click on any field to edit
            </div>
          </div>
          
          {/* Submit button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`
              w-full max-w-sm h-14 rounded-xl font-medium transition-all duration-300 ease-out shadow-md
              ${canSubmit
                ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
            `}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                <span>Processing...</span>
              </div>
            ) : (
              'Save Card'
            )}
          </button>
        </div>
      )}
      
      {/* CSS animations */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        
        @keyframes successBounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }
        
        .animate-success-bounce {
          animation: successBounce 1s ease-out;
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
        `}
      </style>
    </div>
  );
}; 