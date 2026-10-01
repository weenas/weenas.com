// /sitemap.xml: every language version of the homepage, each listing the others (hreflang).
import type { APIRoute } from "astro";
import { DEFAULT_LANG, LANGS, SITE, type Lang } from "../data/site";

export const GET: APIRoute = () => {
  const abs = (p: string) => new URL(p, SITE.url).href;
  const langs = Object.keys(LANGS) as Lang[];
  const links = [
    ...langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${LANGS[l].hreflang}" href="${abs(LANGS[l].path)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(LANGS[DEFAULT_LANG].path)}"/>`,
  ].join("\n");
  const urls = langs.map((l) => `  <url>
    <loc>${abs(LANGS[l].path)}</loc>
    <lastmod>${SITE.updated}</lastmod>
${links}
  </url>`).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
