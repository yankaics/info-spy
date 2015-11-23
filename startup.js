/* 
 * @Author: boxizen
 * @Date:   2015-11-19 00:42:37
 * @Last Modified by:   boxizen
 * @Last Modified time: 2015-11-23 15:46:32
 */

'use strict';

var program = require('commander'),

    spy = require('./spy'),
    conf = require('./conf'),

    logger = console;

function start() {

    // 配置命令行参数
    program.version('0.0.1')
        .option('-u, --url <url>', 'url')
        .parse(process.argv);

    // 打印系统信息
    logger.info('pid:', process.pid);

    // 捕获异常
    process.on('uncaughtException', function(e) {
        logger.error('Caught exception:', e.stack);
    });

    // 初始化配置参数
    conf.init();
    spy.init();

    // 运行spy
    if (program.url) {        
        spy.run(program.url);
    }    
}

start();