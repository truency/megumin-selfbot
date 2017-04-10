const { Listener } = require('discord-akairo');

function exec(err) {
    this.client.logger.log(3, 'An error occured. Contact someone who might know what it means.');
    console.error(err); // eslint-disable-line no-console
}

module.exports = new Listener('error', exec, {
    emitter: 'commandHandler',
    eventName: 'error',
    type: 'on',
    category: 'commandHandler'
});