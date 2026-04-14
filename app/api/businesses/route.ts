import { NextRequest, NextResponse } from 'next/server';
import { businessService } from '@/lib/services/business.service';
import { BusinessFilters, BusinessCategory, BUSINESS_CATEGORIES } from '@/lib/types/business.types';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);

  const categoryParam = searchParams.get('category');
  const category: BusinessCategory | undefined =
    categoryParam && BUSINESS_CATEGORIES.includes(categoryParam as BusinessCategory)
      ? (categoryParam as BusinessCategory)
      : undefined;

  const filters: BusinessFilters = {
    category,
    searchQuery: searchParams.get('search') ?? undefined,
  };

  const response = await businessService.getBusinesses(filters);

  if (!response.success) {
    return NextResponse.json(response, { status: 500 });
  }

  return NextResponse.json(response);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const response = await businessService.createBusiness(body);

    if (!response.success) {
      return NextResponse.json(response, { status: 400 });
    }

    return NextResponse.json(response, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, data: null, message: 'Invalid request body' },
      { status: 400 }
    );
  }
}
