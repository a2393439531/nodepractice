/**
 * Created by Administrator on 2017/7/2 0002.
 */
'use strict';
import path from 'path';
import ProjectCore from 'project-core';

const $ = global.$= new ProjectCore();

$.init.add((done)=> {
    $.config.load(path.resolve(__dirname,'config.js'));
    const env = process.env.NODE_ENV || null;
    if(env){

        $.config.load(path.resolve(__dirname,'../config',env+".js"));
    }
    $.env = env;
    done();
});



$.init.load(path.resolve(__dirname,'init','mongodb.js'));

$.init.load(path.resolve(__dirname,'models'));

$.init.load(path.resolve(__dirname,'init','express'));

$.init.load(path.resolve(__dirname,'route'));
//init
$.init((err)=> {
    if(err) {
        console.error(err);
        process.exit(-1);
    }else{
        console.log('inited');
    }

    const item=new $.model.User({
        name:'dsaf',
        password : '1232123',
        nickname : 'testuser',
    });
    item.save(console.log);

});
