import type { Metadata } from 'next';
import { events } from '@/content/en/events';

export const metadata: Metadata = {
  title: events.meta.title,
  description: events.meta.description,
};

export default function EventsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          {events.heading}
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed">{events.intro}</p>
        <p className="mt-6 text-slate-600">{events.placeholder}</p>
      </div>
    </div>
  );
}
