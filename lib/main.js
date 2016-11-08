import domready from 'domready';
import fact from './fact';

const FACTOR = 5;

domready(() => {
  const msg = document.createTextNode('foobar!');
  const result = document.createTextNode(fact(FACTOR));

  document.body.appendChild(msg);
  document.body.appendChild(result);
});
