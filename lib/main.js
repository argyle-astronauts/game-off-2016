import domready from 'domready';

export const fact = function fact(n) {
  if (n === 0) {
    return 1;
  }

  return n * fact(n - 1);
};

domready(() => {
  const msg = document.createTextNode('foobar!');

  document.body.appendChild(msg);
});
