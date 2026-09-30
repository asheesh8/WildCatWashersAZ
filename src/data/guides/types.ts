/** Guide and answer pages (/guides/<slug>/). Written only from docs 1–4 and 6. */
export type Guide = {
  /** Matches the plan URL /guides/<slug>/. */
  slug: string;
  /** Standalone 40–60 word answer shown first. No pronoun pointing upward. */
  answer: string;
  /** The service this answer leads to, or undefined when none fits. */
  service?: 'window-cleaning' | 'solar-panel-cleaning' | 'solar-panel-pigeon-proofing' | 'solar-screens' | 'screen-repair' | 'pressure-washing';
  /** 2–4 detail sections under real headings. */
  sections: { h: string; p: string[] }[];
  /** "What we do about it": one short paragraph. */
  doAbout: string;
  /** 3–5 related internal URLs (cluster siblings, pillar guide). */
  related: string[];
};
