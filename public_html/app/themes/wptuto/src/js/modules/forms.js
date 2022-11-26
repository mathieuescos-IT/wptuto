const cbo_form = {
  $radios: null,
  $checkboxes: null,

  init: function () {

    this.$radios = $(".cbo-form .form-radio").find("input");
    this.$checkboxes = $(".cbo-form .form-checkbox").find("input");

    this.init_radios();
    this.init_checkboxes();
    this.init_autoscroll();
  },

  init_radios: function () {
    let index = 0;
    this.$radios.each(function () {
      const $span = $(this).next(".wpcf7-list-item-label");
      const text = $span.text();
      const id = $(this).closest(".wpcf7-radio").attr("id") + index;

      $span.remove();
      $(this)
        .attr('id', id)
        .parent()
        .append('<label for="' + id + '">' + text + "</label>");

      index++;
    });
  },

  init_checkboxes: function () {
    let index = 0;
    this.$checkboxes.each(function () {
      const $span = $(this).next(".wpcf7-list-item-label");
      const text = $span.text();
      const id = $(this).closest(".wpcf7-checkbox").attr("id") + index;

      $span.remove();
      $(this)
        .attr('id', id)
        .parent()
        .append('<label for="' + id + '">' + text + "</label>");

      index++;
    });
  },

  init_autoscroll: function(){
    $(document).on('wpcf7invalid wpcf7mailsent wpcf7mailfailed', function(e) {
        $('html, body').animate({
            scrollTop: $(".wpcf7-response-output").offset().top - $('.cbo-header').height() - 30
        }, 1000);
    });
  }
};

export default cbo_form;
