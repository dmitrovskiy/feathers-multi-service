import test from 'ava';
import { assert } from 'chai';
import service from '../src/index';

test('should throw error without options', () => {
  assert.throws(() => service(), 'options must be set');
});

test('should throw error wirhout options.getService', () => {
  assert.throws(() => service({}), 'options.getService must be set');
});
