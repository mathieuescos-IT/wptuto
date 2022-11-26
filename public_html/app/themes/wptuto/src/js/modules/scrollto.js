import jqueryeasing from 'jquery.easing';

const scrollto = function (target, opts) {
  var config = {
    offset: 0,
    parent: $("html, body"),
    callback: false,
    duration: 1000
  };

  for (var attrname in opts) {
    config[attrname] = opts[attrname];
  }

  var $parent = $(config.parent);
  var currentpos = $parent.scrollTop();

  var pos = 0;
  if (isNaN(target) && $(target).get().length > 0)
    pos = parseInt($(target).offset().top);
  else if(!isNaN(target))
    pos = target;

  pos += config.offset;

  $parent
    .stop(true, true)
    .animate({ scrollTop: pos }, config.duration, "easeInOutExpo", function () {
      if (typeof callback != "undefined") callback();
    });
};

export default scrollto;
