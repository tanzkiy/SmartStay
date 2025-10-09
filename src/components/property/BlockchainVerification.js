import React from 'react';
import { Shield, CheckCircle, Clock, FileText } from 'lucide-react';

const BlockchainVerification = ({ blockchainData }) => {
  const { verified, hash, timestamp, verifiedBy, transactions } = blockchainData;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
      <div className="flex items-center mb-6">
        <Shield className="h-6 w-6 text-mountain-green mr-2" />
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Blockchain Verification</h2>
      </div>

      {verified ? (
        <>
          <div className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl mb-6">
            <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
            <div>
              <p className="font-medium text-green-700 dark:text-green-400">
                This property is verified by the City Government of Baguio
              </p>
              <p className="text-sm text-green-600 dark:text-green-500 mt-1">
                All information has been validated and recorded on the blockchain
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 dark:text-gray-400">Smart Contract Hash</span>
              <div className="flex items-center mt-1">
                <code className="bg-fog-gray-50 dark:bg-gray-700 px-3 py-1 rounded-lg text-gray-800 dark:text-gray-200 text-sm font-mono break-all">
                  {hash}
                </code>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-gray-500 dark:text-gray-400">Verification Date</span>
              <div className="flex items-center mt-1">
                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-800 dark:text-gray-200">
                  {new Date(timestamp).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-gray-500 dark:text-gray-400">Verified By</span>
              <div className="flex items-center mt-1">
                <FileText className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-800 dark:text-gray-200">{verifiedBy}</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Transaction History</h3>
              <div className="space-y-3">
                {transactions.map((transaction, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 dark:border-gray-700 rounded-xl p-3"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">{transaction.type}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {new Date(transaction.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <span className="text-xs bg-fog-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                        Block #{transaction.blockNumber}
                      </span>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Transaction Hash:</p>
                      <code className="text-xs bg-fog-gray-50 dark:bg-gray-700 px-2 py-1 rounded-lg text-gray-800 dark:text-gray-200 font-mono break-all">
                        {transaction.hash}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <p className="font-medium text-yellow-700 dark:text-yellow-400">
              This property is not yet verified
            </p>
            <p className="text-sm text-yellow-600 dark:text-yellow-500 mt-1">
              Verification is pending with the City Government of Baguio
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockchainVerification;