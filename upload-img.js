function addImgForm(){
  $('#first_photo_form>aside').append('<form enctype="multipart/form-data" method="post" class="photo_form">{% csrf_token %}<div class="thesuite-form"><label>Descripción</label><input type="text" name="description"></div><div class="thesuite-form no-border"><input onchange="changeInputName(event,this)" type="file" accept="image/jpeg;capture=camera" name="photo_original"></div></form>');
}

var _URL = window.URL;
function changeInputName(event,obj){
  // $(obj).parent("div.custom-file.file-upload-wrapper").find('label').html('<span class="mr-2 icon-checkmark"></span>'+$(obj).val().replace(/.*(\/|\\)/, ''));
  let files = event.target.files;
  let height = 0;
  let width = 0;
  let _URL = window.URL || window.webkitURL;
  for (var i = 0; i < files.length; i++) {
      let img = new Image();
      img.onload = function () {
          height = img.height;
          width = img.width;
          if (500 > width || 400 > height) {
            $(obj).parent("form").parent("div").html('<div class="alert alert-danger"><span class="icon-cross mr-2"></span>Atención : el tamaño mínimo admitido es 400px de alto por 500px de ancho, tu imagen es demasiado pequeña <u>('+height+'px * '+width+'px)</u> y ha sido rechazada.</div>');
          }
      }
      img.src = _URL.createObjectURL(files[i]);
  }
}

function uploadImg(){
  $('body').append('<section id="waiting-loader"><figure class="center"><img src="{% static "img/loading.svg" %}" alt="" /></figure></section>');
  let all_form = $('.photo_form');
  let counter_max = all_form.length;
  var local_counter = 0;

  function LetsGoAjax(){
    if ($(all_form[local_counter]).find('input[name=photo_original]').val() == "") {
      $(all_form[local_counter]).parent('div').remove();
      local_counter = local_counter + 1;
      LetsGoAjax();
    }
    if (counter_max > local_counter){
      // let form = $(all_form[local_counter]).serialize();
      var formData = new FormData(all_form[local_counter]);
      current_name = $(all_form[local_counter]).find('label').html();
      $.ajax({
        type: "POST",
        url: "{% url 'upload_photo_url' username %}",
        data: formData,
    		success: function(){
    			$(all_form[local_counter]).parent('div').html('<div class="alert-success pt-3 pb-3 pl-3 pb-3" style="display:block;">'+current_name+'</div>');
          local_counter = local_counter + 1;
          LetsGoAjax();
      	},
        error: function() {
          local_counter = local_counter + 1;
          LetsGoAjax();
    	  },
        cache: false,
        contentType: false,
        processData: false
      });
    }
    else{
      window.location.reload();
    }
  }
  LetsGoAjax();
}
