<script>
  import SearchInput from './Input/Search.vue';
  import DateTimeWidget from './Widget/DateTime.vue';
  import SettingsImagePopup from './Settings/ImagePopup.vue';
  import TopSitesLink from './Link/TopSites.vue';

  export default {
    components: {
      SearchInput,
      DateTimeWidget,
      SettingsImagePopup,
      TopSitesLink
    },
    mounted() {
      this.initBackgroundImage();
    },
    props: {
      images: {
        type: Array,
        default() {
          return [];
        }
      }
    },

    data () {
      return {
        currentIndex: 0,
        currentImage: null
      };
    },
    watch: {
      currentIndex(index) {
        this.saveImageIndexToLocalStorage(index);
      }
    },
    methods: {
      setCurrentIndex(index) {
        this.currentIndex = index;
      },
      handleSelectImage(index) {
        this.currentImage = this.images[index];
        this.setCurrentIndex(index);
      },
      initBackgroundImage() {
        const imageIndex = this.getImageIndexFromLocalStorage();
        this.setCurrentIndex(imageIndex);
        this.currentImage = this.images[this.currentIndex];
      },
      saveImageIndexToLocalStorage(index) {
        this.$localStorage.setValue('selectedImageIndex', index);
      },
      getImageIndexFromLocalStorage() {
        return this.$localStorage.getValue('selectedImageIndex') || 0;
      }
    }
  }
</script>

<template>
  <div class="wrapper" :style="{ backgroundImage: `url(${this.currentImage})` }">
    <div class="top-layout">
      <div class="left">
        <settings-image-popup
          :images="images"
          :image-index="currentIndex"
          @select="handleSelectImage"
        />
        <top-sites-link />
      </div>
      <div class="center">
        <search-input />
      </div>
      <div class="right">
        <date-time-widget />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: top center;
  }

  .top-layout {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left {
    display: flex;
    padding-left: 12px;
  }
</style>



