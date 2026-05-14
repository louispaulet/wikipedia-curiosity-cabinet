import assert from 'node:assert/strict';
import test from 'node:test';
import { buildAtlasIndex, buildTrail, pickRabbitHole, pickTheme, similarityScore, slugify } from './atlas.js';

const baseAtlas = {
  articles: [
    {
      id: 'alpha',
      title: 'Alpha',
      tags: ['science', 'place'],
      collectionIds: ['one'],
      scores: { obscurity: 10, strangeness: 20, significance: 30, visualAppeal: 40, conversationPower: 50 },
    },
    {
      id: 'beta',
      title: 'Beta',
      tags: ['science', 'history'],
      collectionIds: ['one'],
      scores: { obscurity: 11, strangeness: 19, significance: 31, visualAppeal: 41, conversationPower: 49 },
    },
    {
      id: 'gamma',
      title: 'Gamma',
      tags: ['culture'],
      collectionIds: ['two'],
      scores: { obscurity: 90, strangeness: 90, significance: 90, visualAppeal: 90, conversationPower: 90 },
    },
  ],
  collections: [
    { id: 'one', slug: 'one', title: 'One', description: 'One', accent: 'amber', articleIds: ['alpha', 'beta'] },
    { id: 'two', slug: 'two', title: 'Two', description: 'Two', accent: 'sky', articleIds: ['gamma'] },
  ],
};

test('slugify normalizes punctuation and spacing', () => {
  assert.equal(slugify("Heaven's Gate"), 'heavens-gate');
  assert.equal(slugify('Pruitt-Igoe'), 'pruitt-igoe');
});

test('buildAtlasIndex preserves collections and creates lookup maps', () => {
  const atlas = buildAtlasIndex(baseAtlas);
  assert.equal(atlas.collections.length, 2);
  assert.equal(atlas.collectionBySlug.get('one').title, 'One');
  assert.equal(atlas.collectionById.get('two').title, 'Two');
  assert.equal(atlas.articleById.get('alpha').title, 'Alpha');
});

test('buildAtlasIndex adds related ids to each article', () => {
  const atlas = buildAtlasIndex(baseAtlas);
  assert.ok(atlas.relatedById.get('alpha').includes('beta'));
  assert.ok(atlas.articleById.get('alpha').relatedIds.includes('beta'));
});

test('similarityScore prefers shared tags and collections', () => {
  const alpha = baseAtlas.articles[0];
  const beta = baseAtlas.articles[1];
  const gamma = baseAtlas.articles[2];
  assert.ok(similarityScore(alpha, beta) > similarityScore(alpha, gamma));
});

test('pickRabbitHole returns a related article', () => {
  const atlas = buildAtlasIndex(baseAtlas);
  const rabbitHole = pickRabbitHole(atlas.articleById.get('alpha'), atlas);
  assert.ok(rabbitHole);
  assert.notEqual(rabbitHole.id, 'alpha');
  assert.ok(['beta', 'gamma'].includes(rabbitHole.id));
});

test('buildTrail walks through a multi-article path', () => {
  const atlas = buildAtlasIndex(baseAtlas);
  const trail = buildTrail(atlas, { tags: ['science'] }, { tags: ['culture'] }, 3);
  assert.equal(trail.length, 3);
  assert.ok(trail.every((article, index, arr) => index === 0 || article.id !== arr[index - 1].id));
  assert.ok(trail.some((article) => article.id === 'gamma'));
});

test('pickTheme falls back to the first theme when unknown', () => {
  assert.equal(pickTheme('unknown').id, 'weird-science');
  assert.equal(pickTheme('social-experiments').id, 'social-experiments');
});
