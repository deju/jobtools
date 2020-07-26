AUTOBAHN_DEBUG = true;
var autobahn = require('autobahn');
var wsuri = 'wss://api.poloniex.com';
var conn = new autobahn.Connection({
    url: wsuri,
    realm: 'realm1'
});

conn.onopen = function (session, details) {
    console.log(session, details);

    function marketEvent (args, kwargs, eDetails) {
        console.log('------market');
        console.log(args);
        console.log('------market-end');
    }

    function tickerEvent (args, kwargs, eDetails) {
        console.log('++++++ticker');
        console.log(args);
        console.log('++++++ticker-end');
    }

    function throllboxEvent (args, kwargs, eDetails) {
        console.log('>>>>>>throllbox');
        console.log(args);
        console.log('>>>>>>throllbox-end');
    }

    session.subscribe('BTC_ETH', marketEvent);
    session.subscribe('ticker', tickerEvent);
    session.subscribe('throllbox', throllboxEvent);
}

conn.onclose = function (session, details) {
    console.log('Websocket conn closed');
    console.log(session, details);
}

conn.open();