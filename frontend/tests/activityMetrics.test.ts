import assert from 'node:assert/strict';
import test from 'node:test';
import { formatActivityMetric } from '../src/lib/activityMetrics.js';

test('formats missing activity metrics without throwing', () => {
	assert.equal(formatActivityMetric(null, 2), '–');
	assert.equal(formatActivityMetric(undefined, 1), '–');
});

test('keeps zero activity metrics visible', () => {
	assert.equal(formatActivityMetric(0, 2), '0.00');
});
