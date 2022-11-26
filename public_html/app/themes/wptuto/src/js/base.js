/*
 * Author : David Essayan (da.essayan@gmail.com)
 * License : Private
 */

/* Node modules */

// import { Fancybox } from "@fancyapps/fancybox";
// import "@fancyapps/fancybox/dist/jquery.fancybox.min.css";

/* Modules */

import "./modules/jquerypassive";

import cbo_lazy from "./modules/lazy";
import cbo_nav from "./modules/nav";
import cbo_scroll from "./modules/scroll";
import cbo_scrolleffects from "./modules/scrolleffects";
import cbo_scrolllinks from "./modules/scrolllinks";
import cbo_linebyline from "./modules/linebyline";
import cbo_share from "./modules/share";
import cbo_hilight from "./modules/hilight";
import cbo_finalevent from "./modules/finalevent";
import cbo_upload from "./modules/upload";
import cbo_forms from "./modules/forms";

/* WP custom parts */

import cbo_youtube from "../../templates/parts/youtube";
import cbo_article from "../../templates/parts/article";

/* WP custom blocks */

import cbo_faq from "../../templates/blocks/faq";
import cbo_contact from "../../templates/blocks/contact";
import cbo_testimonials from "../../templates/blocks/testimonials";
import cbo_products from "../../templates/blocks/products";
import cbo_pushnews from "../../templates/blocks/pushnews";
import cbo_heroslider from "../../templates/blocks/heroslider";
import cbo_map from "../../templates/blocks/map";

(function ($) {
  // --------------------- MASTER PART -------------------------- //
  // ------------------------------------------------------------ //

  var Master = {
    onready: function () {
      cbo_lazy.init();
      cbo_nav.init();
      cbo_scroll.init();
      cbo_scrolleffects.init();
      cbo_scrolllinks.init();
      cbo_linebyline.init();
      cbo_share.init();
      cbo_upload.init();
      cbo_forms.init();

      cbo_youtube.init();
      cbo_article.init();

      cbo_faq.init();
      cbo_contact.init();
      cbo_testimonials.init();
      cbo_products.init();
      cbo_pushnews.init();
      cbo_heroslider.init();
      cbo_map.init();
    },

    onload: function () {
      cbo_scrolleffects.on_scroll();
      cbo_hilight.init();
      cbo_heroslider.load();
    },

    onresize: function (e) {
      cbo_scroll.init();
    },

    onscroll: function (e) {
      cbo_scroll.init();
    }
  };

  $(window).on("load", function () {
    Master.onload();
  });

  $(window).on("resize", function (e) {
    Master.onresize(e);
  });

  $(window).on("scroll", function (e) {
    Master.onscroll(e);
  });

  $(function () {
    Master.onready();
  });
})(jQuery);