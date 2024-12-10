import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Car, Calendar, Settings } from 'lucide-react';

const quoteSchema = z.object({
  make: z.string().min(1, 'Make is required'),
  model: z.string().min(1, 'Model is required'),
  year: z.string()
    .regex(/^\d{4}$/, 'Must be a valid year')
    .refine((val) => parseInt(val) >= 1900 && parseInt(val) <= new Date().getFullYear() + 1),
  trim: z.string().min(1, 'Trim is required'),
  options: z.array(z.string()).optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export const QuoteForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = (data: QuoteFormData) => {
    console.log(data);
    // TODO: Implement quote submission logic
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Submit Quote Request</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Make</label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Car className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('make')}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {errors.make && (
              <p className="mt-1 text-sm text-red-600">{errors.make.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Model</label>
            <div className="mt-1">
              <input
                {...register('model')}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {errors.model && (
              <p className="mt-1 text-sm text-red-600">{errors.model.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Year</label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('year')}
                type="number"
                min="1900"
                max={new Date().getFullYear() + 1}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {errors.year && (
              <p className="mt-1 text-sm text-red-600">{errors.year.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Trim</label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Settings className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('trim')}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {errors.trim && (
              <p className="mt-1 text-sm text-red-600">{errors.trim.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Quote Request ($40)
        </button>
      </form>
    </div>
  );
};