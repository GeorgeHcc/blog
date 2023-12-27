(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{365:function(v,_,e){"use strict";e.r(_);var o=e(4),c=Object(o.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"开篇-使用-webrtc-打造私有化会议系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开篇-使用-webrtc-打造私有化会议系统"}},[v._v("#")]),v._v(" 开篇 ｜ 使用 WebRTC 打造私有化会议系统")]),v._v(" "),_("p",[v._v("Hello，我是 suke，之前写过一些基于 "),_("code",[v._v("WebRTC")]),v._v(" 和 "),_("code",[v._v("SpringBoot")]),v._v(" 组合实现单人、多人聊天系统的文章，有很多同学喜欢。所以在此，我想将 "),_("code",[v._v("WebRTC")]),v._v(" 和开源界很多有影响力的流媒体服务器组合起来，去实现会议、直播等场景。")]),v._v(" "),_("h2",{attrs:{id:"为什么要实现私有会议系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要实现私有会议系统"}},[v._v("#")]),v._v(" 为什么要实现私有会议系统？")]),v._v(" "),_("p",[v._v("虽说公有云已经有了各种基于 "),_("code",[v._v("WebRTC")]),v._v(" 的会议服务，但是终究是公有云。可以预见，随着企业安全越来越受到重视，很多企业都想要私有部署。目前支持公有服务私有化部署的产品又很少，即使有也很昂贵。")]),v._v(" "),_("p",[v._v("从用户角度看，面对一个普通的会议，却需要下载不同的 App 才能与不同的客户语音视频，但凡参会人数稍微多一点，这些软件就提示用户升级到付费版本才可以，这无疑是个痛点。如果我们能够搭建一套会议系统，"),_("strong",[v._v("仅需浏览器")]),v._v("就可以支持语音视频功能的话，那岂不是可以解决这些问题？")]),v._v(" "),_("p",[v._v("因此，自己实现一套私有会议系统是很有必要的，而"),_("strong",[v._v("WebRTC****就是首选。")])]),v._v(" "),_("h2",{attrs:{id:"webrtc-的优势"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webrtc-的优势"}},[v._v("#")]),v._v(" WebRTC 的优势")]),v._v(" "),_("p",[_("code",[v._v("WebRTC")]),v._v(" 的诞生，就是基于浏览器的多媒体即时通信（2011 年 5 月，Google 发布了一个"),_("strong",[v._v("开源项目")]),v._v("，用于基于浏览器的实时通信，称为 "),_("code",[v._v("WebRTC")]),v._v("。紧随其后的是 "),_("code",[v._v("IETF")]),v._v(" 中相关协议的标准化工作以及 "),_("code",[v._v("W3C")]),v._v(" 中的浏览器 API ），对于在 "),_("code",[v._v("Web")]),v._v(" 端实现会议这个需求而言，它简直天生自带光环。")]),v._v(" "),_("p",[v._v("而且我们知道，"),_("code",[v._v("Web")]),v._v(" 端实现会议系统的前置条件：**实时双向音视频、主流浏览器支持、开发者容易入手、使用范围广且技术开源成熟，**同时满足上述条件，大范围内也就 "),_("code",[v._v("WebRTC")]),v._v(" 了。")]),v._v(" "),_("p",[v._v("不仅如此，"),_("strong",[v._v("WebRTC")]),v._v(" **还具有"),_("strong",[_("strong",[v._v("毫秒级的延迟特性")])]),v._v("，**这一点在直播领域尤其重要，比如有人在直播间发了一个口令红包，3 秒后你才看到发红包的画面，这时再输入口令那红包岂不是早飞了？"),_("code",[v._v("WebRTC")]),v._v(" 本身就是多媒体即时通讯技术，使用 "),_("code",[v._v("WebRTC")]),v._v(" 传输直播流几乎是实时传输。如果将直播流转换 "),_("code",[v._v("WebRTC")]),v._v(" 拉流的方式，相当于客户端和直播服务端点对点连接，无需经过各种转换，相比于传统 "),_("code",[v._v("RTMP")]),v._v("/"),_("code",[v._v("FLV")]),v._v(" 流经过 N 层 CDN 再播放延迟更低。")]),v._v(" "),_("p",[v._v("当然，作为开发人员，选择 "),_("code",[v._v("WebRTC")]),v._v(" 还有一个原因：它在浏览器端成熟的 "),_("code",[v._v("API")]),v._v(" ，我们无需多少代码就可以满足无客户端视频通话的目的。")]),v._v(" "),_("p",[v._v("我们前面提过，"),_("code",[v._v("WebRTC")]),v._v(" 的诞生就是基于浏览器端的，因此在浏览器端的 ```API"),_("code",[v._v("必然是成熟的。但")]),v._v("WebRTC` 并不是只能浏览器里使用。")]),v._v(" "),_("p",[v._v("浏览器中的 "),_("code",[v._v("API")]),v._v(" 怎么来的？肯定是内核中提供的，那么内核是怎么来的？那必然不是用 "),_("code",[v._v("JavaScript")]),v._v(" 写的，据我了解是用 "),_("code",[v._v("C++")]),v._v("，但 WebRTC 在浏览器端暴露出来的 API，我们是可以直接通过 "),_("code",[v._v("JavaScript")]),v._v(" 访问的。其他语言也可以访问这些 "),_("code",[v._v("API")]),v._v("，比如在 "),_("code",[v._v("Java")]),v._v(" 中，如果要使用 "),_("code",[v._v("WebRTC")]),v._v(" 的相关 "),_("code",[v._v("API")]),v._v("，可以找谷歌开源的相关 "),_("code",[v._v("Java")]),v._v(" 库，去间接地调用 "),_("code",[v._v("C++")]),v._v(" 代码实现。")]),v._v(" "),_("p",[v._v("可以说，"),_("code",[v._v("WebRTC")]),v._v(" 是将前端技术和音视频嫁接起来最佳的媒介，对于前端同学而言，学习 "),_("code",[v._v("WebRTC")]),v._v(" 作为音视频入门也是很有意义的。")]),v._v(" "),_("h2",{attrs:{id:"课程设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#课程设计"}},[v._v("#")]),v._v(" 课程设计")]),v._v(" "),_("p",[v._v("我们小册将按照**“由简单场景再到复杂场景”的逻辑“，**提供三种架构来设计实现会议系统。")]),v._v(" "),_("p",[v._v("虽然我们的初衷是实现一套会议系统，但当面对不同场景时，我们需要知道还有哪些更适合的方案。")]),v._v(" "),_("ul",[_("li",[v._v("当会议场景只要人员"),_("strong",[v._v("点对点，或者偶尔需要少量人员多对多")]),v._v("时，我们搭建一套简易架构，无需任何第三方服务的会议系统即可；")]),v._v(" "),_("li",[v._v("当会议场景"),_("strong",[v._v("基本都是多对多")]),v._v("，而且需要实时监听用户网络状况时，上一种架构就没法满足了，我们会用第二种机构实现会议系统。")]),v._v(" "),_("li",[v._v("**其他的场景，比如"),_("strong",[_("strong",[v._v("在")])]),v._v("会议****或通话过程中直播某些用户的画面，**像公开庭审等司法场景，那么前两种架构也无法满足我们，就需要第三种架构来现实会议系统。")])]),v._v(" "),_("p",[v._v("当然，为了实现三种不同架构的会议系统，我们也需要先了解必要的 "),_("code",[v._v("WebRTC")]),v._v(" 基础知识和相关 API。另外，"),_("code",[v._v("WebRTC")]),v._v(" 除了会议系统，还可以实现很多花样。基于此，我们小册将分为 "),_("strong",[v._v("五")]),v._v(" 部分。")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("基础知识")]),v._v("："),_("code",[v._v("WebRTC")]),v._v(" 的基本认识和相关 API 学习。")]),v._v(" "),_("li",[_("strong",[v._v("第一种会议系统")]),v._v("："),_("code",[v._v("WebRTC")]),v._v("+ 自建信令服务器实现点对点、多对多视频通话。")]),v._v(" "),_("li",[_("strong",[v._v("第二种会议系统")]),v._v("：学习开源 "),_("code",[v._v("WebRTC")]),v._v(" 服务器 "),_("code",[v._v("Janus")]),v._v("，并利用其实现第二种架构的会议系统。")]),v._v(" "),_("li",[_("strong",[v._v("第三种会议系统")]),v._v("：学习开源流媒体服务器 "),_("code",[v._v("SRS")]),v._v("，并实现 "),_("code",[v._v("WebRTC")]),v._v(" 推流拉流。")]),v._v(" "),_("li",[_("strong",[v._v("其他场景拓展")]),v._v("：直播、流量监控、即时通讯、网页客服、远程控制、私密放映室等都可以尝试探索。")])]),v._v(" "),_("h2",{attrs:{id:"你会学到什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#你会学到什么"}},[v._v("#")]),v._v(" 你会学到什么？")]),v._v(" "),_("ol",[_("li",[v._v("从 0 实现三套基于 "),_("code",[v._v("WebRTC")]),v._v(" 的私有化会议系统；")]),v._v(" "),_("li",[v._v("开源 "),_("code",[v._v("WebRTC")]),v._v(" 服务器 "),_("code",[v._v("Janus")]),v._v("、"),_("code",[v._v("SRS")]),v._v(" 的部署及使用；")]),v._v(" "),_("li",[_("code",[v._v("RTSP")]),v._v("、"),_("code",[v._v("RTMP")]),v._v(" 流与 "),_("code",[v._v("WebRTC")]),v._v(" 自由组合；")]),v._v(" "),_("li",[_("code",[v._v("WebRTC")]),v._v(" 多场景方案探索实践。")])]),v._v(" "),_("p",[v._v("通过后续课程的学习，大家可以从入门 "),_("code",[v._v("WebRTC")]),v._v(" 到自己实现一套会议系统。所有课程源代码我会开放一个固定的仓库，供大家学习参考。希望大家能够动手实现，而不是简单的 CV，我会给很多基础的函数加上备注。")]),v._v(" "),_("p",[v._v("最后，希望每个同学能够学有所得，能够在实际工作场景中用到这些东西，哪怕是自己弄个独立会议室和朋友聊天。就算是你用不到音视频聊天，那么 "),_("code",[v._v("WebRTC")]),v._v(" 作为一种新的接口数据双向实时传输方案也是可以的。")])])}),[],!1,null,null,null);_.default=c.exports}}]);