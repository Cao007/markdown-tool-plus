#!/usr/bin/env node

const { Command } = require('commander');
const processFolder = require('../lib/imagesClear');

const program = new Command();

program
    .name('markdown-tool-plus')
    .description('A tool to manage markdown files and their assets')
    .version('1.0.0');

program
    .command('images-clear <folder>')
    .description('清理assets文件夹中未引用的图片资源')
    .action((folder) => {
        processFolder(folder);
    });

program
    .command('ls')
    .description('列出当前所有的功能指令')
    .action(() => {
        console.log('ls ----------------- 列出当前所有的功能指令');
        console.log('images-clear ------- 清理assets文件夹中未引用的图片资源');
        // 在此添加更多指令说明
    });

program.parse(process.argv);
