import type { APIRoute } from 'astro';
import { company, services, proof, awards, guarantees, club, press } from '@/data/business';
import { towns, communities, communityHref } from '@/data/areas';

/** Plain-text summary for AI answer engines (llmstxt.org). Built from the same fact file as the site. */
export const GET: APIRoute = () => {
  const u = company.url;
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
${communities.map((c) => `- [${c.name}](${u}${communityHref(c)})`).join('\n')}

## More
- [Reviews](${u}/reviews/)
- [Awards](${u}/awards/)
- [Guarantees](${u}/guarantee/)
- [FAQ](${u}/faq/)
- [Free quote](${u}/quote/)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
