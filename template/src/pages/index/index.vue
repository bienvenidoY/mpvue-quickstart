<template>
 <div class="home">
   欢迎使用
 </div>
</template>

<script>

export default {
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      userInfo: {}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },

  components: {},

  methods: {
    getUserInfo{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
            }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
          }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
  },

  created{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style scoped>
</style>
