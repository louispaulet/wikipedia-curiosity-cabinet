import assert from 'node:assert/strict';
import test from 'node:test';
import { articles, collections } from '../src/data/seeds.js';

const articleById = new Map(articles.map((article) => [article.id, article]));
const collectionById = new Map(collections.map((collection) => [collection.id, collection]));

test('every article has a wikipediaUrl so the source link is visible', () => {
  for (const article of articles) {
    assert.ok(article.wikipediaUrl, `Missing wikipediaUrl for ${article.id}`);
    assert.match(article.wikipediaUrl, /^https:\/\/en\.wikipedia\.org\/wiki\//);
  }
});

test('every article has a hook, summary, and whyStrange copy', () => {
  for (const article of articles) {
    assert.ok(article.hook?.length > 0, `Missing hook for ${article.id}`);
    assert.ok(article.summary?.length > 0, `Missing summary for ${article.id}`);
    assert.ok(article.whyStrange?.length > 0, `Missing whyStrange for ${article.id}`);
  }
});

test('every article has at least one tag and score fields', () => {
  for (const article of articles) {
    assert.ok(Array.isArray(article.tags) && article.tags.length > 0, `Missing tags for ${article.id}`);
    assert.ok(article.scores && typeof article.scores === 'object', `Missing scores for ${article.id}`);
    for (const key of ['obscurity', 'strangeness', 'significance', 'visualAppeal', 'conversationPower']) {
      assert.equal(typeof article.scores[key], 'number', `Missing score ${key} for ${article.id}`);
    }
  }
});

test('every collection references existing articles', () => {
  for (const collection of collections) {
    assert.ok(collection.articleIds.length > 0, `Empty collection ${collection.id}`);
    for (const articleId of collection.articleIds) {
      assert.ok(articleById.has(articleId), `Collection ${collection.id} references missing article ${articleId}`);
    }
  }
});

test('every article belongs to at least one collection id', () => {
  for (const article of articles) {
    assert.ok(article.collectionIds.length > 0, `Article ${article.id} has no collections`);
  }
});

test('every collection has at least one article', () => {
  for (const collection of collections) {
    assert.ok(collection.articleIds.length > 0, `Collection ${collection.id} has no articles`);
  }
});

test('back shelf content is present and wired together', () => {
  const backShelfArticles = [
    'mellified-man',
    'cadaver-synod',
    'god-helmet',
    'monster-study',
    'island-of-the-dolls',
    'bhangarh-fort',
    'green-children-of-woolpit',
    'mokele-mbembe',
    'the-hum',
    'phantom-time-conspiracy-theory',
    'shroud-of-turin',
    'the-langley-schools-music-project',
    'dracula-gigas',
    'orchis-simia',
  ];
  const backShelfCollections = ['small-print-curiosities', 'haunted-footnotes', 'afterimage-files'];

  for (const articleId of backShelfArticles) {
    assert.ok(articleById.has(articleId), `Missing back shelf article ${articleId}`);
  }

  for (const collectionId of backShelfCollections) {
    const collection = collectionById.get(collectionId);
    assert.ok(collection, `Missing back shelf collection ${collectionId}`);
    assert.ok(collection.articleIds.length > 0, `Back shelf collection ${collectionId} has no articles`);
  }
});

test('every article references only known collections except known editorial aliases', () => {
  const knownAliases = new Set(['abandoned-places']);
  for (const article of articles) {
    for (const collectionId of article.collectionIds) {
      assert.ok(collectionById.has(collectionId) || knownAliases.has(collectionId), `Article ${article.id} references missing collection ${collectionId}`);
    }
  }
});
