import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import type { QuoteRequest } from '../../types';

interface QuoteStatusProps {
  quote: QuoteRequest;
}

export const QuoteStatus: React.FC<QuoteStatusProps> = ({ quote }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-500';
      case 'active':
        return 'text-blue-500';
      case 'completed':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5" />;
      case 'active':
        return <AlertCircle className="h-5 w-5" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Quote #{quote.id}</h3>
        <div className={`flex items-center space-x-2 ${getStatusColor(quote.status)}`}>
          {getStatusIcon(quote.status)}
          <span className="capitalize">{quote.status}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Vehicle Details</p>
          <p className="font-medium">
            {quote.vehicle.year} {quote.vehicle.make} {quote.vehicle.model} {quote.vehicle.trim}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Submitted</p>
          <p className="font-medium">
            {new Date(quote.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Expires</p>
          <p className="font-medium">
            {new Date(quote.expiresAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};