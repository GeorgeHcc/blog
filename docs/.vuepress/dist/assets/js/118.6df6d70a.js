(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{443:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git分支管理-查看分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git分支管理-查看分支"}},[s._v("#")]),s._v(" Git分支管理-查看分支")]),s._v(" "),a("h3",{attrs:{id:"查看分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[s._v("#")]),s._v(" 查看分支")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n  iss53\n* master  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 带星号*表示当前所在分支")]),s._v("\n  testing\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("code",[s._v("git branch")]),s._v(" 命令不只是可以创建与删除分支。 如果不加任何参数运行它，会得到当前所有分支的一个列表。")]),s._v(" "),a("h3",{attrs:{id:"查看每个分支的最后提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看每个分支的最后提交"}},[s._v("#")]),s._v(" 查看每个分支的最后提交")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n  iss53   93b412c fix javascript issue\n* master  7a98805 Merge branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'iss53'")]),s._v("\n  testing 782fd34 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"查看已-未-合并的分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看已-未-合并的分支"}},[s._v("#")]),s._v(" 查看已(未)合并的分支")]),s._v(" "),a("p",[a("code",[s._v("--merged")]),s._v(" 与 "),a("code",[s._v("--no-merged")]),s._v(" 这两个选项可以查看哪些分支已经合并或未合并到 "),a("strong",[s._v("当前")]),s._v(" 分支。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--merged")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看已合并分支列表")]),s._v("\n  iss53\n* master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("上面列表中分支名字前没有 "),a("code",[s._v("*")]),s._v(" 号的分支通常可以使用 "),a("code",[s._v("git branch -d")]),s._v(" 删除掉；")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --no-merged "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看未合并的分支列表")]),s._v("\n  testing\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面显示未合并的分支，尝试使用 "),a("code",[s._v("git branch -d")]),s._v(" 命令删除它时会失败：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" testing\nerror: The branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'testing'")]),s._v(" is not fully merged.\nIf you are sure you want to delete it, run "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git branch -D testing'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("强制删除未合并的分支:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" testing\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"查看指定分支的已-未-合并的分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看指定分支的已-未-合并的分支"}},[s._v("#")]),s._v(" 查看指定分支的已(未)合并的分支")]),s._v(" "),a("p",[s._v("上面描述的选项 "),a("code",[s._v("--merged")]),s._v(" 和 "),a("code",[s._v("--no-merged")]),s._v(" 会在没有给定提交或分支名作为参数时， 分别列出已合并或未合并到 "),a("strong",[s._v("当前")]),s._v(" 分支的分支。")]),s._v(" "),a("p",[s._v("你总是可以提供一个附加的参数来查看其它分支的合并状态而不必检出它们。 例如，尚未合并到 "),a("code",[s._v("testing")]),s._v(" 分支的有哪些？")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --no-merged testing\n  topicA\n  featureB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);