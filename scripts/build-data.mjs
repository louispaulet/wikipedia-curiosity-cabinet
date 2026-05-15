import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { articles, collections } from '../src/data/seeds.js';
import { atlasSchema } from '../src/lib/schema.js';
import { buildAtlasIndex, themePrompts } from '../src/lib/atlas.js';

const root = resolve(process.cwd());
const outDir = resolve(root, 'public/data');
const outFile = resolve(outDir, 'atlas.json');

await mkdir(outDir, { recursive: true });

const existingPayload = await readFile(outFile, 'utf8').catch(() => null);
let existingAtlas = null;

if (existingPayload) {
  try {
    existingAtlas = atlasSchema.safeParse(JSON.parse(existingPayload));
  } catch {
    existingAtlas = null;
  }
}

const generatedAt = existingAtlas?.success ? existingAtlas.data.generatedAt : new Date().toISOString();

const atlas = buildAtlasIndex({
  generatedAt,
  articles,
  collections,
  themes: themePrompts,
});

const parsed = atlasSchema.parse(atlas);
const payload = JSON.stringify(parsed, null, 2);

if (payload === existingPayload) {
  console.log(`Atlas data already up to date with ${parsed.articles.length} articles and ${parsed.collections.length} collections`);
} else {
  await writeFile(outFile, payload);

  console.log(`Wrote ${parsed.articles.length} articles and ${parsed.collections.length} collections to public/data/atlas.json`);
}
