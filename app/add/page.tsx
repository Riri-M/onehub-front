'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreateBusinessDTO, BUSINESS_CATEGORIES } from '@/lib/types/business.types';
import { add } from '@/content/en/add';
import { common } from '@/content/en/common';

export default function AddBusinessPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState<CreateBusinessDTO>({
    name: '',
    description: '',
    category: 'Other',
    address: '',
    phone: '',
    email: '',
    website: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/businesses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to create business');
      }

      setSuccess(true);
      setTimeout(() => {
        router.push('/');
        router.refresh();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass rounded-3xl p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{add.success.heading}</h2>
          <p className="text-slate-600 mb-2">{add.success.body}</p>
          <p className="text-slate-500 text-sm">{add.success.redirecting}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {add.heading} <span className="text-gradient">{add.headingHighlight}</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">{add.subheading}</p>
        </div>

        {error && (
          <div className="mb-6 glass rounded-xl p-4 border border-red-500/30">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-2">
                {add.form.fields.name.label}{' '}
                <span className="text-[#540619]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                minLength={2}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#540619]/50 transition-all"
                placeholder={add.form.fields.name.placeholder}
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-slate-600 mb-2">
                {add.form.fields.category.label}{' '}
                <span className="text-[#540619]">*</span>
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#540619]/50 transition-all appearance-none cursor-pointer"
              >
                {BUSINESS_CATEGORIES.map((category) => (
                  <option key={category} value={category} className="bg-white text-slate-900">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-600 mb-2">
                {add.form.fields.phone.label}{' '}
                <span className="text-[#540619]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#540619]/50 transition-all"
                placeholder={add.form.fields.phone.placeholder}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-slate-600 mb-2">
                {add.form.fields.description.label}{' '}
                <span className="text-[#540619]">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                required
                minLength={10}
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#540619]/50 transition-all resize-none"
                placeholder={add.form.fields.description.placeholder}
              />
              <p className="text-xs text-slate-500 mt-1">
                {add.form.fields.description.hint}
              </p>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-slate-600 mb-2">
                {add.form.fields.address.label}{' '}
                <span className="text-[#540619]">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                minLength={5}
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#540619]/50 transition-all"
                placeholder={add.form.fields.address.placeholder}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-2">
                {add.form.fields.email.label}{' '}
                <span className="text-[#540619]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#540619]/50 transition-all"
                placeholder={add.form.fields.email.placeholder}
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-slate-600 mb-2">
                {add.form.fields.website.label}{' '}
                <span className="text-slate-500">({common.optional})</span>
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#540619]/50 transition-all"
                placeholder={add.form.fields.website.placeholder}
              />
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#540619] text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#6d0822] hover:scale-[1.02] hover:shadow-xl hover:shadow-[#540619]/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {add.form.submitting}
                </span>
              ) : (
                add.form.submit
              )}
            </button>
          </div>

          <p className="text-center text-slate-500 text-sm pt-4">
            {add.form.disclaimer}
          </p>
        </form>
      </div>
    </div>
  );
}
