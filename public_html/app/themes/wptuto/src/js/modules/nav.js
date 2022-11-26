const cbo_nav = {
  init: function () {
    $(".cbo-header .header-burger").on("click", function (e) {
      e.preventDefault();
      $("body").toggleClass("body--nav");
    });

    $(".cbo-nav li.menu-item-has-children").on("click", function (e) {
      if($('.cbo-header .header-burger').is(':visible')){
        e.preventDefault();
        $(this).toggleClass("active");
      }
    });

    $(".cbo-nav li.menu-item-has-children li").on("click", function (e) {
      e.stopPropagation();
    });
  }
};

export default cbo_nav;
