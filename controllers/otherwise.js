'use strict';

const Telegram = require('telegram-node-bot');


class OtherwiseController extends Telegram.TelegramBaseController {
    handle($) {
        $.sendMessage('Sorry, I dont\'t understand.');
    }

}

module.exports = OtherwiseController;