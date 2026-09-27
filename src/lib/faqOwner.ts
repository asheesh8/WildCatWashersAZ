/**
 * One page per FAQ question carries its schema (plan column faq_schema_owner_of).
 * Google's FAQ guidance: mark a repeated question up once site-wide. Other pages
 * can still show the question and answer; they just leave it out of their markup.
 */
import { plan } from '@/data/plan';

const owner = new Map<number, string>();
for (const row of plan as (typeof plan[number] & { faq_schema_owner_of?: string })[]) {
  for (const m of (row.faq_schema_owner_of ?? '').matchAll(/F(\d+)/g)) owner.set(Number(m[1]), row.url);
}

export const faqOwner = (n: number) => owner.get(n);
export const ownsFaq = (n: number, url: string) => owner.get(n) === url;
