<template>
  <div class="section bg-footer">
    <div class="container on-dark menu-footer">
      <div class="col lg-4 xs-12">
        <img src="https://uranplus.oss-cn-shenzhen.aliyuncs.com/logo.png" style="width: 50px" alt="" />
      </div>
      <div class="col lg-4 xs-12">
        <div class="footer-links">
          <router-link to="/service" class="footer-nav-link">服务</router-link>
          <router-link to="/product" class="footer-nav-link">产品</router-link>
          <router-link to="/about" class="footer-nav-link">关于我们</router-link>
          <!-- <a href="blog.html" class="footer-nav-link">博客</a> -->
        </div>
      </div>
      <div class="col lg-4 xs-12 flex space-around">
        <a href="#" class="social">知乎</a>
        <a href="#" class="social">Github</a>
        <a href="#" class="social">拉钩</a>
        <a href="#" class="social">微信</a>
      </div>
    </div>
    <div class="container">
      <div class="col lg-12">
        <div class="divider"></div>
      </div>
    </div>
    <div class="container on-dark">
      <div class="col lg-8 md-12">
        <div>
          武汉优燃佳科技有限公司创建于 2017
          年，我们拥有一个年轻的创始人团队，也拥有一个具有互联网大数据基因的技术研发团队，喜欢使用最新的技术解决方案、使用聚合共赢的方式和专业的事交给专业的人去做的思维来给您提供互联网的解决方案，我们研发了一系列行业的大数据解决方案，有智慧消防监控云平台、人力资源行业的智能简历库、行业ERP等，我们足以满足无论您是哪个组织、公司、集团的行业内的技术服务需求，但是我们认为这些还远远不够，我们会接着去努力做一些更有意义的事情，实现我们的价值。
        </div>
      </div>
      <div class="col lg-3 flex footer-extra md-12">
        <a href="#" class="footer-nav-link">加入我们</a>
        <!--            <a href="#" class="footer-nav-link last">关于我们</a>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageFooter',
  data() {
    return {
      msg: '页脚啊'
    }
  }
}
</script>
