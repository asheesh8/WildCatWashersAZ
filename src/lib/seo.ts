/** Keep titles and descriptions inside what search results show without cutting. */
const BRAND = ' | Wildcat Washers';
export const TITLE_MAX = 60;
export const DESC_MAX = 155;

/** First candidate that fits with the brand; otherwise the shortest candidate without it. */
export function fitTitle(candidates: string[]): string {
  for (const c of candidates) if ((c + BRAND).length <= TITLE_MAX) return c + BRAND;
  const shortest = [...candidates].sort((a, b) => a.length - b.length)[0];
  return shortest.length <= TITLE_MAX ? shortest : shortest.slice(0, TITLE_MAX - 1).replace(/\s+\S*$/, '') + '…';
}

/** Whole sentences up to the limit; never a sentence cut in half. */
export function fitDescription(raw: string): string {
  /* Joined template strings can leave doubled spaces ("Oro Valley.  Including"). */
  const text = raw.replace(/\s+/g, ' ').trim();
  if (text.length <= DESC_MAX) return text;
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];
  let out = '';
  for (const s of sentences) {
    const next = (out + s.trim()).trim();
    if (next.length > DESC_MAX) break;
    out = next + ' ';
  }
  out = out.trim();
  if (out.length >= 90) return out;
  return text.slice(0, DESC_MAX - 1).replace(/[\s,;:]+\S*$/, '') + '…';
}

/** A question H1 as a title: with the brand when it fits, else alone, else cut on a word boundary. Case kept. */
export function questionTitle(h1: string): string {
  if ((h1 + BRAND).length <= TITLE_MAX) return h1 + BRAND;
  if (h1.length <= TITLE_MAX) return h1;
  const cut = h1.slice(0, TITLE_MAX + 1).replace(/[\s,;:]+\S*$/, '');
  return cut.replace(/\s+(a|an|the|and|or|of|to|in|for|on|with|my|your)$/i, '');
}
