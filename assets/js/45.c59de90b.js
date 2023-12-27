(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{376:function(s,t,a){"use strict";a.r(t);var r=a(4),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("大家好，学完前面两种架构的会议系统搭建，大家是不是已经迫不及待想要实现自己的私有化会议系统，或者想要直接在自己公司的业务中使用了？先不要急，如果你的业务中涉及和流媒体相关的使用场景，比如监控、"),t("code",[s._v("RTSP")]),s._v("、"),t("code",[s._v("RTMP")]),s._v(" 等，那么这节课的内容应该能合你胃口。")]),s._v(" "),t("p",[s._v("前面的课程讲的都是简单的音视频场景应用，而没有深入讲音视频本身的东西。想要深入了解音视频，那么必不可少的就是流媒体这一块的知识了。在正式开始学习流媒体服务"),t("code",[s._v("SRS")]),s._v(" 之前，我们先学习一些基本的流媒体相关知识。")]),s._v(" "),t("h2",{attrs:{id:"rtmp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rtmp"}},[s._v("#")]),s._v(" RTMP")]),s._v(" "),t("p",[s._v("Real-Time Messaging Protocol，简称"),t("code",[s._v("RTMP")]),s._v("，是一种支持实时在线视频流的数据传输技术，最初是用在流媒体服务和 "),t("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAdobe_Flash_Player",target:"_blank",rel:"noopener noreferrer"}},[s._v("Flash播放器"),t("OutboundLink")],1),s._v(" 之间传输多媒体流的。因此以前在浏览器中，只要有 Flash 播放器插件，就可以直接在线播放媒体流。然而在2021年左右，谷歌、微软等几大厂商集体做出决策（漏洞安全问题、封闭性、性能等多种因素），正式弃用。在谷歌浏览器 88 版本之后也将 Flash player 正式删除。")]),s._v(" "),t("p",[s._v("现在我们网页端是没法直接播放"),t("code",[s._v("RTMP")]),s._v("的，如果想要播放就必须转换成浏览器中播放器支持的流类型播放，比如：mp4、flv、hls等。")]),s._v(" "),t("p",[s._v("在实际使用场景中我们会用到"),t("code",[s._v("RTMP")]),s._v("的两种传输方式：推送和拉取，即：你可以将自己的视频通过"),t("code",[s._v("RTMP")]),s._v("推送到流媒体服务器和从流媒体拉取对应的流。")]),s._v(" "),t("p",[s._v("常用端口：1935。")]),s._v(" "),t("h2",{attrs:{id:"rtsp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rtsp"}},[s._v("#")]),s._v(" RTSP")]),s._v(" "),t("p",[s._v("Real Time Streaming Protocol ，简称 "),t("code",[s._v("RTSP")]),s._v("，它本身不会传输媒体流，而是充当客户端和与媒体服务端之间的控制通信，和"),t("code",[s._v("RTP")]),s._v("、"),t("code",[s._v("RTCP")]),s._v(" 协议搭配，用于媒体流的传输。")]),s._v(" "),t("h2",{attrs:{id:"rtp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rtp"}},[s._v("#")]),s._v(" RTP")]),s._v(" "),t("p",[s._v("全称：Realtime transport protocol，真正意义上的数据传输协议，数据包构成包含版本号、填充位、标记位、有效荷载类型（这里就是标识不同类型媒体的，比如 H.264 视频、G.711 音频等）、序列号、时间戳等，具体详细解释可以看"),t("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fzh.m.wikipedia.org%2Fzh-hans%2F%E5%AE%9E%E6%97%B6%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("我们只需要知道，RTP 包传输的就是我们音视频会话过程中所需要的流量，当然发送的底层协议还是通过 UDP，因此在前面的数据包构成中，我们可以看到序列号、时间戳参数，目的就是让接收端可以自定义缓冲区，用于乱序纠正或者音画同步。")]),s._v(" "),t("h2",{attrs:{id:"rtcp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rtcp"}},[s._v("#")]),s._v(" RTCP")]),s._v(" "),t("p",[s._v("全称：Real-time Transport Control Protocol 或 RTP Control Protocol ，或简写 RTCP，是 RTP 的姊妹协议，RTCP 本身并不传输数据，但和上面提到的 RTP 一起协作将媒体数据打包和发送。RTCP 收集相关媒体连接的统计信息，例如：传输字节数、网络状态、丢包状况、单向和双向网络延迟等等，这样可以控制服务质量，诊断网络状况。")]),s._v(" "),t("p",[s._v("我们的课程的主题，WebRTC 实现的会议系统通话过程中数据包的检测、反馈，都是通过这个协议。")]),s._v(" "),t("h2",{attrs:{id:"srs-服务器搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#srs-服务器搭建"}},[s._v("#")]),s._v(" SRS 服务器搭建")]),s._v(" "),t("p",[s._v("搭建前，按照惯例我们必须要熟悉下 SRS 具体是个什么东西。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21633c70f0504290922323572e30ae83~tplv-k3u1fbpfcp-jj-mark:1890:0:0:0:q75.awebp",alt:"img"}})]),s._v(" "),t("p",[s._v("看上面"),t("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fossrs.net%2Flts%2Fzh-cn%2Fdocs%2Fv4%2Fdoc%2Fintroduction",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1),s._v("描述，一个简单高效的实时视频服务器，支持各种通用的流媒体协议。常用案例举例：")]),s._v(" "),t("ul",[t("li",[s._v("RTMP 服务器；")]),s._v(" "),t("li",[s._v("RTMP 自动转 HLS、FLV；")]),s._v(" "),t("li",[s._v("分布式（K8S）部署；")]),s._v(" "),t("li",[s._v("WebRTC 推流拉流。小册会议功能核心；")]),s._v(" "),t("li",[s._v("HTTP API。可以获取服务端各种推流信息；")]),s._v(" "),t("li",[s._v("DVR 。支持将"),t("code",[s._v("RTMP")]),s._v("流录制成 FLV 或 MP4 文件。")])]),s._v(" "),t("p",[s._v("还有一些其他的功能，大家课后可以自己看看，这里不再多说。")]),s._v(" "),t("p",[s._v("实际上满足上面条件的开源流媒体服务很多，有大的有小的，比如 "),t("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FZLMediaKit%2FZLMediaKit",target:"_blank",rel:"noopener noreferrer"}},[s._v("ZLMediaKit"),t("OutboundLink")],1),s._v("，我们这节课主要是以 SRS 为切入点去实现我们第三套会议系统，等学完后大家可以看看用其他的开源流媒体服务代替 SRS，进而实现多平台兼容的会议系统。")]),s._v(" "),t("h3",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),t("p",[s._v("考虑到便捷性，我们使用容器化来部署。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("shell复制代码// "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1935")]),s._v(" RTMP的常用端口  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1985")]),s._v(" API接口端口  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("默认控制台访问端口 在这里我映射到宿主机8085端口\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" srs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1935")]),s._v(":1935 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1985")]),s._v(":1985 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8085")]),s._v(":8080 ossrs/srs:5.0.30\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("执行完上面的再继续：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("shell\n复制代码docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" srs:/usr/local/srs/conf /home/srs5/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这一步的目的是从容器中拷贝配置文件到宿主机的 "),t("code",[s._v("/home/srs5")]),s._v(" 目录，因为中间我们可能会配置一些其他的东西，如果在容器内部更改，那么不小心容器被删除，配置历史也就找不到了。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n复制代码docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" srs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("移除旧的容器，因为我们的目标是从里面拷贝配置文件，因此拷贝完后，这个容器也就没有必要存在了，而我们正式用的容器则是需要挂载上面拷贝配置所启动的容器。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("shell复制代码//临时变量，当前服务器的IP，如果是公网服务器的话则为公网IP 用户webrtc UDP 包的传输\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CANDIDATE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.101.99"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/srs5/conf/:/usr/local/srs/conf/ "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1935")]),s._v(":1935 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1985")]),s._v(":1985 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8085")]),s._v(":8080 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--env")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CANDIDATE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CANDIDATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v(":8000/udp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    ossrs/srs:5.0.30 ./objs/srs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" conf/docker.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("启动完成后，访问 IP+8085，公网服务器请记得开放安全组和防火墙端口。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a1bb6f0079b4773bd33dd7b75543a33~tplv-k3u1fbpfcp-jj-mark:1890:0:0:0:q75.awebp",alt:"img"}})]),s._v(" "),t("p",[s._v("看到这个界面，则表明 SRS 流媒体服务部署完成，当前界面点击进入 SRS 控制台：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/534315bc657047939e19169576fb3e31~tplv-k3u1fbpfcp-jj-mark:1890:0:0:0:q75.awebp",alt:"img"}})]),s._v(" "),t("p",[s._v("更改 API 端口，然后连接到 SRS 控制台实时监控，如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e11f4073e044ef3a2b17bea2ab54f22~tplv-k3u1fbpfcp-jj-mark:1890:0:0:0:q75.awebp",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"ffmpeg-相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg-相关命令"}},[s._v("#")]),s._v(" FFmpeg 相关命令")]),s._v(" "),t("p",[s._v("后面的测试需要用到一些 Ffmpeg 基础命令，这里给大家简要介绍下：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("yaml复制代码"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c copy：直接复制，不经过重新编码\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y 覆盖同名输出\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v：指定视频编码器 libx265 / libx264\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("a：指定音频编码器 aac\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("i：指定输入文件\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c：指定编码器 \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("an： 去除音频\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("vn： 去除视频流 \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("threads 5 指定多线程数\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("preset：指定输出的视频质量，会影响文件的生成速度，有以下几个可用的值 ultrafast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" superfast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" veryfast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" faster"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" medium"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" slow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" slower"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" veryslow。\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("b 设定视频流量，默认为200Kbit/s 内网设置2048\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v  设定视频流量，默认为200Kbit/s 内网设置 2048k 或 1024k\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("r 设定帧速率，默认为25\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("loop 1 表示图片无限循环\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("shortest 表示音频文件结束\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ar 指定音频采样率 比如48000\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ac 设定声音的Channel数\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("acodec 设定声音编解码器，未设定时则使用与输入流相同的编解码器\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("-acodec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 音频选项， 一般后面加copy表示拷贝\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("vcodec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("视频选项，一般后面加copy表示拷贝 h264则为h264编码\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("crf 在优先保证画面质量（也不太在乎转码时间）的情况下，使用"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("crf参数来控制转码是比较适宜的。这个参数的取值范围为0~51，其中0为无损模式，数值越大，画质越差，生成的文件却越小。从主观上讲，18~28是一个合理的范围。18被认为是视觉无损的（从技术角度上看当然还是有损的），它的输出视频质量和输入视频相当。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h3",{attrs:{id:"测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),t("p",[s._v("我们将某个 mp4 视频推送到流媒体服务器：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n复制代码ffmpeg "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v("  http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" copy "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" flv rtmp://192.168.101.99:1935/live/suke01\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c530fdd951e488e8d3b8922f903ae49~tplv-k3u1fbpfcp-jj-mark:1890:0:0:0:q75.awebp",alt:"img"}})]),s._v(" "),t("p",[s._v("然后用 SRS 自带的播放器查看推送的视频：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5f3a2626042a424a9f991fcf45ec41e4~tplv-k3u1fbpfcp-jj-mark:1890:0:0:0:q75.awebp",alt:"img"}})]),s._v(" "),t("p",[s._v("上面播放地址我们写的是 "),t("code",[s._v("FLV")]),s._v(" 地址，在 Ffmpeg 将视频流通过"),t("code",[s._v("RTMP")]),s._v(" 推送到流媒体服务器之后，SRS 会自动将该流转为 "),t("code",[s._v("FLV")]),s._v("，这样就可以直接在网页上播放了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9d6d002353d64c838a3ab538d6819860~tplv-k3u1fbpfcp-jj-mark:1890:0:0:0:q75.awebp",alt:"img"}})]),s._v(" "),t("p",[s._v("上面 SRS 监控台可以实时地看到正在推流的客户端以及播放的客户端，如果某个客户端正在观看视频流，可以通过控制台直接踢掉，而 SRS 的 HTTP API 也是支持这些功能的。")]),s._v(" "),t("h2",{attrs:{id:"http-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-api"}},[s._v("#")]),s._v(" HTTP API")]),s._v(" "),t("p",[s._v("访问端口 1985，我们可以看到 SRS API 的版本信息：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68331416486f4c34aa0f5ef6370a255b~tplv-k3u1fbpfcp-jj-mark:1890:0:0:0:q75.awebp",alt:"img"}})]),s._v(" "),t("p",[s._v("在"),t("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fossrs.net%2Flts%2Fzh-cn%2Fdocs%2Fv4%2Fdoc%2Fhttp-api",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1),s._v("也有对应的具体某个 API 的含义。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("API")]),s._v(" "),t("th",[s._v("举例")]),s._v(" "),t("th",[s._v("接口描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("versions")]),s._v(" "),t("td",[s._v("/api/v1/versions")]),s._v(" "),t("td",[s._v("获取服务器版本信息")])]),s._v(" "),t("tr",[t("td",[s._v("summaries")]),s._v(" "),t("td",[s._v("/api/v1/summaries")]),s._v(" "),t("td",[s._v("获取服务器的摘要信息")])]),s._v(" "),t("tr",[t("td",[s._v("rusages")]),s._v(" "),t("td",[s._v("/api/v1/rusages")]),s._v(" "),t("td",[s._v("获取服务器资源使用信息")])]),s._v(" "),t("tr",[t("td",[s._v("self_proc_stats")]),s._v(" "),t("td",[s._v("/api/v1/self_proc_stats")]),s._v(" "),t("td",[s._v("获取服务器进程信息")])]),s._v(" "),t("tr",[t("td",[s._v("system_proc_stats")]),s._v(" "),t("td",[s._v("/api/v1/system_proc_stats")]),s._v(" "),t("td",[s._v("获取服务器所有进程情况")])]),s._v(" "),t("tr",[t("td",[s._v("meminfos")]),s._v(" "),t("td",[s._v("/api/v1/meminfos")]),s._v(" "),t("td",[s._v("获取服务器内存使用情况")])]),s._v(" "),t("tr",[t("td",[s._v("features")]),s._v(" "),t("td",[s._v("/api/v1/features")]),s._v(" "),t("td",[s._v("获取系统支持的功能列表")])]),s._v(" "),t("tr",[t("td",[s._v("requests")]),s._v(" "),t("td",[s._v("/api/v1/requests")]),s._v(" "),t("td",[s._v("获取请求的信息，即当前发起的请求的详细信息")])]),s._v(" "),t("tr",[t("td",[s._v("vhosts")]),s._v(" "),t("td",[s._v("/api/v1/vhosts")]),s._v(" "),t("td",[s._v("获取服务器上的vhosts信息")])]),s._v(" "),t("tr",[t("td",[s._v("streams")]),s._v(" "),t("td",[s._v("/api/v1/streams")]),s._v(" "),t("td",[s._v("获取服务器的streams信息")])]),s._v(" "),t("tr",[t("td",[s._v("clients")]),s._v(" "),t("td",[s._v("/api/v1/clients")]),s._v(" "),t("td",[s._v("获取服务器的clients信息，默认获取前10个")])]),s._v(" "),t("tr",[t("td",[s._v("configs")]),s._v(" "),t("td",[s._v("/api/v1/configs")]),s._v(" "),t("td",[s._v("CUID配置，RAW API")])]),s._v(" "),t("tr",[t("td",[s._v("publish")]),s._v(" "),t("td",[s._v("/rtc/v1/publish/")]),s._v(" "),t("td",[s._v("WebRTC推流的API")])]),s._v(" "),t("tr",[t("td",[s._v("play")]),s._v(" "),t("td",[s._v("/rtc/v1/play/")]),s._v(" "),t("td",[s._v("WebRTC播放流的API")])])])]),s._v(" "),t("p",[s._v("注意最后面两个 API 接口，这两个是 WebRTC 相关的，也是和我们会议系统搭建相关的。")]),s._v(" "),t("h2",{attrs:{id:"http-回调"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-回调"}},[s._v("#")]),s._v(" HTTP 回调")]),s._v(" "),t("p",[s._v("很多时候你在推流完成之后，如果是在业务中的话，你需要知道推送是否成功，或者其他的反馈，而 HTTP 回调就是干这个事情的。")]),s._v(" "),t("div",{staticClass:"language-ruby line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ruby"}},[t("code",[s._v("ruby复制代码 vhost your_vhost "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    http_hooks "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用回调配置")]),s._v("\n        enabled         on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("推流回调配置 回调参数会返回正在推送的流的 host 、ip、client、streamId参数  这些参数在业务中我们可以应用 从而控制对应的推流客户端 支持多个地址配置\n        on_publish      http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8085")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("streams http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".101")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8085")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("streams"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("停止推流监听 回调接口\n        on_unpublish    http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8085")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("streams http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".101")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8085")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("streams"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("播放回调\n        on_play         http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8085")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sessions http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".101")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8085")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sessions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("..")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("更多配置大家可以参考 "),t("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fossrs.net%2Flts%2Fzh-cn%2Fdocs%2Fv4%2Fdoc%2Fhttp-callback",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1),s._v(" 最新更新。")]),s._v(" "),t("h2",{attrs:{id:"课后题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#课后题"}},[s._v("#")]),s._v(" 课后题")]),s._v(" "),t("p",[s._v("搭建完成后请大家推流自测，FFmpeg 常用参数以及在线测试视频我在我笔记中也整理了（"),t("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fblog.wangsrbus.cn%2Farchives%2Fffmpeg-chang-yong-can-shu-yi-ji-hua-zhong-hua-ji-chu-ming-ling.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("详细点击查看"),t("OutboundLink")],1),s._v("），里面有各种 画中画 画面合成的案例，有问题留言或者在社群里沟通交流。")])])}),[],!1,null,null,null);t.default=e.exports}}]);