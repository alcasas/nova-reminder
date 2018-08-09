'use strict';

//yes i'll be injected to nova site
setTimeout( function(){
    var floatButton = document.getElementsByClassName( 'plus icon' );
    dispatchMouseEvent( floatButton[0], 'click', true, true );

    setTimeout( function(){
        var searchs = document.getElementsByClassName( 'search' );
        dispatchMouseEvent( searchs[0], 'click', true, true );
    }, 0.5 * 1000 );

}, 0.5 * 1000 );

// click simulation
var dispatchMouseEvent = function( target ) {
    var e = document.createEvent('MouseEvents');
    e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
    target.dispatchEvent(e);
};