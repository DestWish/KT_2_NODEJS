const sin = (x) => {
  if (typeof x !== 'number') {
    throw new TypeError('Input must be a number');
  }
  return Math.sin(x);
}
module.exports = sin;