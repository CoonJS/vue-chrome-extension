export default {
  props: {
    closeOnClickBody: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  updated() {
    if (this.isShow) {
      document.addEventListener('click', this.handleClick, true);
    } else {
      document.removeEventListener('click', this.handleClick, true);
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    showBody() {
      this.isShow = true;
    },
    closeBody() {
      this.isShow = false;
    },
    toggleBody(e) {
      if (typeof e === 'undefined' || typeof e.preventDefault === 'undefined') {
        throw new Error('use @eventName=toggleBody or @eventName=toggleBody($event)');
      }

      e.preventDefault();

      this.isShow = !this.isShow;
    },
    handleClick(e) {
      const element = this.$el;

      if (!element.contains(e.target) && this.closeOnClickBody === true) {
        this.closeBody();
      }
    }
  }
};
