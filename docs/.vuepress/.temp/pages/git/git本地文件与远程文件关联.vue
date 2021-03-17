<template><h4 id="创建ssh免密"><a class="header-anchor" href="#创建ssh免密">#</a> 创建ssh免密</h4>
<h5 id="_1-生成指定名称的密钥"><a class="header-anchor" href="#_1-生成指定名称的密钥">#</a> 1.生成指定名称的密钥</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ssh<span class="token operator">-</span>keygen
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>首先 <code>ssh-keygen</code> 会确认密钥的存储位置（默认是 <code>.ssh/id_rsa</code>），然后它会要求你输入两次密钥口令。如果你不想在使用密钥时输入口令，将其留空即可（直接回车）。</p>
<p><strong>需要注意的是这里必须输入指定的名称，不能使用默认名称，否则会相互覆盖（这是配置多个key的重点），如：id_rsa_idss</strong></p>
<h5 id="_2-生成配置config文件-进入到电脑的-ssh-比如我的是-c-users-david-ssh-然后使用vi-config进行编辑"><a class="header-anchor" href="#_2-生成配置config文件-进入到电脑的-ssh-比如我的是-c-users-david-ssh-然后使用vi-config进行编辑">#</a> 2.生成配置config文件   进入到电脑的.ssh  比如我的是 c/Users/David/.ssh    然后使用vi config进行编辑</h5>
<table>
<thead>
<tr>
<th>子段</th>
<th>名称</th>
</tr>
</thead>
<tbody>
<tr>
<td>Host</td>
<td>远程主机地址（github.com）</td>
</tr>
<tr>
<td>IdentityFile</td>
<td>私钥的文件路径以及文件名称  可以通过pwd查看完整路径   然后后面加上文件名称</td>
</tr>
<tr>
<td>User</td>
<td>用户名</td>
</tr>
<tr>
<td>Port</td>
<td>远程主机上连接的端口号</td>
</tr>
<tr>
<td>HostName</td>
<td>要登录的真实主机名称</td>
</tr>
</tbody>
</table>
<p>==PS：以上配置需要注意顺序问题==</p>
<h5 id="_3-复制生成的公钥到服务器上面-进入到-ssh里面-然后通过ls查看一下存在文件-然后通过cat进入到-pub的文件拷贝出来放到远程服务器上面"><a class="header-anchor" href="#_3-复制生成的公钥到服务器上面-进入到-ssh里面-然后通过ls查看一下存在文件-然后通过cat进入到-pub的文件拷贝出来放到远程服务器上面">#</a> 3.复制生成的公钥到服务器上面，进入到.ssh里面，然后通过ls查看一下存在文件，然后通过cat进入到.pub的文件拷贝出来放到远程服务器上面</h5>
<h5 id="_4-然后进入到本地需要关联的文件夹-git-push-git-github-com-sundongzi-daily-summary-git-注意是以git开头的地址"><a class="header-anchor" href="#_4-然后进入到本地需要关联的文件夹-git-push-git-github-com-sundongzi-daily-summary-git-注意是以git开头的地址">#</a> 4.然后进入到本地需要关联的文件夹 git push git@github.com:sundongzi/daily-summary.git   ==注意是以git开头的地址==</h5>
<h5 id="详细链接-https-blog-csdn-net-ligang2585116-article-details-79964976"><a class="header-anchor" href="#详细链接-https-blog-csdn-net-ligang2585116-article-details-79964976">#</a> 详细链接：https://blog.csdn.net/ligang2585116/article/details/79964976</h5>
</template>