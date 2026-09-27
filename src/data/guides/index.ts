/** All guide and answer page content, joined to the plan rows by URL. */
import type { Guide } from './types';
import { plan, type PlanRow } from '@/data/plan';

const parts = import.meta.glob<{ guides: Guide[] }>('./part*.ts', { eager: true });
export const guideContent: Guide[] = Object.values(parts).flatMap((m) => m.guides);
const bySlug = new Map(guideContent.map((g) => [g.slug, g]));

export type GuidePage = { row: PlanRow; g: Guide; url: string };
export const guidePages: GuidePage[] = plan
  .filter((r) => r.family === 'guide' || r.family === 'answer')
  .map((row) => ({ row, url: row.url, g: bySlug.get(row.url.replace(/^\/guides\/|\/$/g, ''))! }))
  .filter((p) => p.g);
export const guideByUrl = new Map(guidePages.map((p) => [p.url, p]));
