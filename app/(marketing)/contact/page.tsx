import type { Metadata } from 'next';
import { contact } from '@/content/en/contact';

export const metadata: Metadata = {
  title: contact.meta.title,
  description: contact.meta.description,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          {contact.heading}
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed">{contact.intro}</p>
        <p className="mt-6 text-slate-600">{contact.placeholder}</p>
      </div>
    </div>
  );
}
