'use strict';
/**
 * Created by Administrator on 2017/7/2 0002.
 */

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (done) {
    const Schema = _mongoose2.default.Schema;
    const ObjectId = Schema.ObjectId;
    const User = new Schema({
        name: { type: String, unique: true },
        password: { type: String },
        nickname: { type: String }
    });
    $.mongodb.model('User', User);
    $.model.User = $.mongodb.model('User');

    done();
};