<template>
  <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar w-nav">
    <div class="container">
      <div class="col flex lg-12 no-padding-bottom">
        <!-- logo -->
        <router-link to="/" class="brand w-nav-brand w--current"
          ><img
            src="https://uranplus.oss-cn-shenzhen.aliyuncs.com/logo.png"
            style="width: 80px;"
            alt=""
            class="logo-image"
        /></router-link>
        <nav role="navigation" class="nav-menu w-nav-menu">
          <router-link to="/service" class="nav-link w-nav-link">服务</router-link>
          <router-link to="/product" class="nav-link w-nav-link">产品</router-link>
          <router-link to="/about" class="nav-link w-nav-link">关于我们</router-link>
          <!-- <router-link to="blog.html" class="nav-link w-nav-link">博客</router-link> -->

          <a to="career.html" class="button-nav-link w-inline-block">
            <div class="button-nav-link-text">正在招聘</div>
          </a>
        </nav>
        <div class="menu-button w-nav-button">
          <div class="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageNavBar',
  data() {
    return {
      prdId: parseInt(Math.random())
    }
  }
}
</script>
