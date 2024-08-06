const fs = require('fs');
const path = require('path');
const { translate } = require('@vitalets/google-translate-api');

async function translateFile(filePath, targetLanguage = 'en') {
    const content = fs.readFileSync(filePath, 'utf8');

    // 正则表达式匹配 Markdown 图片和 HTML 图片标签
    const mdImageRegex = /!\[.*?\]\((.*?)\)/g;
    const htmlImageRegex = /<img.*?src="(.*?)".*?>/g;

    let placeholders = [];
    let index = 0;

    // 替换 Markdown 图片路径
    const contentWithoutMdImages = content.replace(mdImageRegex, (match, p1) => {
        placeholders.push(p1);
        return `![placeholder-${index++}](${p1})`;
    });

    // 替换 HTML 图片路径
    const contentWithoutImages = contentWithoutMdImages.replace(htmlImageRegex, (match, p1) => {
        placeholders.push(p1);
        return `<img src="placeholder-${index++}" alt="placeholder" />`;
    });

    try {
        const translated = await translate(contentWithoutImages, { to: targetLanguage });
        let translatedText = translated.text;

        // 恢复 Markdown 图片路径
        translatedText = translatedText.replace(/!\[placeholder-(\d+)]\((.*?)\)/g, (match, p1) => {
            return `![image](${placeholders[p1]})`;
        });

        // 恢复 HTML 图片路径
        translatedText = translatedText.replace(/<img src="placeholder-(\d+)"/g, (match, p1) => {
            return `<img src="${placeholders[p1]}"`;
        });

        const translatedFilePath = `${path.basename(filePath, '.md')}-${targetLanguage}.md`;
        fs.writeFileSync(translatedFilePath, translatedText);
        console.log(`翻译已完成，文件保存为: ${translatedFilePath}`);
    } catch (error) {
        console.error('翻译过程中发生错误:', error);
    }
}

module.exports = translateFile;