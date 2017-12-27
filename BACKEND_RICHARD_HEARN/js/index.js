/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

$(document).ready(function() {
    $('select').material_select();
});

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

inicializarSlider();
playVideoOnScroll();



$("#mostrarTodos").on("click",function(){


  $.ajax({
    url: './php/getdata.php',  
    success: function(data){
    var obj = JSON.parse(data);
    mostrarTodos(obj) 
    },
    error: function(){
      alert("error al buscar los datos");
    }
  });
})


 $('#formulario').submit(function(event){
    //var nombre = $('form').find('input[name="nombre_usuario"]').val();
    var ciudad = $("#selectCiudad").val();
    var tipo = $("#selectTipo").val()
    var valorInicial = $(".irs-from").text()
    valorInicial = valorInicial.replace("$", "");
    valorInicial = valorInicial.replace(" ", "");
    var valorFinal = $(".irs-to").text()
    valorFinal = valorFinal.replace("$", "");
    valorFinal = valorFinal.replace(" ", "");
    
    event.preventDefault();
    $.ajax(
    {
      url:'./php/formulario.php',
      method: 'POST',
      data: {ciudad: ciudad,
            tipo: tipo,
            valorInicial: valorInicial,
            valorFinal: valorFinal}
      })
      .done(function(data){
      console.log(JSON.parse(data));
      var obj = JSON.parse(data);
      mostrarTodos(obj);
    })
  });


function mostrarTodos(arr){
  $(".div-card").remove()
  for (var i = 0; i<arr.length; i++){
    $(".colContenido").append("<div class='card row div-card'>"+
                              "<div class='col m5 l5'>"+
                              "<img src='img/home.jpg' class='imagen col m12 l12'>"+
                              "</div>"+
                              "<div class='descripcion col m7 l7'>"+
                              "<p><b>Descripcion:</b> "+arr[i].Direccion+"</p>"+
                              "<p><b>Ciudad:</b> "+arr[i].Ciudad+"</p>"+
                              "<p><b>Telefono:</b> "+arr[i].Telefono+"</p>"+
                              "<p><b>Codigo Postal:</b> "+arr[i].Codigo_Postal+"</p>"+
                              "<p><b>Tipo:</b> "+arr[i].Tipo+"</p>"+
                              "<p class='precio'><b>Precio:</b> "+arr[i].Precio+"</p>"+
                              "</div>"+
                              "</div>")
  }
  $(".descripcion > p").css("white-space", "nowrap");
  $(".imagen").css("height", $(".descripcion").height());
  $(".div-card").css("width", "100%")
  $(".precio").css("color", "#c9ae20")
}





