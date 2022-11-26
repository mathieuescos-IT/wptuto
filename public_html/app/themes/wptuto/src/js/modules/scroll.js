const cbo_scroll = {
  scrolltop: 0,
  init: function () {
    const $w = $(window);
    const st = $w.scrollTop();

    if ($w.scrollTop() > 10) {
      $("body").addClass("body--scroll");

      if (st > this.scrolltop) {
        $("body").addClass("body--scrolldown");
      } else {
        $("body").removeClass("body--scrolldown");
      }
    } else {
      $("body").removeClass("body--scroll body--scrolldown");
    }

    this.scrolltop = st;
  }
};

export default cbo_scroll;
