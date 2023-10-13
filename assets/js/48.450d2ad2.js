(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{378:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/GeorgeHcc/GeorgeHcc@main/assets/blog/images.png",alt:""}})]),s._v(" "),t("p",[s._v("2023年4月18日新发布的node.js "),t("Badge",{attrs:{text:"v20"}}),s._v("版本,有许多值得关注的点，官方计划将于2023/10月正式成为长期维护版本，一起来看看都有哪些新特性！\n")],1),s._v(" "),t("h2",{attrs:{id:"_1-新增权限模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-新增权限模型"}},[s._v("#")]),s._v(" 1.新增权限模型")]),s._v(" "),t("p",[s._v("这是nodev20新增的特性，不知道是不是"),t("s",[s._v("抄")]),s._v("借鉴了deno😂\nNode.js 权限模型是一种实验性机制，用于在执行期间限制对特定资源的访问。")]),s._v(" "),t("p",[s._v("在包含权限模型的第一个版本中，功能具有以下功能：")]),s._v(" "),t("ul",[t("li",[s._v("限制对文件系统的访问（读和写）\n"),t("ul",[t("li",[s._v("使用"),t("code",[s._v("--allow-fs-read")]),s._v("和"),t("code",[s._v("--allow-fs-write")])])])]),s._v(" "),t("li",[s._v("限制访问"),t("code",[s._v("child_process")]),s._v(" "),t("ul",[t("li",[s._v("使用"),t("code",[s._v("--allow-child-process")])])])]),s._v(" "),t("li",[s._v("限制访问"),t("code",[s._v("worker_threads")]),s._v(" "),t("ul",[t("li",[s._v("使用"),t("code",[s._v("--allow-worker")])])])]),s._v(" "),t("li",[s._v("限制对本机插件的访问（与标志相同"),t("code",[s._v("--no-addons")]),s._v("）\n"),t("ul",[t("li",[s._v("可用权限由标志记录"),t("code",[s._v("--experimental-permission")]),s._v(" 。")])])])]),s._v(" "),t("p",[s._v("当使用 启动 "),t("code",[s._v("Node.js")]),s._v(" 时"),t("code",[s._v("--experimental-permission")]),s._v("，访问文件系统、生成进程和使用的能力"),t("code",[s._v("node:worker_threads")]),s._v("将受到限制。")]),s._v(" "),t("p",[s._v("通过引入"),t("code",[s._v("--allow-fs-read和--allow-fs-write")]),s._v("标志，使用 Node.js 的开发人员现在可以更好地控制文件系统访问。这些实验性功能允许更精细地控制 Node.js 进程可以访问文件系统的哪些部分。")]),s._v(" "),t("p",[s._v("要启用这些标志，开发人员可以使用该"),t("code",[s._v("--experimental-permission")]),s._v("标志以及所需的权限。例如，运行以下命令允许对整个文件系统进行读写访问：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" --experimental-permission --allow-fs-read"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("* --allow-fs-write"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("* index.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("开发人员还可以通过向标志传递逗号分隔值来指定文件系统访问的特定路径。例如，以下命令允许对/tmp/文件夹进行写访问：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" --experimental-permission --allow-fs-write"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/tmp/ --allow-fs-read"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/index.js index.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("通配符模式还可用于允许一次访问多个文件或文件夹。例如，以下命令允许对/home/目录中以 开头的所有文件和文件夹进行读取访问test：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" --experimental-permission --allow-fs-read"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/test* index.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("permission当启用权限模型时，可以使用对象的新属性process在运行时检查是否已授予某个权限。")]),s._v(" "),t("div",{staticClass:"language-JavaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("permission"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("has")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs.write'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\nprocess"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("permission"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("has")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs.write'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/nodejs/protected-folder'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_2-esm-loader-hooks接近稳定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-esm-loader-hooks接近稳定"}},[s._v("#")]),s._v(" 2.ESM loader hooks接近稳定")]),s._v(" "),t("p",[s._v("通过loader( ) 提供的自定义 ESM生命周期hooks"),t("code",[s._v("--experimental-loader=./foo.mjs")]),s._v("现在在与主线程隔离的专用线程中运行。这为加载程序提供了单独的范围，并确保加载程序和应用程序代码之间不会交叉污染。")]),s._v(" "),t("p",[s._v("与浏览器行为保持一致，"),t("code",[s._v("import.meta.resolve()")]),s._v("现在同步返回；请注意，resolve如果加载程序作者愿意，用户加载程序中的挂钩可以保持异步，并且"),t("code",[s._v("import.meta.resolve")]),s._v("仍然会在应用程序代码中同步返回。")]),s._v(" "),t("blockquote",[t("p",[s._v("这些更改是将 ESM 加载程序标记为稳定之前的最后一个未完成的项目。一旦社区没有报告重大错误一段时间后，我们打算将 loader 标志以及import.meta.resolve和 hook 标记resolve为load稳定。这将使 ESM 得到更广泛的采用，因为仪器供应商等重要支持者将拥有稳定的 API 来构建分析和报告库。")])]),s._v(" "),t("blockquote",[t("p",[s._v("由 Anna Henningsen、Antoine du Hamel、Geoffrey Booth、Guy Bedford、Jacob Smith 和 Michaël Zasso 在#44710中贡献。")])]),s._v(" "),t("blockquote",[t("p",[s._v("V8 11.3\n与往常一样，Node.js 中包含了新版本的 V8 引擎（更新至版本 11.3，它是 Chromium 113 的一部分），带来了改进的性能和新的语言功能，包括：")])]),s._v(" "),t("blockquote",[t("p",[s._v("String.prototype.isWellFormed 和 toWellFormed\n通过复制更改 Array 和 TypedArray 的方法\n可调整大小的 ArrayBuffer 和可增长的 SharedArrayBuffer\n具有设置符号+字符串属性的 RegExp v 标志\nWebAssembly 尾调用\nV8 更新是 Michaël Zasso 在#47251中的贡献。")])]),s._v(" "),t("h2",{attrs:{id:"_3-稳定的测试运行器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-稳定的测试运行器"}},[s._v("#")]),s._v(" 3.稳定的测试运行器")]),s._v(" "),t("p",[s._v("Node.js 版本 20 的最新更新包括对 "),t("code",[s._v("test_runner")]),s._v(" 模块的重要更改。最近更新后，该模块已被标记为稳定。稳定的测试运行程序包括用于编写和运行测试的构建块，包括：")]),s._v(" "),t("ul",[t("li",[s._v("describe, it/test和构建测试文件的钩子")]),s._v(" "),t("li",[s._v("mocking")]),s._v(" "),t("li",[s._v("watch mode 观察者模式")]),s._v(" "),t("li",[t("code",[s._v("node --test")]),s._v("用于并行运行多个测试文件\n测试运行程序还包括一些尚未稳定的部分，包括报告器和代码覆盖率。")])]),s._v(" "),t("p",[s._v("下面是官方给的示例：")]),s._v(" "),t("div",{staticClass:"language-JavaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mock "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node:test'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" assert "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node:assert'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" fs "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node:fs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("method")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'readFile'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'synchronous passing test'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// This test passes because it does not throw an exception.")]),s._v("\n  assert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("strictEqual")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("readFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"_4-性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-性能优化"}},[s._v("#")]),s._v(" 4.性能优化")]),s._v(" "),t("p",[s._v("新成立的 Node.js 性能团队自上次主要版本以来重新关注性能。Node.js 20 对运行时的基本部分进行了许多改进，包括 URL、fetch()和EventTarget。")]),s._v(" "),t("blockquote",[t("p",[s._v("不知道是不是bun.js给的压力😂")])]),s._v(" "),t("p",[s._v("初始化的成本EventTarget已减少一半，从而可以更快地访问所有使用它的子系统。此外，V8 Fast API 调用已被用来提高 API 的性能，例如URL.canParse()计时器。")]),s._v(" "),t("p",[s._v("Node.js 20 包括特定的更改，例如 Ada 的更新版本 2.0，这是一个用 C++ 编写的快速且符合规范的 URL 解析器。")]),s._v(" "),t("p",[s._v("期待着提高性能的新方法，我们目前正在努力通过重构来消除对流、、和字符串解码器的品牌验证检查，从而降低符合规范的URL成本URLSearchParams。这有助于支持我们在有意义的情况下遵守规范的总体目标。")]),s._v(" "),t("p",[s._v("如果您对性能和 Node.js 充满热情，我们正在积极为我们的性能团队寻找贡献者。")]),s._v(" "),t("p",[s._v("现在准备单个可执行应用程序需要注入 Blob\n去年，该项目一直致力于支持单一可执行应用程序 (SEA)，并于最近获得了初步支持。由于该功能仍处于实验阶段，团队将继续完善该方法。在 Node.js 20 中，构建单个可执行应用程序现在需要从 JSON 配置注入由 Node.js 准备的 blob，而不是注入原始 JS 文件。")]),s._v(" "),t("p",[s._v("例子：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("sea-config.json\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"output"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sea-prep.blob"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("这会将 blob 写入文件"),t("code",[s._v("sea-prep.blob")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("$ node --experimental-sea-config sea-config.json")]),s._v("\n现在可以将该 blob 注入到二进制文件中。")]),s._v(" "),t("p",[s._v("进行此更改是为了允许将多个共存资源嵌入到 SEA（单一可执行应用程序）中，从而开辟新的用例。")]),s._v(" "),t("h3",{attrs:{id:"网络加密-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络加密-api"}},[s._v("#")]),s._v(" 网络加密 API")]),s._v(" "),t("p",[s._v("该项目致力于与其他 JavaScript 环境的互操作性。作为 Node.js 20 中的一个示例，Web Crypto API 函数的参数现在按照其 WebIDL 定义进行强制和验证，就像其他 Web Crypto API 实现一样。这进一步提高了与 Web Crypto API 的其他实现的互操作性。")]),s._v(" "),t("h3",{attrs:{id:"官方支持-arm64-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官方支持-arm64-windows"}},[s._v("#")]),s._v(" 官方支持 ARM64 Windows")]),s._v(" "),t("p",[s._v("Node.js 拥有广泛的平台和架构支持，人们似乎希望它能够在任何地方运行。我们很高兴地告诉大家，Node.js 现在包含适用于 ARM64 Windows 的二进制文件，允许在该平台上本机执行。MSI、zip/7z 包和可执行文件可从 Node.js 下载站点以及所有其他平台获取。CI 系统已更新，所有更改现已在 ARM64 Windows 上进行全面测试，以防止回归并确保兼容性。")]),s._v(" "),t("h3",{attrs:{id:"web-assembly-系统接口-wasi-的进展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-assembly-系统接口-wasi-的进展"}},[s._v("#")]),s._v(" Web Assembly 系统接口 (WASI) 的进展")]),s._v(" "),t("p",[s._v("该项目继续致力于 Node.js 中的 WASI 实现。一些值得注意的进展是，尽管它是实验性的，但启用 WASI 不再需要命令行选项。这应该使它更容易食用。由于WASI团队期待着preview2做出一些改变来规划未来。这包括在调用时添加一个version 选项。new WASI()在 20.x 版本中，version是必需的并且没有默认值。这一点很重要，因为支持新版本的应用程序不会默认为可能过时的版本。然而，这确实意味着任何依赖于版本默认值的代码都需要更新以请求特定版本。")])])}),[],!1,null,null,null);t.default=n.exports}}]);