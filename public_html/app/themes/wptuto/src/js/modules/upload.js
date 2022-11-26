const cbo_upload = {
  init: function(){
    $('.cbo-form .form-upload input').each( function(){

      const $label = $(this).parent().parent().find('label span');
      const label = $label.text();

      $(this)
        .attr('data-label', label)
        .on('change', function(e){
          const val = $(this).val();
          console.log(val);
          if(val)
            $label.text( val.split(/(\\|\/)/g).pop() );
          else
            $label.text( label );
        });
    });
  }
};

export default cbo_upload;
