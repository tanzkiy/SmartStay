import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, User, Home, Shield, FileText } from 'lucide-react';

const DataFlow = ({ currentStep = 1 }) => {
  const steps = [
    { id: 1, title: 'Landlord Input', description: 'Property details & documents', icon: Home },
    { id: 2, title: 'LGU Verification', description: 'Document review & approval', icon: Shield },
    { id: 3, title: 'Blockchain Record', description: 'Immutable verification', icon: FileText },
    { id: 4, title: 'Renter Access', description: 'Available for booking', icon: User }
  ];

  return (
    <div className="w-full py-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          //const isPending = currentStep < step.id;

          return (
            <React.Fragment key={step.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  isCompleted ? 'bg-green-500 border-green-500 text-white' :
                  isCurrent ? 'bg-mountain-green border-mountain-green text-white' :
                  'bg-gray-200 border-gray-300 text-gray-500'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <Icon className="h-6 w-6" />
                  )}
                </div>
                <div className="mt-3 text-center">
                  <h3 className={`text-sm font-medium ${
                    isCompleted || isCurrent ? 'text-gray-900 dark:text-white' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-xs mt-1 ${
                    isCompleted || isCurrent ? 'text-gray-600 dark:text-gray-300' : 'text-gray-400'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className={`flex-1 h-0.5 mx-4 ${
                    isCompleted ? 'bg-green-500' :
                    isCurrent ? 'bg-mountain-green' :
                    'bg-gray-300'
                  }`}
                  style={{ transformOrigin: 'left' }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default DataFlow;
