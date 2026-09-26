/** All 250 answers from Doc 6 (FAQ Answers), parsed into faq.json. */
import all from './faq.json';

export type Faq = { n: number; category: string; q: string; a: string };

/**
 * Answers that touch a never-publish item (C§10, S§12) stay off the site:
 * 21 neighbor discount, 204 Club enrollment discount, 246–247 University of
 * Arizona. faq(n) throws for these so no page can pull one in by accident.
 */
const withheld = new Set([21, 204, 246, 247]);

export const faqs = (all as Faq[]).filter((f) => !withheld.has(f.n));
const byN = new Map(faqs.map((f) => [f.n, f]));
export const faq = (n: number) => {
  const f = byN.get(n);
  if (!f) throw new Error(`[faq] #${n} is withheld or missing`);
  return f;
};
export const faqList = (ns: number[]) => ns.map(faq);
export const faqCategories = [...new Set(faqs.map((f) => f.category))];
