/**
 * Sibling variation (redesign, Oct 2026). A page's URL seeds small layout choices
 * (which side the photo sits, which middle section comes first, the review layout),
 * so pages in one family share a look without sharing one skeleton. Same URL, same
 * choice, every build.
 */
import { hashSeed } from '@/data/reviews';
export const vary = (url: string, n: number, salt = '') => hashSeed(salt + url) % n;
export const flip = (url: string, salt = 'flip') => vary(url, 2, salt) === 1;
