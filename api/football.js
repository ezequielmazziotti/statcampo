export default async function handler(req, res) {
  const { endpoint } = req.query;
  if (!endpoint) return res.status(400).json({ error: 'endpoint requerido' });

  const url = `https://v3.football.api-sports.io/${endpoint}`;
  const response = await fetch(url, {
    headers: { 'x-apisports-key': '3100b2079613a3b93c7528e254990d5a' }
  });
  const data = await response.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=300');
  res.status(200).json(data);
}
