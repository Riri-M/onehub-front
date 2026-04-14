import { Business, BusinessCategory } from '@/lib/types/business.types';

interface BusinessCardProps {
  business: Business;
}

const categoryStyles: Record<BusinessCategory, string> = {
  Restaurant: 'bg-orange-500/20 text-orange-700 border-orange-500/30',
  Cafe: 'bg-amber-500/20 text-amber-700 border-amber-500/30',
  Retail: 'bg-[#540619]/20 text-[#540619] border-[#540619]/30',
  Services: 'bg-emerald-500/20 text-emerald-700 border-emerald-500/30',
  Technology: 'bg-[#540619]/20 text-[#540619] border-[#540619]/30',
  Healthcare: 'bg-rose-500/20 text-rose-700 border-rose-500/30',
  Education: 'bg-violet-500/20 text-violet-700 border-violet-500/30',
  Entertainment: 'bg-pink-500/20 text-pink-700 border-pink-500/30',
  Other: 'bg-slate-500/20 text-slate-700 border-slate-500/30',
};

export function BusinessCard({ business }: BusinessCardProps) {
  const categoryStyle = categoryStyles[business.category] ?? categoryStyles.Other;

  return (
    <article className="group relative glass rounded-xl overflow-hidden hover:bg-white transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md">
      <div className="absolute inset-0 rounded-xl bg-[#540619]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />

      <div className="p-3 relative">
        <header className="mb-2">
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-gradient transition-all duration-300">
              {business.name}
            </h2>
            <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold border ${categoryStyle} shrink-0`}>
              {business.category}
            </span>
          </div>
        </header>

        <p className="text-slate-600 text-xs mb-2 line-clamp-2 leading-snug">
          {business.description}
        </p>

        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-1.5 text-slate-600">
            <svg className="w-3 h-3 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span className="truncate">{business.address}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href={`tel:${business.phone}`} className="text-slate-600 hover:text-[#540619] transition-colors truncate">
              {business.phone}
            </a>
          </div>

          {business.website && (
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <a
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#540619] hover:text-[#6d0822] transition-colors truncate"
              >
                Website
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
