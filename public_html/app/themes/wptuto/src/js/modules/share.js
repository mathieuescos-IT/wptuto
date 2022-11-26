const cbo_share = {
  init : function () {
    $(".cbo-share .share-twitter").on("click", function (e) {
      e.preventDefault();
      var url = $(this).attr("data-url"),
        title = $(this).attr("data-title");

      window.open(
        "https://twitter.com/intent/tweet?url=" + url + "&text=" + title,
        "twitter_share",
        "menubar=no, status=no, scrollbars=no, menubar=no, width=250, height=200"
      );
    });

    $(".cbo-share .share-facebook").on("click", function (e) {
      e.preventDefault();
      var url = $(this).attr("data-url"),
        title = $(this).attr("data-title");

      window.open(
        "https://www.facebook.com/share.php?u=" + url,
        "facebook_share",
        "menubar=no, status=no, scrollbars=no, menubar=no, width=250, height=200"
      );
    });

    $(".cbo-share .share-linkedin").on("click", function (e) {
      e.preventDefault();
      var url = $(this).attr("data-url"),
        title = $(this).attr("data-title");

      window.open(
        "http://www.linkedin.com/shareArticle?mini=true&url=" +
          url +
          "&title=" +
          title,
        "linkedin_share",
        "menubar=no, status=no, scrollbars=no, menubar=no, width=250, height=200"
      );
    });
  }
};

export default cbo_share;