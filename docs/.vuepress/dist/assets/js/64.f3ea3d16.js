(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{391:function(t,_,v){"use strict";v.r(_);var a=v(4),r=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"一、基础篇"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、基础篇"}},[t._v("#")]),t._v(" 一、基础篇")]),t._v(" "),_("h2",{attrs:{id:"_1-在浏览器输入网址后发送了什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-在浏览器输入网址后发送了什么"}},[t._v("#")]),t._v(" 1.在浏览器输入网址后发送了什么？")]),t._v(" "),_("p",[t._v("简单来说可分为以下几个步骤")]),t._v(" "),_("ol",[_("li",[_("h5",{attrs:{id:"浏览器解析url后-确定了web服务器和文件名-生成http请求信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器解析url后-确定了web服务器和文件名-生成http请求信息"}},[t._v("#")]),t._v(" 浏览器解析url后，确定了web服务器和文件名，生成http请求信息")])]),t._v(" "),_("li",[_("h5",{attrs:{id:"解析域名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解析域名"}},[t._v("#")]),t._v(" 解析域名")]),t._v(" "),_("ol",[_("li",[t._v("浏览器先看自身有没有缓存，如果没有就去看操作系统，操作系统也没有缓存就去看本地hosts文件查看")]),t._v(" "),_("li",[t._v("如果以上都没有缓存，那么就会去访问本地DNS服务器")])])]),t._v(" "),_("li",[_("h5",{attrs:{id:"操作系统-协议栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#操作系统-协议栈"}},[t._v("#")]),t._v(" 操作系统->协议栈")]),t._v(" "),_("h6",{attrs:{id:"dns获取到ip地址后会把http的传输工作委托给操作系统的协议栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns获取到ip地址后会把http的传输工作委托给操作系统的协议栈"}},[t._v("#")]),t._v(" DNS获取到ip地址后会把http的传输工作委托给操作系统的协议栈")])]),t._v(" "),_("li",[_("h5",{attrs:{id:"tcp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[t._v("#")]),t._v(" TCP")]),t._v(" "),_("blockquote",[_("p",[t._v("TCP头部报文中包含源端口、目标端口、包序号（防止包混乱）、确认号、状态位（SYN、SCK、RST、FIN)等。")])]),t._v(" "),_("blockquote",[_("p",[t._v("如果 HTTP 请求消息比较长，超过了 "),_("code",[t._v("MSS")]),t._v(" 的长度，这时 TCP 就需要把 HTTP 的数据拆解成一块块的数据发送，而不是一次性发送所有数据。")])]),t._v(" "),_("p",[t._v("传输数据之前TCP要通过三次握手建立可靠的连接，保证双方都有接收和发送的能力")]),t._v(" "),_("p",[t._v("在双方建立连接后，生成TCP报文并给http报文添加TCP头部，然后交给下面的网络层处理。")])]),t._v(" "),_("li",[_("h5",{attrs:{id:"远程定位-ip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#远程定位-ip"}},[t._v("#")]),t._v(" 远程定位-IP")]),t._v(" "),_("p",[t._v("生成IP报文，给数据包加上一层IP头部")]),t._v(" "),_("blockquote",[_("p",[t._v("IP报文头部：源IP地址、目标IP地址")])]),t._v(" "),_("h6",{attrs:{id:"tcp-模块在执行连接、收发、断开等各阶段操作时-都需要委托-ip-模块将数据封装成网络包发送给通信对象。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-模块在执行连接、收发、断开等各阶段操作时-都需要委托-ip-模块将数据封装成网络包发送给通信对象。"}},[t._v("#")]),t._v(" TCP 模块在执行连接、收发、断开等各阶段操作时，都需要委托 IP 模块将数据封装成"),_("strong",[t._v("网络包")]),t._v("发送给通信对象。")])]),t._v(" "),_("li",[_("h5",{attrs:{id:"两点传输-mac】"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#两点传输-mac】"}},[t._v("#")]),t._v(" 两点传输-MAC】")])]),t._v(" "),_("li")]),t._v(" "),_("p",[t._v("生成了 IP 头部之后，接下来网络包还需要在 IP 头部的前面加上 "),_("strong",[t._v("MAC 头部")]),t._v("。")]),t._v(" "),_("blockquote",[_("p",[t._v("在 MAC 包头里需要"),_("strong",[t._v("发送方 MAC 地址")]),t._v("和"),_("strong",[t._v("接收方目标 MAC 地址")]),t._v("，用于"),_("strong",[t._v("两点之间的传输")]),t._v("。")])]),t._v(" "),_("ol",{attrs:{start:"8"}},[_("li",[_("h5",{attrs:{id:"网卡"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网卡"}},[t._v("#")]),t._v(" 网卡")]),t._v(" "),_("p",[t._v("将数字信息转换为电信息，将数据发送出去")])]),t._v(" "),_("li",[_("h5",{attrs:{id:"交换机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#交换机"}},[t._v("#")]),t._v(" 交换机")]),t._v(" "),_("p",[t._v("将电信号转换为数字信号，然后根据 MAC 地址表查找 MAC 地址，然后将信号发送到相应的端口，数据包通过交换机转发抵达路由器")])]),t._v(" "),_("li",[_("h5",{attrs:{id:"路由器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#路由器"}},[t._v("#")]),t._v(" 路由器")])]),t._v(" "),_("li",[_("h5",{attrs:{id:"服务器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务器"}},[t._v("#")]),t._v(" 服务器")])])]),t._v(" "),_("h3",{attrs:{id:""}},[_("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),_("h1",{attrs:{id:"二、http篇"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、http篇"}},[t._v("#")]),t._v(" 二、http篇")]),t._v(" "),_("h2",{attrs:{id:"常见的http状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见的http状态码"}},[t._v("#")]),t._v(" 常见的http状态码")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th"),t._v(" "),_("th",[t._v("类别")]),t._v(" "),_("th",[t._v("原因")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1XX")]),t._v(" "),_("td",[t._v("information（信息性状态码）")]),t._v(" "),_("td",[t._v("接受的请求正在处理")])]),t._v(" "),_("tr",[_("td",[t._v("2XX")]),t._v(" "),_("td",[t._v("success（成功状态码）")]),t._v(" "),_("td",[t._v("请求正常处理成功")])]),t._v(" "),_("tr",[_("td",[t._v("3XX")]),t._v(" "),_("td",[t._v("redirection（重定向）")]),t._v(" "),_("td",[t._v("需要附加操作以完成请求")])]),t._v(" "),_("tr",[_("td",[t._v("4XX")]),t._v(" "),_("td",[t._v("client error（客户端错误状态码）")]),t._v(" "),_("td",[t._v("服务器无法处理请求")])]),t._v(" "),_("tr",[_("td",[t._v("5XX")]),t._v(" "),_("td",[t._v("server error（服务器错误状态码）")]),t._v(" "),_("td",[t._v("服务器处理请求错误")])])])]),t._v(" "),_("h3",{attrs:{id:"_2xx成功"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2xx成功"}},[t._v("#")]),t._v(" 2xx成功")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("200 ok")])]),t._v(" "),_("p",[t._v("从客户端发起的请求被服务器正常处理")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("201 No Content")]),t._v(" "),_("strong",[t._v("（空内容）")])]),t._v(" "),_("p",[t._v("该状态码表示服务器正常处理请求，但在返回的响应体中不含实体的主体部分。一般在只需要客户端向服务器发送请求，而不需要对客户端发送新信息的内容的情况下使用")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("206 Partical Content")]),t._v(" "),_("strong",[t._v("（范围请求）")])])])]),t._v(" "),_("p",[t._v("​\t\t该状态码表示客户端发起范围请求，服务器成功执行了这部分的GET请求。响应报文中包含"),_("strong",[t._v("Content-Range")]),t._v("指定范围的内容")]),t._v(" "),_("h3",{attrs:{id:"_3xx-重定向"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3xx-重定向"}},[t._v("#")]),t._v(" 3XX 重定向")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("301 Moved Permanently（永久性重定向）")])]),t._v(" "),_("p",[t._v("表示请求的资源已被分配了新的URI，如果已经把资源保存书签了，则应该按照Location首部字段提示的URI重新保存")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("302Found 临时重定向")])]),t._v(" "),_("p",[t._v("表示请求的资源已分配了新的URI，但是不是永久性的")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("303 See Other")])]),t._v(" "),_("p",[t._v("该状态码表示请求对应的资源存在着另一个URI，应使用GET方法定向获取请求的资源")]),t._v(" "),_("p",[t._v("303和302有着相同的功能，但303状态码明确表示客户端应当采用GET方法获取资源。例如使用POST方法发起请求，执行后的处理结果是希望客户端使用GET方法重定向到另一个URI上")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("304 Not Modified")]),t._v(" （协商缓存）")]),t._v(" "),_("p",[t._v("该状态码表示客户端发送"),_("mark",[t._v("附带条件")]),t._v("的请求时，服务器允许请求访问资源，但未满足条件的情况。")]),t._v(" "),_("p",[t._v("304状态码返回时，不含任何响应的主体部分，304虽然被划分在3XX类别中，但和重定向没有任何关系。")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),_("p",[t._v("附带条件的请求是指采用GET方法的请求报文中包含If-Match，If-Modified-Since，If-None-Match，If-Range，If-Unmodified-Since中任一首部。通常表示浏览器协商缓存")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("307 Temporary Redirect（临时重定向）")]),t._v(" 该状态码与302有着相同的含义，尽管302标准禁止POST变成GET，但实际使用时大家并不遵守。307会遵守浏览器标准，不会从POST变为GET")])])]),t._v(" "),_("h3",{attrs:{id:"_4xx-客户端错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4xx-客户端错误"}},[t._v("#")]),t._v(" 4xx 客户端错误")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("400 Bad Request")]),t._v(" 表示请求报文中存在语法错误")]),t._v(" "),_("li",[_("strong",[t._v("401 unauthorized")]),t._v(" 该状态表示发送的请求需要HTTP认证")]),t._v(" "),_("li",[_("strong",[t._v("403 Forbidden")]),t._v(" 表示请求的资源被服务器拒绝了，通常是没有访问权限")]),t._v(" "),_("li",[_("strong",[t._v("404 Not Found")]),t._v(" 表示服务器无法找到请求的资源")])]),t._v(" "),_("h3",{attrs:{id:"_5xx-服务器错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5xx-服务器错误"}},[t._v("#")]),t._v(" 5xx 服务器错误")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("500 Server Error")])]),t._v(" "),_("p",[t._v("服务器内部错误，也可能是web应用存在的bug或者某些临时故障")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("503 Server Unavailable")])]),t._v(" "),_("p",[t._v("表示服务器暂时处于超负载或者正在停机维护，现在无法处理请求。如果事先得知恢复正常服务的时间，最好写入Retry-After字段在返回给客户端")])])]),t._v(" "),_("h2",{attrs:{id:"http缓存技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http缓存技术"}},[t._v("#")]),t._v(" http缓存技术")]),t._v(" "),_("p",[t._v("http缓存分为强缓存与协商缓存")]),t._v(" "),_("h3",{attrs:{id:"强缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),_("h3",{attrs:{id:"协商缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),_("p",[_("strong",[t._v("协商缓存就是与服务器协商之后，通过协商结果判断是否使用本地缓存")])]),t._v(" "),_("p",[t._v("协商缓存可以基于两种头部实现")]),t._v(" "),_("p",[_("strong",[t._v("第一种")]),t._v("："),_("mark",[t._v("请求头部")]),t._v("中的 "),_("code",[t._v("If-Modified-Since")]),t._v(" 字段与"),_("mark",[t._v("响应头部")]),t._v("中的"),_("code",[t._v("Last-Modified")]),t._v(" 字段")]),t._v(" "),_("p",[_("strong",[t._v("第二种：")]),t._v(" 请求头部中的"),_("code",[t._v("If-None-Match")]),t._v(" 字段与响应头部中的"),_("code",[t._v("Etag")]),t._v(" 字段")]),t._v(" "),_("h2",{attrs:{id:"http与https的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http与https的区别"}},[t._v("#")]),t._v(" http与https的区别")]),t._v(" "),_("ul",[_("li",[t._v("http是超文本传输协议，是一种"),_("mark",[t._v("无状态")]),t._v("的协议，采用明文传输（存在安全缺陷）https为了解决这个问题在http网络层与TCP之间加上了SSL/TLS安全协议，使得报文可以加密传输")]),t._v(" "),_("li",[t._v("http建立连接只需要TCP三次握手，而https还需要进行SSL/TLS的握手过程")]),t._v(" "),_("li",[t._v("http默认端口是80，https是443")]),t._v(" "),_("li",[t._v("https需要申请数字证书来保证服务器的身份是可信的")])]),t._v(" "),_("blockquote",[_("p",[t._v("什么是无状态协议？每次请求都是独立的，与前面的请求没有任何联系。比如一个应用场景：从"),_("strong",[t._v("登录->加入购物车->下单->付款")]),t._v("，这几个步骤每一步都需要验证用户的身份信息，而http请求不会把第一次登录的请求的信息用于后面的请求。于是需要我们使用Cookie技术来缓存用户的登录信息")])]),t._v(" "),_("h2",{attrs:{id:"http-1-1、http-2、http-3的演变"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1、http-2、http-3的演变"}},[t._v("#")]),t._v(" http/1.1、http/2、http/3的演变")]),t._v(" "),_("h3",{attrs:{id:"http-1-1相较于http-1-0提高了什么性能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1相较于http-1-0提高了什么性能"}},[t._v("#")]),t._v(" http/1.1相较于http/1.0提高了什么性能？")]),t._v(" "),_("p",[_("strong",[t._v("http1.1比较http/1.0性能上的改进：")])]),t._v(" "),_("ul",[_("li",[t._v("使用"),_("mark",[t._v("长连接")]),t._v("的方式改善了http1.0短链接的性能开销")]),t._v(" "),_("li",[t._v("支持管道（pipeline）网络传输，"),_("mark",[t._v("解决请求队头阻塞")]),t._v("只要第一个请求发送出去后不必等待响应就可以继续发送请求")])]),t._v(" "),_("p",[_("strong",[t._v("但是http/1.1还是有瓶颈的：")])]),t._v(" "),_("ul",[_("li",[t._v("请求/响应头部未经压缩后就发送")]),t._v(" "),_("li",[t._v("头部数据冗余，每次互相发送相同的头部造成很多浪费")]),t._v(" "),_("li",[t._v("服务器是按请求数据的顺序响应的，会造成响应对头阻塞")]),t._v(" "),_("li",[t._v("没有请求优先级控制")]),t._v(" "),_("li",[t._v("请求只能从客户端开始，服务器只能被动响应")])]),t._v(" "),_("h3",{attrs:{id:"http-2做了什么优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-2做了什么优化"}},[t._v("#")]),t._v(" http/2做了什么优化？")]),t._v(" "),_("p",[_("strong",[t._v("http/2是基于https的，所以安全性是由保障的，相较于http/1.1的改进：")])]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("头部压缩")]),t._v(" 如果同时发起多个请求，header是一样的或者相识的，那么协议会帮你"),_("mark",[t._v("消除重复的部分")])]),t._v(" "),_("blockquote",[_("p",[t._v("这就是所谓的"),_("code",[t._v("HPACK")]),t._v(" 算法:在客户端和服务端同时维护一张头信息表，所有字段都会存入这张表，生成一个索引号，以后就只发送这个索引号就行了")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("二进制格式")]),t._v(" http/2全面采用二进制格式（帧）替代纯文本格式，"),_("mark",[t._v("增加数据传输效率")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("并发传输")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("服务器主动推送资源")])])])]),t._v(" "),_("h3",{attrs:{id:"http3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http3"}},[t._v("#")]),t._v(" http3")]),t._v(" "),_("h1",{attrs:{id:"websocket"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" webSocket")]),t._v(" "),_("p",[t._v("socket是对传输层的封装，是为了方便使用TCP，UDP而抽象出来的")])])}),[],!1,null,null,null);_.default=r.exports}}]);