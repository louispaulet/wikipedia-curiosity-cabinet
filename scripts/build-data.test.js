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
