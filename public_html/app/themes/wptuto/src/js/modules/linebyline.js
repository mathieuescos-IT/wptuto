/*
 * Author : David Essayan (da.essayan@gmail.com)
 * License : Private
 */

const cbo_linebyline = {
  init: function () {
    $(window).on("scroll", function () {
      cbo_linebyline.anim_lines();
    });

    $(window).on("resize", function () {
      cbo_linebyline.anim_lines();
    });

    cbo_linebyline.wrap_lines();
  },

  update: function () {
    cbo_linebyline.anim_lines();
  },

  wrap_lines: function () {
    $(".cbo-linebyline").each(function () {
      const $el = $(this);
      const $els = $el.find("*").not("hr");

      $els.each(function () {
        $(this).addClass("line");
        const html = $(this).html();
        $(this).html('<span class="line-inner">' + html + "</span>");
      });
    });

    cbo_linebyline.anim_lines();
  },

  anim_lines: function () {
    const win_top = $(window).scrollTop();
    const win_height = $(window).outerHeight();

    $(".cbo-linebyline").each(function () {
      const el_top = $(this).offset().top;
      const from_top = (el_top - win_top) / win_height;

      if (from_top <= 0.9 && from_top >= 0) {
        const $els = $(this).find(".line");
        $els.addClass("line--reveal");
      }
    });
  }
};

export default cbo_linebyline;
