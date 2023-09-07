(function(){
    var cnzzId = window.$docsify.cnzzId
    var unRepo = window.$docsify.repo || ''
    var [un, repo] = unRepo.split('/')
    var icp = ''
        if (location.host.includes('apachecn.org')) {
            icp = '京ICP备15026725号-2'
        } else if (location.host.includes('ibooker.org.cn')) {
            icp = '京ICP备2020035452号-1'
    }
    var icpText = icp? `<p>ICP许可证号: <a href="http://beian.miit.gov.cn" target="_blank">${icp}</a></p>`: ''
    var footer = `
        <hr/>
        <div align="center">
          <p><a href="http://www.apachecn.org/" target="_blank"><font face="KaiTi" size="6" color="red">我们一直在努力</font></a><p>
          <p><a href="https://github.com/${unRepo}" target="_blank">${unRepo}</a></p>
          <p><iframe align="middle" src="https://ghbtns.com/github-btn.html?user=${un}&repo=${repo}&type=watch&count=true&v=2" frameborder="0" scrolling="0" width="100px" height="25px"></iframe>
          <iframe align="middle" src="https://ghbtns.com/github-btn.html?user=${un}&repo=${repo}&type=star&count=true" frameborder="0" scrolling="0" width="100px" height="25px"></iframe>
          <iframe align="middle" src="https://ghbtns.com/github-btn.html?user=${un}&repo=${repo}&type=fork&count=true" frameborder="0" scrolling="0" width="100px" height="25px"></iframe>
          <a target="_blank" href="https://jq.qq.com/?_wv=1027&k=fgYM7eMw"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="iBooker 面试求职" title="iBooker 面试求职"></a></p>
          <p><span id="cnzz_stat_icon_${cnzzId}"></span></p>
          ${icpText}
          <div style="text-align:center;margin:0 0 10.5px;">
            <ins class="adsbygoogle"
                 style="display:inline-block;width:728px;height:90px"
                 data-ad-client="ca-pub-3565452474788507"
                 data-ad-slot="2543897000"></ins>
          </div>
        </div>
    `
    var plugin = function(hook) {
      hook.afterEach(function(html) {
        return html + footer
      })
      hook.doneEach(function() {
        (adsbygoogle = window.adsbygoogle || []).push({})
      })
    }
    var plugins = window.$docsify.plugins || []
    plugins.push(plugin)
    window.$docsify.plugins = plugins
})()
