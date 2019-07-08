'use strict';

//yes i'll be injected to nova site
setTimeout(() => {
  const floatButton = document.getElementsByClassName('plus icon');
  dispatchMouseEvent(floatButton[0], 'click', true, true);

  setTimeout(() => {
    const searchs = document.getElementsByClassName('search');
    dispatchMouseEvent(searchs[0], 'click', true, true);
  }, 0.5 * 1000);

}, 0.5 * 1000);

// click simulation
const dispatchMouseEvent = function( target ) {
    const e = document.createEvent('MouseEvents');
    e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
    target.dispatchEvent(e);
};