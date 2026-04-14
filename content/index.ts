/**
 * Content system for One Hub.
 *
 * All hardcoded UI strings live under content/<locale>/.
 * To add a new locale, duplicate the `en/` folder, translate each file,
 * add the locale key to the `Locale` union, and register it in `locales`.
 *
 * Usage:
 *   import { content } from '@/content';
 *   // or import individual sections:
 *   import { home } from '@/content/en/home';
 */

import * as en from './en';

export type Locale = 'en';

export const defaultLocale: Locale = 'en';

const locales = { en } as const;

export function getContent(locale: Locale = defaultLocale) {
  return locales[locale];
}

/** Convenience re-export of the default (English) content. */
export const content = en;

export type Content = typeof en;
