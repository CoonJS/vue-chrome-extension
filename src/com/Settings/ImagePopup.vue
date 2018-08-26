<script>
  import dropdown from 'vue-my-dropdown';

  export default {
    components: {
      dropdown
    },
    props: {
      images: {
        type: Array,
        default() {
          return [];
        }
      },
      imageIndex: {
        type: Number,
        default() {
          return 0;
        }
      }
    },
    data() {
      return {
        selectedImageIndex: this.imageIndex,
        visible: false
      };
    },
    watch: {
      selectedImageIndex(index) {
        this.$emit('select', index);
      },
      imageIndex(index) {
        this.selectedImageIndex = index;
      }
    },
    methods: {
      selectImage(index) {
        this.selectedImageIndex = index;
      },
      isSelected(idx) {
        return this.selectedImageIndex === idx;
      }
    }
  }
</script>

<template>
  <div class="root">
    <dropdown
      :visible="visible"
      :position="[ 'left', 'bottom', 'left', 'top' ]"
      @clickout="visible = false"
    >
      <span class="link" @click="visible = !visible" >
        Options
      </span>
      <div slot="dropdown" class="dialog">
        <div class="content">
          <div
            v-for="(image, idx) in images"
            class="image-block"
            :class="{ 'selected' : isSelected(idx) }"
            @click="selectImage(idx)"
          >
            <img :src="image">
          </div>
        </div>
      </div>
    </dropdown>
  </div>
</template>

<style scoped>
  .root {
    position: relative;
  }

  .link {
    display: inline-block;
    margin: 0 15px 0 10px;
    color: white;
    font-weight: 100;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    line-height: 30px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }

  .content {
    display: flex;
    width: 626px;
    height: 600px;
    flex-wrap: wrap;
    overflow: auto;
  }

  .image-block {
    width: 190px;
    height: 100px;
    cursor: pointer;
    margin: 6px;
    border: 3px solid #fff;
  }

  .image-block.selected {
    opacity: 1;
    border: 3px solid #32d227;
  }

  .image-block:hover {
    box-shadow: 0 -6px 10px rgba(0, 0, 0, 0.6);
  }

  img {
    width: 190px;
    height: 100px;
  }
</style>



