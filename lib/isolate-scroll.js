/**
 * Does everything to stop the browser from continuing to respond to an event.
 * A listener should return this function's result for it to work as expected.
 * @param e
 * @returns {boolean}
 * @private
 */
function _stopEvent(e){
    e.stopPropagation();
    e.preventDefault();
    e.returnValue = false;
    return false;
}

/**
 * Returns a listener function bound to a scroll parent.
 * @param el
 * @returns {Function}
 * @private
 */
function _listener(el){

  return function(e) {

    const {scrollTop, scrollHeight, clientHeight} = el,
          delta                                   = e.wheelDelta,
          up                                      = delta > 0;

    if (!up && -delta > scrollHeight - clientHeight - scrollTop) {
      // Scrolling down, but this will take us past the bottom.
      el.scrollTop = scrollHeight;
      return _stopEvent(e);
    } else if (up && delta > scrollTop) {
      // Scrolling up, but this will take us past the top.
      el.scrollTop = 0;
      return _stopEvent(e);
    }

  }

}

/**
 * Events in charge of scrolling that should be isolated.
 */
const events = ['DOMMouseScroll', 'mousewheel'];

/**
 * Takes an element whose scroll should be isolated, i.e. scroll should not propagate
 * to its parents.
 * @param el
 */
export default function(el){
  const listener = _listener(el);
  return events.forEach(event=>el.addEventListener(event, listener));
}