---
title: Node V20，都有哪些新特性
date: 2023-04-20 10:17:29
permalink: /pages/eef250/
sidebar: auto
categories:
  - 随笔
tags:
  - 
author: 
  name: GeorgeH
  link: https://github.com/GeorgeHcc
---

<!-- ![](https://cdn.jsdelivr.net/gh/GeorgeHcc/GeorgeHcc@main/assets/blog/nodejs.jpg) -->

![](https://cdn.jsdelivr.net/gh/GeorgeHcc/GeorgeHcc@main/assets/blog/images.png)

2023年4月18日新发布的node.js <Badge text="v20"/>版本,有许多值得关注的点，官方计划将于2023/10月正式成为长期维护版本，一起来看看都有哪些新特性！
<!-- more -->

## 1.新增权限模型

这是nodev20新增的特性，不知道是不是~~抄~~借鉴了deno😂
Node.js 权限模型是一种实验性机制，用于在执行期间限制对特定资源的访问。

在包含权限模型的第一个版本中，功能具有以下功能：

- 限制对文件系统的访问（读和写）
  - 使用`--allow-fs-read`和`--allow-fs-write`
- 限制访问`child_process`
  - 使用`--allow-child-process`
- 限制访问`worker_threads`
  - 使用`--allow-worker`
- 限制对本机插件的访问（与标志相同`--no-addons`）
  - 可用权限由标志记录`--experimental-permission` 。

当使用 启动 `Node.js` 时`--experimental-permission`，访问文件系统、生成进程和使用的能力`node:worker_threads`将受到限制。

通过引入`--allow-fs-read和--allow-fs-write`标志，使用 Node.js 的开发人员现在可以更好地控制文件系统访问。这些实验性功能允许更精细地控制 Node.js 进程可以访问文件系统的哪些部分。

要启用这些标志，开发人员可以使用该`--experimental-permission`标志以及所需的权限。例如，运行以下命令允许对整个文件系统进行读写访问：

``` bash
$ node --experimental-permission --allow-fs-read=* --allow-fs-write=* index.js
```
开发人员还可以通过向标志传递逗号分隔值来指定文件系统访问的特定路径。例如，以下命令允许对/tmp/文件夹进行写访问：

``` bash
$ node --experimental-permission --allow-fs-write=/tmp/ --allow-fs-read=/home/index.js index.js
```
通配符模式还可用于允许一次访问多个文件或文件夹。例如，以下命令允许对/home/目录中以 开头的所有文件和文件夹进行读取访问test：

``` bash
$ node --experimental-permission --allow-fs-read=/home/test* index.js
```
permission当启用权限模型时，可以使用对象的新属性process在运行时检查是否已授予某个权限。

``` JavaScript
process.permission.has('fs.write'); // true
process.permission.has('fs.write', '/home/nodejs/protected-folder'); // true
```


## 2.ESM loader hooks接近稳定
通过loader( ) 提供的自定义 ESM生命周期hooks`--experimental-loader=./foo.mjs`现在在与主线程隔离的专用线程中运行。这为加载程序提供了单独的范围，并确保加载程序和应用程序代码之间不会交叉污染。

与浏览器行为保持一致，`import.meta.resolve()`现在同步返回；请注意，resolve如果加载程序作者愿意，用户加载程序中的挂钩可以保持异步，并且`import.meta.resolve`仍然会在应用程序代码中同步返回。


> 这些更改是将 ESM 加载程序标记为稳定之前的最后一个未完成的项目。一旦社区没有报告重大错误一段时间后，我们打算将 loader 标志以及import.meta.resolve和 hook 标记resolve为load稳定。这将使 ESM 得到更广泛的采用，因为仪器供应商等重要支持者将拥有稳定的 API 来构建分析和报告库。

> 由 Anna Henningsen、Antoine du Hamel、Geoffrey Booth、Guy Bedford、Jacob Smith 和 Michaël Zasso 在#44710中贡献。

> V8 11.3
与往常一样，Node.js 中包含了新版本的 V8 引擎（更新至版本 11.3，它是 Chromium 113 的一部分），带来了改进的性能和新的语言功能，包括：

> String.prototype.isWellFormed 和 toWellFormed
通过复制更改 Array 和 TypedArray 的方法
可调整大小的 ArrayBuffer 和可增长的 SharedArrayBuffer
具有设置符号+字符串属性的 RegExp v 标志
WebAssembly 尾调用
V8 更新是 Michaël Zasso 在#47251中的贡献。

## 3.稳定的测试运行器
Node.js 版本 20 的最新更新包括对 `test_runner` 模块的重要更改。最近更新后，该模块已被标记为稳定。稳定的测试运行程序包括用于编写和运行测试的构建块，包括：

- describe, it/test和构建测试文件的钩子
- mocking
- watch mode 观察者模式
- `node --test`用于并行运行多个测试文件
测试运行程序还包括一些尚未稳定的部分，包括报告器和代码覆盖率。

下面是官方给的示例：
``` JavaScript
import { test, mock } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

mock.method(fs, 'readFile', async () => "Hello World");
test('synchronous passing test', async (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(await fs.readFile('a.txt'), "Hello World");
});
```


## 4.性能优化
新成立的 Node.js 性能团队自上次主要版本以来重新关注性能。Node.js 20 对运行时的基本部分进行了许多改进，包括 URL、fetch()和EventTarget。

> 不知道是不是bun.js给的压力😂

初始化的成本EventTarget已减少一半，从而可以更快地访问所有使用它的子系统。此外，V8 Fast API 调用已被用来提高 API 的性能，例如URL.canParse()计时器。

Node.js 20 包括特定的更改，例如 Ada 的更新版本 2.0，这是一个用 C++ 编写的快速且符合规范的 URL 解析器。

期待着提高性能的新方法，我们目前正在努力通过重构来消除对流、、和字符串解码器的品牌验证检查，从而降低符合规范的URL成本URLSearchParams。这有助于支持我们在有意义的情况下遵守规范的总体目标。

如果您对性能和 Node.js 充满热情，我们正在积极为我们的性能团队寻找贡献者。

现在准备单个可执行应用程序需要注入 Blob
去年，该项目一直致力于支持单一可执行应用程序 (SEA)，并于最近获得了初步支持。由于该功能仍处于实验阶段，团队将继续完善该方法。在 Node.js 20 中，构建单个可执行应用程序现在需要从 JSON 配置注入由 Node.js 准备的 blob，而不是注入原始 JS 文件。

例子：
``` json
sea-config.json

{
  "main": "hello.js",
  "output": "sea-prep.blob"
}
```
这会将 blob 写入文件`sea-prep.blob`。

`$ node --experimental-sea-config sea-config.json`
现在可以将该 blob 注入到二进制文件中。

进行此更改是为了允许将多个共存资源嵌入到 SEA（单一可执行应用程序）中，从而开辟新的用例。



### 网络加密 API
该项目致力于与其他 JavaScript 环境的互操作性。作为 Node.js 20 中的一个示例，Web Crypto API 函数的参数现在按照其 WebIDL 定义进行强制和验证，就像其他 Web Crypto API 实现一样。这进一步提高了与 Web Crypto API 的其他实现的互操作性。


### 官方支持 ARM64 Windows
Node.js 拥有广泛的平台和架构支持，人们似乎希望它能够在任何地方运行。我们很高兴地告诉大家，Node.js 现在包含适用于 ARM64 Windows 的二进制文件，允许在该平台上本机执行。MSI、zip/7z 包和可执行文件可从 Node.js 下载站点以及所有其他平台获取。CI 系统已更新，所有更改现已在 ARM64 Windows 上进行全面测试，以防止回归并确保兼容性。



### Web Assembly 系统接口 (WASI) 的进展
该项目继续致力于 Node.js 中的 WASI 实现。一些值得注意的进展是，尽管它是实验性的，但启用 WASI 不再需要命令行选项。这应该使它更容易食用。由于WASI团队期待着preview2做出一些改变来规划未来。这包括在调用时添加一个version 选项。new WASI()在 20.x 版本中，version是必需的并且没有默认值。这一点很重要，因为支持新版本的应用程序不会默认为可能过时的版本。然而，这确实意味着任何依赖于版本默认值的代码都需要更新以请求特定版本。





