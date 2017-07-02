/**
 * Created by Administrator on 2017/7/2 0002.
 */
'use strict'

import express from 'express';
import serverStatic from 'server-static';
import bodyParser from 'body-parser';
import multiparty from 'multiparty';


module.exports = function (done) {
    const app = express();
    $.express = app;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));


    const router = express.Router();
    $.router = router;
    app.use('/static', serveStatic(path.resolve(__dirname, '../../static')));
    app.listen($.config.get('web.port'), (err) => {
        done(err);
});
}