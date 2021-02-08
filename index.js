'use strict';

const telegram = require('telegram-node-bot'),
    tg = new telegram.Telegram('1605180601:AAEnDpIvBXI7sN0XLDGJjwFTBW2PQMkeW0c', {
        workers: 1
    });

const PingController = require('./controllers/ping')
    , OtherwiseController = require('./controllers/otherwise');
    

tg.router.when(new telegram.TextCommand('/ping', 'pingCommand'), new PingController())
    .otherwise(new OtherwiseController());
    