/**
 * One page per FAQ question carries its schema (plan column faq_schema_owner_of).
 * Google's FAQ guidance: mark a repeated question up once site-wide. Other pages
 * can still show the question and answer; they just leave it out of their markup
 * and link to the owner page.
 */
import { plan } from '@/data/plan';
import type { Faq } from '@/data/faq';
import { guideByUrl } from '@/data/guides';
import { landings } from '@/data/landing';

const owner = new Map<number, string>();
for (const row of plan) {
  for (const m of (row.faq_schema_owner_of ?? '').matchAll(/F(\d+)/g)) owner.set(Number(m[1]), row.url);
}
const rowByUrl = new Map(plan.map((r) => [r.url, r]));

/** Families built from fixed data; guide and landing pages count once their content exists. */
const builtFamilies = new Set(['foundation', 'service', 'location', 'community', 'hoa', 'service-x-location']);
const landingUrls = new Set(landings.map((l) => l.url));
const isBuilt = (url: string, family: string) => builtFamilies.has(family) || guideByUrl.has(url) || landingUrls.has(url);

export const faqOwner = (n: number) => owner.get(n);
export const ownsFaq = (n: number, url: string) => owner.get(n) === url;

/** "Read more" links from a shown question to the page that owns it. */
export function ownerLinks(items: Faq[], url: string) {
  const out: Record<number, { href: string; label: string }> = {};
  for (const f of items) {
    const href = owner.get(f.n);
    const row = href ? rowByUrl.get(href) : undefined;
    if (!href || href === url || !row || !isBuilt(href, row.family)) continue;
    out[f.n] = { href, label: `More on this: ${row.h1.replace(/\?$/, '')}` };
  }
  return out;
}
