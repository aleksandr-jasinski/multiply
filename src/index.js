module.exports = function multiply(first, second) {
  let nf = BigInt(first);
  let ns = BigInt(second);
  let m = String(ns * nf);
  return m;
}
