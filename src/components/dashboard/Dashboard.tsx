import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { QuoteStatus } from './QuoteStatus';

export const Dashboard = () => {
  const { quotes } = useSelector((state: RootState) => state.quotes);
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Welcome back, {user?.name}</h1>
        <p className="text-gray-600">Manage your quote requests and track their status</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote) => (
          <QuoteStatus key={quote.id} quote={quote} />
        ))}
        {quotes.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No quote requests yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};