/**
 * Created by Administrator on 2017/7/2 0002.
 */
'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _projectCore = require('project-core');

var _projectCore2 = _interopRequireDefault(_projectCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const $ = global.$ = new _projectCore2.default();

$.init.add(done => {
    $.config.load(_path2.default.resolve(__dirname, 'config.js'));
    const env = process.env.NODE_ENV || null;
    if (env) {

        $.config.load(_path2.default.resolve(__dirname, '../config', env + ".js"));
    }
    $.env = env;
    done();
});

$.init.load(_path2.default.resolve(__dirname, 'init', 'mongodb.js'));

$.init.load(_path2.default.resolve(__dirname, 'models'));

//init
$.init(err => {
    if (err) {
        console.error(err);
        process.exit(-1);
    } else {
        console.log('inited');
    }

    const item = new $.model.User({
        name: 'dsaf',
        password: '1232123',
        nickname: 'testuser'
    });
    item.save(console.log);
});