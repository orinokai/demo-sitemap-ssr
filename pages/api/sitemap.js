export default function handler(req, res) {
  const time = new Date().toLocaleTimeString();

  const sitemap = `<?xml version="1.0"?><time>${time}</time>`;

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=180");
  res.write(sitemap);
  res.end();
}
