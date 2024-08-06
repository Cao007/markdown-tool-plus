const fs = require('fs');
const path = require('path');

function getImagesFromMarkdown(mdFile) {
    const content = fs.readFileSync(mdFile, 'utf8');
    const regex = /!\[.*?\]\((.*?)\)|<img\s+.*?src=["'](.*?)["']/g;
    const images = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        const imgPath = match[1] || match[2];
        images.push(path.basename(imgPath));
    }
    return images;
}

function deleteUnusedImages(mdFile, assetsFolder) {
    const usedImages = new Set(getImagesFromMarkdown(mdFile));
    fs.readdir(assetsFolder, (err, files) => {
        if (err) {
            console.error(`Error reading assets folder: ${err}`);
            return;
        }
        files.forEach(file => {
            if (!usedImages.has(file)) {
                const filePath = path.join(assetsFolder, file);
                fs.unlink(filePath, err => {
                    if (err) {
                        console.error(`Error deleting file: ${err}`);
                    } else {
                        console.log(`Deleted: ${file}`);
                    }
                });
            }
        });
    });
}

function processFolder(folder) {
    fs.readdir(folder, (err, files) => {
        if (err) {
            console.error(`Error reading folder: ${err}`);
            return;
        }
        const mdFile = files.find(file => file.endsWith('.md'));
        const assetsFolder = files.find(file => file.endsWith('.assets'));
        if (mdFile && assetsFolder) {
            const mdFilePath = path.join(folder, mdFile);
            const assetsFolderPath = path.join(folder, assetsFolder);
            deleteUnusedImages(mdFilePath, assetsFolderPath);
        } else {
            console.error('Markdown file or assets folder not found in the specified directory.');
        }
    });
}

module.exports = processFolder;
