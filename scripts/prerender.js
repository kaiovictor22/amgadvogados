import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const PORT = 9000;
const DIST_DIR = path.resolve('dist');

function getContentType(filePath) {
  const ext = path.extname(filePath);
  if (ext === '.html') return 'text/html';
  if (ext === '.css') return 'text/css';
  if (ext === '.js') return 'application/javascript';
  if (ext === '.png') return 'image/png';
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  if (ext === '.svg') return 'image/svg+xml';
  if (ext === '.ico') return 'image/x-icon';
  return 'application/octet-stream';
}

// Start a lightweight local HTTP static file server
const server = http.createServer((req, res) => {
  let urlPath = decodeURI(req.url.split('?')[0]);
  let filePath = path.join(DIST_DIR, urlPath);
  
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  
  if (!fs.existsSync(filePath)) {
    filePath = path.join(DIST_DIR, 'index.html');
  }
  
  try {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': getContentType(filePath) });
    res.end(content);
  } catch (err) {
    res.writeHead(500);
    res.end('Error loading ' + req.url);
  }
});

server.listen(PORT, async () => {
  console.log(`Prerender server running on http://localhost:${PORT}`);
  try {
    await runPrerender();
  } catch (err) {
    console.error('Prerendering failed:', err);
    process.exit(1);
  }
});

// Platform-specific Apple Silicon Chrome lookup
function getChromePath() {
  if (process.platform === "darwin") {
    const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
    if (fs.existsSync(chromePath)) {
      return chromePath;
    }
  }
  return undefined;
}

async function runPrerender() {
  const executablePath = getChromePath();
  console.log(`Using Chrome binary: ${executablePath || 'default Puppeteer download'}`);

  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const routes = [
    { path: '/', outFile: 'dist/index.html' },
    { path: '/bpc-loas-autismo', outFile: 'dist/bpc-loas-autismo/index.html' }
  ];

  for (const route of routes) {
    console.log(`Prerendering route: ${route.path}...`);
    const page = await browser.newPage();
    
    // Navigate to local server
    await page.goto(`http://localhost:${PORT}${route.path}`, {
      waitUntil: 'networkidle0'
    });
    
    // Wait 1 second to ensure react-helmet/useSEO changes the DOM
    await new Promise(r => setTimeout(r, 1000));
    
    const html = await page.content();
    
    const outDir = path.dirname(route.outFile);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    
    fs.writeFileSync(route.outFile, html);
    console.log(`Saved pre-rendered file to ${route.outFile}`);
    
    await page.close();
  }

  await browser.close();

  // Gerar sitemap.xml dinamicamente
  const today = new Date().toISOString().split('T')[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.advogadosamg.com.br/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.advogadosamg.com.br/bpc-loas-autismo</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  fs.writeFileSync('dist/sitemap.xml', sitemapXml);
  console.log('Saved dist/sitemap.xml');

  // Atualizar dist/robots.txt com Sitemap path
  const distRobotsPath = 'dist/robots.txt';
  if (fs.existsSync(distRobotsPath)) {
    let robotsTxt = fs.readFileSync(distRobotsPath, 'utf8');
    if (!robotsTxt.includes('Sitemap:')) {
      robotsTxt += '\nSitemap: https://www.advogadosamg.com.br/sitemap.xml\n';
      fs.writeFileSync(distRobotsPath, robotsTxt);
      console.log('Updated dist/robots.txt with Sitemap path.');
    }
  }

  server.close();
  console.log('Prerendering completed successfully!');
  process.exit(0);
}
