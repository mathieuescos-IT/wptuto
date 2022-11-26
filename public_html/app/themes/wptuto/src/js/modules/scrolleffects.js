/*
 * Author : David Essayan (da.essayan@gmail.com)
 * License : Private
 */

import anime from 'animejs/lib/anime.es.js';

const cbo_scrolleffects = {
  init: function () {
    $(window).on("scroll", function () {
      cbo_scrolleffects.on_scroll();
    });

    $(window).on("resize", function () {
      cbo_scrolleffects.on_scroll();
    });

    cbo_scrolleffects.on_scroll();
  },

  on_scroll: function () {
    var animations = [
      {
        selector: ".slide-up",
        class: "anim-slide-up"
      },
      {
        selector: ".slide-down",
        class: "anim-slide-down"
      },
      {
        selector: ".slide-left",
        class: "anim-slide-left"
      },
      {
        selector: ".slide-right",
        class: "anim-slide-right"
      },
      {
        selector: ".slide-left-margin",
        class: "anim-slide-left-margin"
      },
      {
        selector: ".slide-right-margin",
        class: "anim-slide-right-margin"
      },
      {
        selector: ".scale-up",
        class: "anim-scale-up"
      },
      {
        selector: ".scale-up-center",
        class: "anim-scale-up-center"
      },
      {
        selector: ".scale-down",
        class: "anim-scale-down"
      },
      {
        selector: ".scale-left",
        class: "anim-scale-left"
      },
      {
        selector: ".scale-right",
        class: "anim-scale-right"
      },
      {
        selector: ".counter-up",
        class: "anim-counter-up"
      },
      {
        selector: ".custom-effect",
        class: "anim-custom-effect"
      }
    ];

    const win_top = $(window).scrollTop();
    const win_height = $(window).height();
    const win_width = $(window).width();
    const min_width_delay = 768;

    $.each(animations, function (i, animation) {
      $(animation.selector).each(function () {
        const $el = $(this);
        if (!$el.hasClass(animation.class)) {
          const el_top = $el.offset().top;
          const from_top = (el_top - win_top) / win_height;

          if (
            from_top <= 0.99 && from_top >= 0
          ) {
            let delay = parseInt($el.attr("data-delay"));
            const force_delay =
              typeof $el.attr("data-force-delay") !== "undefined"
                ? true
                : false;

            if ((isNaN(delay) || win_width < min_width_delay) && !force_delay) {
              delay = 0;
            }

            setTimeout(function () {
              $el.addClass(animation.class);

              if (animation.selector == ".counter-up" && anime) {
                const count = parseInt($el.attr("data-count"));
                const start = parseInt($el.text());
                const obj = { count: 0 };

                anime({
                  targets: obj,
                  count: count,
                  round: 1,
                  easing: "easeInOutExpo",
                  duration: 4000,
                  update: function () {
                    $el.text(obj.count);
                  }
                });
              }
            }, delay);
          }
        }
      });
    });
  }
};

export default cbo_scrolleffects;
