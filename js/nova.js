'use strict';

var timeInput,
    saveBtn;

function setTime(){

    if( time.value.toString().length === 5 ){
        localStorage.setItem( 'time' , time.value );
    }

}

document.addEventListener( 'DOMContentLoaded', function () {

    timeInput = document.getElementById( 'time' );
    saveBtn   = document.getElementById( 'saveBtn' );

    timeInput.addEventListener( 'keyup', function( key ){
        if( key.keyCode === 13 ){
            setTime();
        }
    } );

    saveBtn.addEventListener( 'click', setTime );

    if( localStorage.getItem( 'time' ) ){
        timeInput.value = localStorage.getItem( 'time' );
    }

} );