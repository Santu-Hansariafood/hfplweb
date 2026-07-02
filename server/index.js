import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const SITE_URL = (process.env.SITE_URL || 'https://hansariafood.com').replace(/\/+$/, '');
const FORCE_HTTPS = process.env.FORCE_HTTPS === 'true';
const IS_PROD = process.env.NODE_ENV === 'production';

const PUBLIC_ROUTES = [
  '/',
  '/about',
  '/commodities',
  '/services',
  '/clients',
  '/team',
  '/contact',
  '/privacy-policy',
  '/terms-of-use',
  '/disclaimer',
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.disable('x-powered-by');
app.set('trust proxy', true);

if (IS_PROD) {
  app.use(compression());
}

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  next();
});

if (FORCE_HTTPS) {
  app.use((req, res, next) => {
    const proto = req.get('x-forwarded-proto');
    const isHttps = req.secure || proto === 'https';
    if (!isHttps) {
      return res.redirect(301, `${SITE_URL}${req.originalUrl}`);
    }
    if (IS_PROD) {
      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    }
    next();
  });
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running!' });
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`);
});

app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  const today = new Date().toISOString().slice(0, 10);
  const body = PUBLIC_ROUTES.map((route) => {
    const loc = `${SITE_URL}${route}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
  </url>`;
  }).join('\n');

  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`);
});

const distDir = path.join(__dirname, '../dist');
app.use(
  '/assets',
  express.static(path.join(distDir, 'assets'), {
    immutable: true,
    maxAge: '365d',
  }),
);

app.use(
  express.static(distDir, {
    maxAge: '1h',
    setHeaders: (res, servedPath) => {
      if (servedPath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-store');
      }
    },
  }),
);

app.use((req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
