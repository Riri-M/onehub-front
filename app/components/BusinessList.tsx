import { Business } from '@/lib/types/business.types';
import { businessList } from '@/content/en/business-list';
import { BusinessCard } from './BusinessCard';

interface BusinessListProps {
  businesses: Business[];
  searchTerm?: string;
}

export function BusinessList({ businesses, searchTerm = '' }: BusinessListProps) {
  if (businesses.length === 0) {
    return (
      <div className="glass rounded-3xl p-16 text-center">
        <div className="w-20 h-20 bg-[#540619]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          {searchTerm ? businessList.empty.withSearch : businessList.empty.withoutSearch}
        </h3>
        <p className="text-slate-600 max-w-md mx-auto mb-6">
          {searchTerm ? businessList.empty.bodyWithSearch : businessList.empty.bodyWithoutSearch}
        </p>
        <a
          href="/add"
          className="inline-flex items-center gap-2 bg-[#540619] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#6d0822] hover:scale-105"
        >
          {businessList.empty.cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
}
