import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { articles, collections } from '../src/data/seeds.js';
import { atlasSchema } from '../src/lib/schema.js';
import { buildAtlasIndex, themePrompts } from '../src/lib/atlas.js';

const root = resolve(process.cwd());
const outDir = resolve(root, 'public/data');

await mkdir(outDir, { recursive: true });

const atlas = buildAtlasIndex({
  generatedAt: new Date().toISOString(),
  articles,
  collections,
  themes: themePrompts,
});

const parsed = atlasSchema.parse(atlas);
const payload = JSON.stringify(parsed, null, 2);

await writeFile(resolve(outDir, 'atlas.json'), payload);

console.log(`Wrote ${parsed.articles.length} articles and ${parsed.collections.length} collections to public/data/atlas.json`);

