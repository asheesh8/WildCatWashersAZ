import type { Faq } from '@/data/faq';
import type { Service } from '@/data/business';
import { company } from '@/data/business';

// JSON-LD builders for pages. Base.astro emits the LocalBusiness node once per
// page under the id `${site}/#business`; services point at it by @id instead of
// repeating the business details, so search engines see one entity, not many.

export const faqSchema = (items: Faq[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const serviceSchema = (s: Service, areaName?: string, path?: string) => ({
  '@type': 'Service',
  name: areaName ? `${s.name} in ${areaName}` : s.name,
  serviceType: s.name,
  alternateName: s.aka,
  description: s.lede,
  url: `${company.url}${path ?? `/services/${s.slug}/`}`,
  provider: { '@id': `${company.url}/#business` },
  areaServed: areaName ? { '@type': 'Place', name: `${areaName}, AZ` } : { '@type': 'AdministrativeArea', name: 'Greater Tucson, Arizona' },
});
