/*
 * MywaJS 2023
 * re-developed wwebjs
 * using with playwright & wajs
 * contact:
 * wa: 085157489446
 * ig: amirul.dev
 */

'use strict';

const Constants = require('./src/util/Constants');

module.exports = {
    Client: require('./src/Client'),

    version: require('./package.json').version,

    // Structures
    Chat: require('./src/structures/Chat'),
    PrivateChat: require('./src/structures/PrivateChat'),
    GroupChat: require('./src/structures/GroupChat'),
    Message: require('./src/structures/Message'),
    MessageMedia: require('./src/structures/MessageMedia'),
    Contact: require('./src/structures/Contact'),
    PrivateContact: require('./src/structures/PrivateContact'),
    BusinessContact: require('./src/structures/BusinessContact'),
    ClientInfo: require('./src/structures/ClientInfo'),
    Location: require('./src/structures/Location'),
    ProductMetadata: require('./src/structures/ProductMetadata'),
    List: require('./src/structures/List'),
    Buttons: require('./src/structures/Buttons'),
    PollVote: require('./src/structures/PollVote'),

    // Auth Strategies
    LinkingMethod: require('./src/LinkingMethod'),
    NoAuth: require('./src/authStrategies/NoAuth'),
    LocalAuth: require('./src/authStrategies/LocalAuth'),
    RemoteAuth: require('./src/authStrategies/RemoteAuth'),
    LegacySessionAuth: require('./src/authStrategies/LegacySessionAuth'),
    ...Constants
};
