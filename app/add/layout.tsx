import type { Metadata } from 'next';
import { add } from '@/content/en/add';

export const metadata: Metadata = {
  title: add.meta.title,
  description: add.meta.description,
};

export default function AddLayout({ children }: { children: React.ReactNode }) {
  return children;
}
