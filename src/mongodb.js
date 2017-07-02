/**
 * Created by Administrator on 2017/7/2 0002.
 */
'use strict';


import mongoose from 'mongoose';

module.exports = function (done) {
    const conn = mongoose.createConnection($.config.get('db.mongodb'));
    $.mongodb = conn;


    done();
}