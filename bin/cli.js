#!/usr/bin/env node

const { Command } = require('commander');
const processFolder = require('../lib/imagesClear');
const translateFile = require('../lib/translate');

const program = new Command();

program
    .name('markdown-tool-plus')
    .description('A tool to manage markdown files and their assets')
    .version('1.0.0');

program
    .command('ls')
    .description('列出当前所有的功能指令')
    .action(() => {
        console.log('ls ----------------- 列出当前所有的功能指令');
        console.log('images-clear ------- 清理assets文件夹中未引用的图片资源');
        console.log('translate ---------- 翻译Markdown文件');
        // 在此添加更多指令说明
    });

program
    .command('images-clear <folder>')
    .description('清理assets文件夹中未引用的图片资源')
    .action((folder) => {
        processFolder(folder);
    });

program
    .command('translate <file>')
    .description('翻译Markdown文件')
    .option('-l, --language <language>', '指定目标语言', 'en')
    .option('-p, --proxy <proxy>', '指定代理服务器')
    .action((file, options) => {
        if (options.proxy) {
            process.env.GLOBAL_AGENT_HTTP_PROXY = options.proxy;
            require('global-agent/bootstrap');
        }
        translateFile(file, options.language).catch(console.error);
    });

program.parse(process.argv);
