/**
 * Returns the relative offsets up to the limit node
 *
 * @param {Element} a
 * @param {Element} b
 * @returns {{top: (number|Number), left: (Number|number)}}
 */

const boxKeys = ['bottom', 'height', 'left', 'right', 'top', 'width'];

export default function(a, b){

  // do the hard math here
  let aBox = a.getBoundingClientRect();

  let result = {visible: true};

  // if this has a null BBox, it's not even visible
  if(aBox.height === 0 && aBox.width === 0) result.visible = false;

  let bBox = b.getBoundingClientRect();

  boxKeys.forEach(k=>{
    result[k] = aBox[k] - bBox[k]
  });

  return result;

};