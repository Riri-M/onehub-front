'use client';

import { usePathname } from 'next/navigation';
import { Nav } from './Nav';

/**
 * Wraps Nav with a key from the current pathname so the nav remounts on route change.
 * This ensures the active state updates when navigating (e.g. clicking the onehub logo to go home).
 */
export function NavWrapper() {
  const pathname = usePathname();
  return <Nav key={pathname ?? ''} />;
}
