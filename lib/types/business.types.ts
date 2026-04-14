export interface Business {
  id: string;
  name: string;
  description: string;
  category: BusinessCategory;
  address: string;
  phone: string;
  email: string;
  website?: string;
  createdAt: Date;
}

export type BusinessCategory =
  | 'Restaurant'
  | 'Cafe'
  | 'Retail'
  | 'Services'
  | 'Technology'
  | 'Healthcare'
  | 'Education'
  | 'Entertainment'
  | 'Other';

export const BUSINESS_CATEGORIES: BusinessCategory[] = [
  'Restaurant',
  'Cafe',
  'Retail',
  'Services',
  'Technology',
  'Healthcare',
  'Education',
  'Entertainment',
  'Other',
];

export interface CreateBusinessDTO {
  name: string;
  description: string;
  category: BusinessCategory;
  address: string;
  phone: string;
  email: string;
  website?: string;
}

export interface BusinessApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface BusinessFilters {
  category?: BusinessCategory;
  searchQuery?: string;
}
