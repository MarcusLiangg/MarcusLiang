// app/3d_view/route.js
// Serves the standalone 3D PC setup page (public/pc-setup.html) at /3d_view.
// A route handler is used instead of a page so the root layout (custom cursor,
// global styles) does not wrap the self-contained three.js document.
import { readFile } from 'fs/promises';
import path from 'path';

export const dynamic = 'force-static';

export async function GET() {
  const html = await readFile(path.join(process.cwd(), 'public', 'pc-setup.html'), 'utf8');
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
