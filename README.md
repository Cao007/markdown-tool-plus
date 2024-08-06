# markdown-tool-plus

## 功能

一个拓展markdown功能的工具箱

- 清理assets文件夹中未引用的图片资源
- 设计用于轻松扩展其他 Markdown 管理功能

- ......



## 安装

你可以使用 npm 全局安装 `markdown-tool-plus`：

```sh
npm install -g markdown-tool-plus
```



## 使用方法

### 命令行方式

安装后，你可以在命令行中使用 `markdown-tool-plus`。以下是如何使用 `images-clear` 命令的示例：

```sh
markdown-tool-plus images-clear <folder>
```

例如：

```sh
markdown-tool-plus images-clear D:\\Desktop\\markdownDir
```

此命令将清理指定文件夹markdownDir中未使用的图片。



### 导入模块方式

你也可以在 Node.js 脚本中导入 `markdown-tool-plus` 模块，并使用其提供的功能：

```js
const { processFolder } = require('markdown-tool-plus');

// 指定要处理的markdown文件夹路径
const folderPath = 'D:\\Desktop\\markdownDir';

// 调用 processFolder 函数清理未使用的图片
processFolder(folderPath);
```



## 命令说明

### ls

功能：列出当前所有的功能指令列表。

参数：无



### images-clear

功能：清理指定 Markdown 文件夹中assets文件夹中未使用的图片。

参数：

- `folder`：包含 `.md` 文件及`.assets`文件夹的路径



## 贡献指南

我们欢迎所有的贡献！请在贡献之前阅读以下指南：

1. 在 GitHub 上 fork 这个仓库。
2. 将你的 fork 克隆到本地机器。
3. 为你的新功能或 bug 修复创建一个新分支。
4. 进行修改并提交代码，确保提交信息清晰简洁。
5. 将你的修改推送到你的 fork。
6. 提交一个 pull request 到主仓库。

请确保你的代码遵循项目的编码标准并通过所有测试。



## 许可证

这个项目是根据 ISC 许可证授权的。详情请参阅 [LICENSE](./LICENSE) 文件。
