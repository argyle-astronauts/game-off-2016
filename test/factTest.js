import test from 'ava';
import fact from '../lib/fact';

test('factorial of 1 is 1', t => {
  t.is(fact(1), 1);
});
