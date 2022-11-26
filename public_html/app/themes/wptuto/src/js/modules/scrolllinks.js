import cbo_scrollto from "../../../src/js/modules/scrollto";

const cbo_scrolllinks = {
  init: function () {
    $('[data-scrollto]').on('click', function(e){
      e.preventDefault();
      let target = $(this).attr('data-scrollto');

      if(target == "next")
        target = $(this).closest('section').next();

      if(target == "prev")
        target = $(this).closest('section').prev();

      cbo_scrollto( $(target).get(0), {
        offset: -($('.cbo-header').height())
      })
    });
  }
};

export default cbo_scrolllinks;
