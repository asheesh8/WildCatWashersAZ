/** Sub-service, commercial property-type and audience pages. Written only from docs 1–4 and 6. */
export type Landing = {
  /** Plan URL, e.g. /commercial/office-buildings/ */
  url: string;
  /** 40–60 word standalone opening that answers the page's main query. */
  lede: string;
  service: 'window-cleaning' | 'solar-panel-cleaning' | 'solar-panel-pigeon-proofing' | 'solar-screens' | 'screen-repair' | 'pressure-washing';
  /** 3–6 short "what's included / how it works" points, each one sentence. */
  points: string[];
  /** 2–4 detail sections. */
  sections: { h: string; p: string[] }[];
  /** 3–5 related internal URLs. */
  related: string[];
};
