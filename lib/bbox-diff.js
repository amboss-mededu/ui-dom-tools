/**
 * Returns the relative offsets up to the limit node
 *
 * @param {Element} a – the target, whose visibility is also checked
 * @param {Element}|{Object} b – the referent, which can also be an existing bbox.
 * @param {Array} [keys] - a set of box keys to query instead of the full set.
 * @returns {Object} diffBox
 */

const boxKeys = ['bottom', 'height', 'left', 'right', 'top', 'width'];

export default function(a, b, keys){

  // do the hard math here
  let aBox = a.getBoundingClientRect();

  let result = {visible: true};

  let ks = keys && keys.length ? keys : boxKeys;

  // if this has a null BBox, it's not even visible
  if(aBox.height === 0 && aBox.width === 0) result.visible = false;

  let bBox = b.nodeType ? b.getBoundingClientRect() : b;

  ks.forEach(k=>{
    result[k] = aBox[k] - bBox[k]
  });

  return result;

};