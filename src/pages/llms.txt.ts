import type { APIRoute } from 'astro';
import { company, services, proof, awards, guarantees, club, press } from '@/data/business';
import { towns, communities, communityHref } from '@/data/areas';
import { guidePages } from '@/data/guides';
import { localServices } from '@/data/localServices';
import { landings } from '@/data/landing';
import { planFor } from '@/data/plan';
import { depthFor } from '@/data/depth';

/** Plain-text summary for AI answer engines (llmstxt.org). Built from the same fact file as the site. */
export const GET: APIRoute = () => {
  const u = company.url;
  /* The opening of the short answer: its first sentence, or the first two when the first is only a lead-in. */
  const firstSentence = (t: string) => { const parts = t.match(/[^.!?]+[.!?]+(?=\s|$)/g) ?? [t]; return (parts[0].length < 90 && parts[1] ? parts[0] + parts[1] : parts[0]).trim(); };
  const answers = guidePages.map((p) => `- [${p.row.h1}](${u}${p.url}): ${firstSentence(depthFor(p.url)?.answer ?? p.g.answer)}`).join('\n');
  const byTown = localServices.map((x) => `- [${planFor(`/services/${x.service}/${x.town}/`)!.h1}](${u}/services/${x.service}/${x.town}/)`).join('\n');
  const landingLinks = (prefix: string) => landings.filter((l) => l.url.startsWith(prefix) && planFor(l.url)).map((l) => `- [${planFor(l.url)!.h1}](${u}${l.url})`).join('\n');
  const body = `# ${company.name}

> ${company.shortDescription} Founded in ${company.founded} in Tucson, Arizona. Phone ${company.phone}. ${proof.approvedLine}

## Key facts
- Phone: ${company.phone} (the only number; call or send the quote form)
- Address: ${company.address.street}, ${company.address.city}, ${company.address.state} ${company.address.zip}
- Hours: ${company.availability}
- Founders: ${company.founders.join(', ')}. Crew leaders: ${company.crewLeaders.join(', ')}
- Reviews: ${proof.reviewsLong} (as of ${proof.asOf}); ${proof.recordClaim.toLowerCase()}
- Awards: ${awards.map((a) => `${a.issuer} ${a.title}${a.year ? ` ${a.year}` : ''}${a.detail ? ` (${a.detail})` : ''}`).join('; ')}
- Guarantees: ${guarantees.map((g) => `${g.name}: ${g.headline}`).join(' ')}
- ${club.name}: ${club.visits}, ${club.perk}
- Press: ${press.outlet}, "${press.title}" by ${press.author}

## Services
${services.map((s) => `- [${s.name}](${u}/services/${s.slug}/): ${s.cardLine}`).join('\n')}

## Areas served
${towns.map((t) => `- [${t.name}](${u}/areas/${t.slug}/)`).join('\n')}

## Communities
${communities.filter((c) => !c.pending).map((c) => `- [${c.name}](${u}${communityHref(c)})`).join('\n')}

## Answers
${answers}

## Services by town
${byTown}

## Specific services
${landingLinks('/services/')}

## Commercial
- [Commercial window cleaning and exterior services](${u}/commercial/)
${landingLinks('/commercial/')}

## Who we help
${landingLinks('/who-we-help/')}

## More
- [Reviews](${u}/reviews/)
- [Awards](${u}/awards/)
- [Guarantees](${u}/guarantee/)
- [FAQ](${u}/faq/)
- [Free quote](${u}/quote/)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
