$(document).ready(function() {

  // La magia aquí
  $('select, input:file, input:checkbox, input:radio, input:file').formikation({
    mapClass: true,
    mapStyle: true
  });

});
