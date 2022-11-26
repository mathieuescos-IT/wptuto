import LazyLoad from "vanilla-lazyload";

const cbo_lazy = {
  instance: null,
  init: function () {
    this.instance = new LazyLoad({
      callback_loaded: function (e) {
        $(e).parent().addClass("loaded");
      }
    });
  },
  update: function () {
    this.instance.update();
  }
};

export default cbo_lazy;
