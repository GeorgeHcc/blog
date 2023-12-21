(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{370:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("这节课我们正式进入第二阶段。实战开始前，我们先来了解下 "),a("code",[s._v("Janus")]),s._v(" 是什么，以及我们为何用 "),a("code",[s._v("Janus")]),s._v("？此外，我们还需要补充一个概念："),a("code",[s._v("WebRTC")]),s._v("网关。")]),s._v(" "),a("p",[s._v("音视频时代，简单的音视频通话功能已经远远无法承载这个时代的更多需求，比如视频云录制、呼叫转移、视频流 AI 检测、视频流增强、信令暂存、和已有其他通信协议互相嫁接等等。这些庞大且涉及到复杂计算的能力，必须交给具有一定能力的服务来做，因此就有了"),a("code",[s._v("WebRTC")]),s._v("网关，本节课所提到的 Janus 就是其中一种开源且稳定更新的"),a("code",[s._v("WebRTC")]),s._v("网关。")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("Janus 相关地址")])]),s._v(" "),a("ul",[a("li",[s._v("Janus 官网地址："),a("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fjanus.conf.meetecho.com%2Fdocs%2F",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("li",[s._v("Janus 仓库地址："),a("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmeetecho%2Fjanus-gateway",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("li",[s._v("Janus 非官方容器构建仓库 ："),a("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FwangsrGit119%2Fjanus-webrtc-gateway-docker",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1),s._v("。")])])]),s._v(" "),a("h2",{attrs:{id:"janus-具有的基本功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#janus-具有的基本功能"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Janus 具有的基本功能")])]),s._v(" "),a("ul",[a("li",[s._v("回声测试、会议桥、媒体记录器、SIP 网关等基本功能。")]),s._v(" "),a("li",[s._v("可插拔的，按需引入所需的功能，比如"),a("code",[s._v("会议功能、p2p通信功能、录制功能、播放第三方媒体流、屏幕共享")]),s._v("等等，要实现对应功能，可单独引入对应插件，因为 "),a("code",[s._v("Janus")]),s._v(" 的设计架构就是插拔式的。")]),s._v(" "),a("li",[s._v("自带用户统计，只需要按照特定的格式去请求即可，相当于给你提供了 WebSocket 服务器，你只需要按照规范来即可。")]),s._v(" "),a("li",[s._v("使用"),a("code",[s._v("json")]),s._v("作为向服务器请求服务的参数，简洁。")]),s._v(" "),a("li",[s._v("事件回调，接受自定义接口作为回调接口传回事件数据。")])]),s._v(" "),a("p",[s._v("看上面的基本功能，我们可以很清晰地知道，有了 "),a("code",[s._v("Janus")]),s._v("，我们就无需自己实现信令服务器。")]),s._v(" "),a("h2",{attrs:{id:"janus高级功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#janus高级功能"}},[s._v("#")]),s._v(" Janus高级功能")]),s._v(" "),a("p",[s._v("看官网的第一眼我们就能够发现，整个首页最突出的一个单词 "),a("code",[s._v("multistream")]),s._v("，这也是 "),a("code",[s._v("Janus")]),s._v(" 从 0.X 版本过渡到 1.X 版本的重要体现。这个突出功能允许客户端可以发送多个视频流给客户端，而不用局限于只能发送一个视频流造成需要频繁切换画面的窘境。")]),s._v(" "),a("p",[s._v("另一个重要的功能就是 "),a("code",[s._v("simulcast")]),s._v("，这个功能允许客户端在单个会话中同时发送多个不同分辨率的视频流。如此一来，接收端就可以根据实际需要动态选择要接收的视频流，提高视频通信的效率和质量。")]),s._v(" "),a("p",[s._v("大家可以畅想一下，在多人会议中，全部参会人员的网络状况是不是都稳定？和我们看视频一样，视频格式有高清、超清、蓝光、4K 等不同的分辨率，就是为了适应不同客户端、不同的网络状况。")]),s._v(" "),a("p",[s._v("好了，了解完 "),a("code",[s._v("Janus")]),s._v(" 的大体功能，接下来就是实战搭建了。")]),s._v(" "),a("h2",{attrs:{id:"网关服务搭建说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网关服务搭建说明"}},[s._v("#")]),s._v(" "),a("strong",[s._v("网关服务搭建说明")])]),s._v(" "),a("p",[a("code",[s._v("Janus")]),s._v(" 是使用 C++ 开发的，中间使用了很多其他的开源组件，因此环境配置也比较麻烦。但是流行的服务容器化趋势带给我们诸多便利，"),a("code",[s._v("Janus")]),s._v(" 也一样有对应的容器版本。大家在 Docker Hub 上输入关键词 "),a("code",[s._v("janus-webrtc-gateway-docker")]),s._v(" 就可以看到有很多不同用户构建的容器版本：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19a6c222f9d341e5843723dd46827765~tplv-k3u1fbpfcp-jj-mark:1890:0:0:0:q75.awebp",alt:"img"}})]),s._v(" "),a("p",[s._v("值得注意的是，前面两个下载量较多的已经是三年前的了，而 "),a("code",[s._v("Janus")]),s._v(" 至今已经更新 N 多个版本了，老版本必然会和新版本不适配，请大家看下面官网说明：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d58fce8a4bd4b0894a5dad03a2ffc83~tplv-k3u1fbpfcp-jj-mark:1890:0:0:0:q75.awebp",alt:"img"}})]),s._v(" "),a("p",[s._v("当然大家无需担心新版本没有对应的容器版本，大家可以看看上面截图中的第三个，这个容器版本是我定期从官网拉取最新代码构建的，和 "),a("code",[s._v("Janus")]),s._v(" 新版本对应（ "),a("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fhub.docker.com%2Fr%2Fsucwangsr%2Fjanus-webrtc-gateway-docker",target:"_blank",rel:"noopener noreferrer"}},[s._v("DockerHub"),a("OutboundLink")],1),s._v(" & "),a("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FwangsrGit119%2Fjanus-webrtc-gateway-docker",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1),s._v(" ）。如下图中左侧是我构建的容器版本，右侧是对应 Janus 的版本，每当它发版我都会去构建最新的容器。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/776f9b22396843ce84c4960e76891a2e~tplv-k3u1fbpfcp-jj-mark:1890:0:0:0:q75.awebp",alt:"img"}})]),s._v(" "),a("p",[a("strong",[s._v("服务器搭建")])]),s._v(" "),a("ol",[a("li",[s._v("准备服务器，且下载安装 Docker 和 Docker Compose 环境（这个网上很多我就不再介绍）。")]),s._v(" "),a("li",[s._v("路径以及配置文件准备（网络不通畅的同学直接使用 "),a("code",[s._v("GitHub1s")]),s._v("打开拷贝内容即可），如果你下载下来了，那么建议你再检查下文件内容是否正确。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1d3c6f8de2714c17b58bc878d05eab36~tplv-k3u1fbpfcp-jj-mark:1890:0:0:0:q75.awebp",alt:"img"}})]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("shell复制代码mkdir "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /home/janus-docker/conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /home/janus-docker/ssl\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /home/janus-docker/record\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/janus-docker/conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 下载下面配置文件 如果网络打不开可以尝试 github 替换为 github1s如上图")]),s._v("\nhttps://github.com/meetecho/janus-gateway/blob/master/conf/janus.jcfg.sample.in\nhttps://github1s.com/meetecho/janus-gateway/blob/master/conf/janus.transport.http.jcfg.sample\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" janus.jcfg.sample.in janus.jcfg\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" janus.transport.http.jcfg.sample janus.transport.http.jcfg\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 后面我们还会遇到各种插件同样的下载方法 最核心的就是上面俩个")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ol",[a("li",[s._v("docker-compose 文件创建以及路径挂载。")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v("yaml复制代码cd /home/janus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("docker "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&&")]),s._v(" touch docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("compose.yml\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("yaml文件内容配置"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.2.0'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("janus-gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sucwangsr/janus-webrtc-gateway-docker:1.2.0'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/bin/janus"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-F"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/etc/janus"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("network_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/janus-docker/conf/janus.transport.http.jcfg:/usr/local/etc/janus/janus.transport.http.jcfg"')]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/janus-docker/conf/janus.jcfg:/usr/local/etc/janus/janus.jcfg"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/janus-docker/record:/home/janus-gateway/record"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/janus-docker/ssl:/home/ssl"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ol",[a("li",[s._v("修改基础配置。")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("janus.jcfg")]),s._v(" 中找下面条目配置修改，一定要注意找到对应的位置哦。")]),s._v(" "),a("p",[a("code",[s._v("api_secret")]),s._v(" 为我们后面常用的重点配置，Rest API 的通行证。")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v("yaml复制代码"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##新版本中下面这几个路径在配置文件中是@@变量赋值，这里大家可以直接写成下面的")]),s._v('\nconfigs_folder = "/usr/local/etc/janus"                        \nplugins_folder = "/usr/local/lib/janus/plugins"                   \ntransports_folder = "/usr/local/lib/janus/transports"     \nevents_folder = "/usr/local/lib/janus/events"                    \nloggers_folder = "/usr/local/lib/janus/loggers"\n'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('\napi_secret = "sujanxxusrocks"  '),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 客户端使用restApi用的token 请自行配置自己的(重点配置)")]),s._v('\ntoken_auth_secret = "sujanxxusrocks" '),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 使用ws使用的token 请自行配置自己的")]),s._v("\ntoken_auth = true  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 使用开启校验ws")]),s._v('\nadmin_secret = "suaanusoverlord"  '),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#管理员 请自行配置自己的")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("media")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ipv6 = true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#min_nack_queue = 500")]),s._v('\n        rtp_port_range = "17001'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('19001" '),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##  请开放公网服务器的安全组(UDP)")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#dtls_mtu = 1200")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#no_media_timer = 1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#slowlink_threshold = 4")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#twcc_period = 100")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#dtls_timeout = 500")]),s._v("\n。。。。。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 当然还有其他的配置 比如stun 、turn、nat_1_1_mapping等这里先不用管")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("blockquote",[a("p",[a("code",[s._v("janus.transport.http.jcfg")]),s._v(" 配置")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("yaml复制代码general")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v('                                                \n        base_path = "/janus"      '),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#基础路径")]),s._v("\n        http = true            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http开启  ")]),s._v("\n        port = 18088            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http端口                              ")]),s._v("\n        https = false           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https是否启用配置；启用的话后面就要配置ssl证书。                  ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",[a("li",[s._v("启动。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("shell复制代码cd /home/janus-docker \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 启动完毕后")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" logs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("\n------------------部分日志-------------------------\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Loading plugin "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'libjanus_echotest.so'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JANUS EchoTest plugin initialized"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Loading plugin "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'libjanus_audiobridge.so'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Joining Janus requests handler thread\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Sessions watchdog started\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JANUS AudioBridge plugin initialized"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Loading plugin "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'libjanus_recordplay.so'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JANUS Record"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("Play plugin initialized"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Loading plugin "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'libjanus_sip.so'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JANUS SIP plugin initialized"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Loading plugin "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'libjanus_streaming.so'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JANUS Streaming plugin initialized"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Transport plugins folder: /usr/local/lib/janus/transports\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Loading transport plugin "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'libjanus_websockets.so'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" libwebsockets logging: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Websockets server started "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8188")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JANUS WebSockets transport plugin initialized"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Loading transport plugin "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'libjanus_http.so'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" WebSockets thread started\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" HTTP webserver started "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18088")]),s._v(", /janus path listener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Admin/monitor HTTP webserver started "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18089")]),s._v(", /adminsuc path listener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JANUS REST "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HTTP/HTTPS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" transport plugin initialized"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("WARN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" libnice version outdated: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(".15.1 installed, at least "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(".16 recommended. Notice the installed version was checked at build time: "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" you updated libnice "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the meanwhile, re-configure and recompile to get rid of this warning\njanus-docker-janus-gateway-1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" HTTP transport timer started\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[a("strong",[s._v("温馨提示")])]),s._v(" "),a("p",[s._v("搭建过程中我们需要注意的几个点：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("rtp_port_range")]),s._v("：RTP 端口配置，"),a("code",[s._v("Janus")]),s._v(" 作为 "),a("code",[s._v("WebRTC 的网关")]),s._v("，最离不开的就是和 “流” 打交道，WebRTC 实现的视频音频通话，涉及到的所有的媒体流发送和接收，都是 通过RTP 协议包。网关也一样，在每个客户端和网关服务器连接的过程中，这个流首先是要经过 "),a("code",[s._v("Janus")]),s._v(" 的。因此，这个端口必须要放行，"),a("code",[s._v("Janus")]),s._v(" 是自己配置了端口的，但是有些时候，我们不方便将该区间的端口开放，因此这个参数的目的就是让我们可以动态更改默认的 RTP 端口。")]),s._v(" "),a("li",[a("code",[s._v("http/https")]),s._v("：这俩参数大家可以同时启用，也可以只用其中一个，我建议是只开放 Http 即可，要想使用 Https ，则可以通过该服务器指定的域名搭配 Nginx 代理映射即可，这样就无需单独为 "),a("code",[s._v("Janus")]),s._v(" 维护一份 Https 证书。")]),s._v(" "),a("li",[s._v("我在配置中注释的配置文件路径，这些路径在老版本中都是放行且固定的，无需自己配置。但是新版本中这些路径是要自己手动打开且自行配置的。")]),s._v(" "),a("li",[a("strong",[a("code",[s._v("nat_1_1_mapping")]),s._v("：这个参数在内网映射公网时是用的到的，比如你的内部地址：192.168.101.1，要映射到公网 x.x.x.x，那么你就要配置这个参数。尤其你的"),a("code",[s._v("Janus")]),s._v("部署在公网，那么这个地址填写公网IP，当然一般私有化都是在内网的，可以不用处理")]),s._v("。")])]),s._v(" "),a("p",[s._v("好了，这节课我们了解了"),a("code",[s._v("WebRTC")]),s._v("网关 "),a("code",[s._v("Janus")]),s._v("，同时也在服务器上搭建了该网关，下节课我们来学习如何将 Janus 用到我们的实际项目中。")]),s._v(" "),a("h2",{attrs:{id:"课后题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课后题"}},[s._v("#")]),s._v(" 课后题")]),s._v(" "),a("p",[s._v("自己按照上面的步骤，完整部署一个 "),a("code",[s._v("Janus")]),s._v(" 网关服务。")])])}),[],!1,null,null,null);a.default=e.exports}}]);