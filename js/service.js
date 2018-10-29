'use strict'

var novaTab = {};

function reminder(){

    alert('Remember to fill your nova :)');

    //create a tab and activate
    chrome.tabs.create( {
        selected : true,
        active   : true,
        url      : 'https://nova.itexico.com'
    }, function ( tab ){
        novaTab = tab;
    } );

}

function setDefaultTime(){

    if( !localStorage.getItem( 'time' ) ){
        localStorage.setItem( 'time', '16:50' );
    }

}

function checkHour(){

    var date    = new Date();
    var hours   = date.getHours() < 10 ? ( '0' + date.getHours()) : date.getHours();
    var minutes = date.getMinutes() < 10 ? ( '0' + date.getMinutes()) : date.getMinutes();
    var timeStr = hours + ':' + minutes;

    if ( localStorage.getItem( 'time' ) && localStorage.getItem( 'time' ) === timeStr ) {
        reminder();
    }

}

function init(){

    setDefaultTime();
    checkHour();
    setInterval(checkHour , 60 * 1000 );
    
    // get chrome nova tab and inject js code
    chrome.tabs.onUpdated.addListener( function( tabId, changes ){
        if ( tabId === novaTab.id && changes.url && changes.url.indexOf( 'nova.itexico.com' ) !== -1 ){
            chrome.tabs.executeScript( novaTab.id, { file: 'js/nova-inject.js' } );
        }
    } );

}

init();
