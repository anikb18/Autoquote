export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'dealer';
}

export interface Vehicle {
  make: string;
  model: string;
  year: number;
  trim: string;
  options: string[];
}

export interface QuoteRequest {
  id: string;
  userId: string;
  vehicle: Vehicle;
  status: 'pending' | 'active' | 'completed';
  createdAt: string;
  expiresAt: string;
}