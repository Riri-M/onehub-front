import {
  Business,
  CreateBusinessDTO,
  BusinessFilters,
  BusinessApiResponse,
} from '@/lib/types/business.types';
import { businessStore } from '@/lib/data/businesses';

class BusinessService {
  async getBusinesses(
    filters?: BusinessFilters
  ): Promise<BusinessApiResponse<Business[]>> {
    try {
      let businesses: Business[];

      if (filters?.searchQuery) {
        businesses = await businessStore.search(filters.searchQuery);
      } else if (filters?.category) {
        businesses = await businessStore.getByCategory(filters.category);
      } else {
        businesses = await businessStore.getAll();
      }

      return { success: true, data: businesses };
    } catch {
      return { success: false, data: [], message: 'Failed to fetch businesses' };
    }
  }

  async getBusinessById(
    id: string
  ): Promise<BusinessApiResponse<Business | null>> {
    try {
      const business = await businessStore.getById(id);

      if (!business) {
        return { success: false, data: null, message: 'Business not found' };
      }

      return { success: true, data: business };
    } catch {
      return { success: false, data: null, message: 'Failed to fetch business' };
    }
  }

  async createBusiness(
    data: CreateBusinessDTO
  ): Promise<BusinessApiResponse<Business>> {
    try {
      const validationError = this.validateBusinessData(data);
      if (validationError) {
        return { success: false, data: {} as Business, message: validationError };
      }

      const business = await businessStore.create(data);
      return {
        success: true,
        data: business,
        message: 'Business created successfully',
      };
    } catch {
      return {
        success: false,
        data: {} as Business,
        message: 'Failed to create business',
      };
    }
  }

  private validateBusinessData(data: CreateBusinessDTO): string | null {
    if (!data.name || data.name.trim().length < 2) {
      return 'Business name must be at least 2 characters';
    }
    if (!data.description || data.description.trim().length < 10) {
      return 'Description must be at least 10 characters';
    }
    if (!data.address || data.address.trim().length < 5) {
      return 'Address is required';
    }
    if (!data.phone || !this.isValidPhone(data.phone)) {
      return 'Valid phone number is required';
    }
    if (!data.email || !this.isValidEmail(data.email)) {
      return 'Valid email is required';
    }
    return null;
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  private isValidPhone(phone: string): boolean {
    return /^[\d\s\-\(\)\+]{10,}$/.test(phone);
  }
}

export const businessService = new BusinessService();
