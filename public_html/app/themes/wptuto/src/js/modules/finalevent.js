const cbo_finalevent = {
  timer: [],
  init: function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (this.timer[uniqueId]) {
      clearTimeout(this.timer[uniqueId]);
    }
    this.timer[uniqueId] = setTimeout(callback, ms);
  }
};

export default cbo_finalevent;
