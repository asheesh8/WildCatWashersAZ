/**
 * The AEO/GEO page plan (/mnt/project-files/aeo-geo/page-plan-200.json).
 * Pages read their H1 and target query from here so the build and the plan
 * never drift apart. Families not built yet stay in the plan as the backlog.
 */
import rows from './page-plan-200.json';

export type PlanRow = {
  id: number; url: string; family: string; h1: string; primary_query: string;
  secondary_queries: string; intent: string; schema: string; sources: string;
  proof: string; differentiator: string; links_to: string; wave: number; flags: string;
  faq_refs: string; sections_on_page: string; gate_risk: string;
  faq_schema_owner_of: string; faq_shown_link_to_owner: string; local_details: string;
};
export const plan = rows as PlanRow[];
const byUrl = new Map(plan.map((r) => [r.url, r]));
export const planFor = (url: string) => byUrl.get(url);
export const h1For = (url: string, fallback: string) => byUrl.get(url)?.h1 ?? fallback;
