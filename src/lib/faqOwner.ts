/**
 * One page per FAQ question carries its schema (plan column faq_schema_owner_of).
 * Google's FAQ guidance: mark a repeated question up once site-wide. Other pages
 * can still show the question and answer; they just leave it out of their markup
 * and link to the owner page.
 */
import { plan } from '@/data/plan';
import type { Faq } from '@/data/faq';

const owner = new Map<number, string>();
for (const row of plan) {
  for (const m of (row.faq_schema_owner_of ?? '').matchAll(/F(\d+)/g)) owner.set(Number(m[1]), row.url);
}
const rowByUrl = new Map(plan.map((r) => [r.url, r]));

/** Plan families that have pages in the build. Add a family here when its route ships. */
export const builtFamilies = new Set(['foundation', 'service', 'location', 'community', 'hoa', 'service-x-location', 'guide', 'answer']);

export const faqOwner = (n: number) => owner.get(n);
export const ownsFaq = (n: number, url: string) => owner.get(n) === url;

/** "Read more" links from a shown question to the page that owns it. */
export function ownerLinks(items: Faq[], url: string) {
  const out: Record<number, { href: string; label: string }> = {};
  for (const f of items) {
    const href = owner.get(f.n);
    const row = href ? rowByUrl.get(href) : undefined;
    if (!href || href === url || !row || !builtFamilies.has(row.family)) continue;
    out[f.n] = { href, label: `More on this: ${row.h1.replace(/\?$/, '')}` };
  }
  return out;
}
