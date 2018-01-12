'use strict';

//yes i'll be injected to nova site

setTimeout( function(){

    var date = new Date();
    var days = document.getElementsByClassName( 'activity-day' );
    var day  = days[ date.getDay() ];

    // DOOM of DOM :|
    var dayBtn = day.children[0].children[0].children[1].children[0].children[0];
    dispatchMouseEvent( dayBtn, 'click', true, true );

}, 0.5 * 1000 );

// click simulation
var dispatchMouseEvent = function( target, var_args ) {

    var e = document.createEvent('MouseEvents');
    e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
    target.dispatchEvent(e);

};