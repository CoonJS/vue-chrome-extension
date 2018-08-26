<script>
  import dropdown from 'vue-my-dropdown';

  export default {
    components: {
      dropdown
    },
    mounted() {
      this.initTopSites();
    },
    data() {
      return {
        visible: false,
        sites: []
      };
    },
    methods: {
      initTopSites() {
        this.$chrome.getTopSites(sites => {
          this.sites = sites;
        });
      }
    }
  }
</script>

<template>
  <div class="root">
    <dropdown :visible="visible" :position="[ 'left', 'bottom', 'left', 'top' ]" @clickout="visible = false">
      <span class="link" @click="visible = !visible" >
        Top Sites
      </span>
      <div slot="dropdown" class="dialog">
          <a
            class="fav-item"
            v-for="site in sites"
            :href="site.url"
            target="_blank"
          >
            <img :src="`https://www.google.com/s2/favicons?domain=${site.url}`" alt="">
            <span class="site-title">{{ site.title }}</span>
          </a>
      </div>
    </dropdown>
  </div>
</template>

<style scoped>
  .link {
    display: inline-block;
    color: white;
    font-weight: 100;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    line-height: 30px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }

  .dialog {
    padding: 12px;
    background-color: #fff;
  }

  .fav-item {
    padding: 6px 12px;
    display: flex;
    align-items: center;
    background-color: #fff;
    text-decoration: none;
  }

  .fav-item:hover {
    background-color: #eee;
  }

  a img {
    margin-right: 10px;
  }
</style>



