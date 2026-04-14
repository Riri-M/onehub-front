import type { Metadata } from 'next';
import { careers } from '@/content/en/careers';

export const metadata: Metadata = {
  title: careers.meta.title,
  description: careers.meta.description,
};

export default function CareersPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          {careers.heading}
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed">{careers.intro}</p>
        <p className="mt-6 text-slate-600">{careers.placeholder}</p>
      </div>
    </div>
  );
}
