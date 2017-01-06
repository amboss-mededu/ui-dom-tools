/**
 * Climbs up the DOM up to but not including the limit element (or
 * `body` if not specified) looking for and returning the first
 * element that passes the predicate, or `null` if nothing does.
 *
 * @param {HTMLElement} start
 * @param {function} predicate
 * @param {HTMLElement} limit
 * @returns {*}
 */

export default function (start, predicate, limit) {

  if (!start) return null;

  let cursor = start;

  const lim = limit || document.body;

  while (cursor !== lim) {
    if (cursor === document.body) {
      break;
    } else if (predicate(cursor)) {
      return cursor;
    } else {
      cursor = cursor.parentNode;
    }
  }

  return null;

}
