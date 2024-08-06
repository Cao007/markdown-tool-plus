# markdown-tool-plus

## 功能

`markdown-tool-plus` 是一个功能强大的命令行工具，用于处理和增强 Markdown 文件的操作。它提供以下主要功能：

### 1. 清理未引用的图片资源

在编写和编辑 Markdown 文件时，往往会引用许多图片资源。这些图片资源有时可能不再被使用，但仍然保留在项目中，占用存储空间。`markdown-tool-plus` 提供了 `images-clear` 功能，可以自动检测并删除未被引用的图片资源。

#### 使用方法--命令行

```sh
markdown-tool-plus images-clear <folder>
```

示例：folderA文件夹的目录如下所示，此命令将在folderA/index.assets中删除图片，在index.md文件中未引用的图片

~~~bash
.
├── folderA
│   └── index.md
|   └── index.assets
|       └── a.png
|       └── b.png
~~~

```sh
markdown-tool-plus images-clear D:\\Desktop\\folderA
```



#### 使用方法--函数

你也可以在 Node.js 脚本中导入 `markdown-tool-plus` 模块，并使用其提供的功能：

```js
const { processFolder } = require('markdown-tool-plus');

// 指定要处理的md文件所在文件夹的路径
const folderPath = 'D:\\Desktop\\folderA';

// 调用 processFolder 清理D:\\Desktop\\folderA
processFolder(folderPath);
```



### 2. 翻译 Markdown 文件

`markdown-tool-plus` 提供了翻译功能，可以将指定的 Markdown 文件内容翻译为其他语言。默认目标语言是英文（en），但您可以使用 `--language` 选项指定其他语言。

#### 使用方法

```sh
markdown-tool-plus translate <file> [--language <language>] [--proxy <proxy>]
```

示例：

```sh
markdown-tool-plus translate path/to/file.md --language es
```

此命令将 `file.md` 翻译为西班牙语（es）。如果在使用 `translate` 命令时遇到网络问题，可以通过 `--proxy` 选项指定代理服务器。例如：

```sh
markdown-tool-plus translate path/to/file.md --proxy http://your-proxy-server:port
```



### 3. 列出当前可用的功能

`markdown-tool-plus` 提供了 `ls` 功能，列出所有当前可用的命令和功能说明。

#### 使用方法

```sh
markdown-tool-plus ls
```

输出示例：

```sh
images-clear ------ 清理 assets 文件夹中未引用的图片资源
translate --------- 翻译指定的 Markdown 文件
```



## 安装

你可以使用 npm 全局安装 `markdown-tool-plus`：

```sh
npm install -g markdown-tool-plus
```



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
