const cbo_hilight = {
  init: function (opts) {
    const s = $.extend({
        'lineClass' : 'line'
    },opts);

    $('.cbo-hilight:not(.hilight--static)').each(function () {
        var self = this,
            $self = $(self),
            $line,
            $prev;
        $self.find('.' + s.lineClass).contents().unwrap();
        $self.html(function (i, h) {
            const words = h.split(' ');
            let str = '';
            words.forEach(( word ) => {
              str += ' <span class="' + s.lineClass + '">' + word + '</span>'
            })
            return str;
            //return h.replace(/(\b[\w']+\b)/g, '<span class="' + s.lineClass + '">$1</span>');
        });
        $self.addClass('hilight--done');
        /*$self.find('.line + .line').each(function(i, el){
            $line = $(this),
            $prev = $line.prev('.line');
            if ($line.offset().top === $prev.offset().top) {
                $prev.append(el.previousSibling, $line.contents());
                $line.remove();
            }
        });*/
    });
  }
};

export default cbo_hilight;
