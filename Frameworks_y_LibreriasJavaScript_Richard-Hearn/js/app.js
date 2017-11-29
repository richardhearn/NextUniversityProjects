$(document).ready(function(){
    animacionTitulo(); //se llama la funcion de animacion de titulo
    $(".img-dulce" ).css("width", "88px"); //se alinean las columnas 
    $(".colu" ).css("margin-bottom", "7px");
});

var click = 0
var columnas = $('*[class^="col-"]'); // obtenemos el arreglo de las columnas
var puntos = 0; // variable que guarda los puntos
var movimientos = 0; //variable que guarda los movimientos realizados

function desaparecer(){ //funcion que desaparece los dulces que hacen match
    $(".seleccionado").parent().remove()

}

function animacionTitulo(){ //funcion de la animacion del titulo para cambiar de color
    $( ".main-titulo" ).animate({
        color: "green",
      }, 200)
      .animate({
        color: "blue",
      }, 200,
    animacionTitulo)
}

$(".btn-reinicio").click(function(){ // evento para el boton de reincio
    click++
    if (click==1){
        mostrarDulces()
        setTimeout(validarVertical,800)
        setTimeout(iniciarTiempo,1000)
        puntos = 0;
        movimientos = 0;
        sumarMovimientos(0)
        sumarPuntos(0)
        $(".btn-reinicio").text("Reiniciar")
    }
    else{
        window.location.reload();
    }
})

function mostrarDulces(){ //funcion que muestra los dulces aleatoriamente al cargar la pagina
    var columnas = $(".colu img");
    $('*[class^="col-"]').css("display", "none").fadeIn(1800)
    for (var i =0; i<columnas.length; i++){
        min = Math.ceil(1);
        max = Math.floor(5);
        imagen = "image/" + (Math.floor(Math.random() * (max - min)) + min) + ".png";
        $(columnas[i]).attr("src",imagen)
    }   
}


function validarVertical(){ //funcion que validad los matches de dulces verticalmente, a su vez llama a la funcion que los valida horizontalmente
    var j = 0;
    
    for(var i=0; i<columnas.length; i++){ //ciclo for por columna
        var imgCol = $(".col-"+(i+1)+" img"); // obtenemos el arreglo de imagenes por columna
        for( j=0; j<imgCol.length; j++){ // recorremos las imagenes por columna
            if (($(imgCol[j]).attr("src") == $(imgCol[j+1]).attr("src")) && ($(imgCol[j+1]).attr("src") == $(imgCol[j+2]).attr("src"))){ //validamos si los 3 primeros dulces son iguales
                
                if ($(imgCol[j+2]).attr("src") == $(imgCol[j+3]).attr("src")){ //validamos si hay un 4to dulce igual a los primeros 3
                    
                    if ($(imgCol[j+3]).attr("src") == $(imgCol[j+4]).attr("src")){ //validamos si hay un 5to dulce
                        
                        if($(imgCol[j+4]).attr("src") == $(imgCol[j+5]).attr("src")){ //validamos si hay un 6to dulce
                            validarHorizontal(j,i) //llamamos a la funcion que valida lo matches de dulces horizontalmente y le pasamos la columna y el indice de dulce en la columna actual
                            console.log("columna "+(i+1)+" sextete de dulces") //si hay 6 dulces iguales, sumamos 6 puntos,
                            puntos+=6; //sumamos 6 puntos
                            sumarPuntos(puntos) //llamamos a la funcion que suma los puntos y los muestra en pantalla
                            obtenerDulcesVertical(j, (j+5), i) //llamamos a la funcion que va seleccionando los matches de dulces, le pasamos como parametro de donde a donde debe seleccionar los dulces y el indice
                             j+=5;
                        }else {
                            validarHorizontal(j,i)
                            console.log("columna "+(i+1)+" quintupla de dulces")
                            puntos+=5;
                            sumarPuntos(puntos)
                            obtenerDulcesVertical(j, (j+4), i)
                             j+=4;
                        } 
                    }else {
                        validarHorizontal(j,i)
                        console.log("columna "+(i+1)+" cuarteto de dulces")
                        puntos+=4;
                        sumarPuntos(puntos)
                        obtenerDulcesVertical(j, (j+3), i)
                        j+=3;
                    }
                }else {
                    validarHorizontal(j,i)
                    console.log("columna "+(i+1)+" triplete de dulces")
                    puntos+=3;
                    sumarPuntos(puntos)
                    obtenerDulcesVertical(j, (j+2), i)
                    j+=2;
                }
            }else {
                validarHorizontal(j,i)
                console.log("no")
            }
        }
    }
    
    if ($(".seleccionado").length != 0){ //si hay dulces seleccionado, es decir matches, se desaparecen y luego se llenan esos espacios con nuevos dulces aleatorios
        setTimeout(desaparecer,1000)
        setTimeout(agregarDulces,1200)
    }else {
        
    }

}

function validarHorizontal(indexD, indexC){ //funcion que valida si hay dulces iguales horizontalmente
    indexD+=1;
    indexC+=1;
    if ( ($(".col-"+(indexC)+" div:nth-child(" +(indexD)+") img").attr("src") ==  $(".col-"+(indexC+1)+" div:nth-child(" +(indexD)+") img").attr("src")) && ($(".col-"+(indexC+1)+" div:nth-child(" +(indexD)+") img").attr("src") == $(".col-"+(indexC+2)+" div:nth-child(" +(indexD)+") img").attr("src")) ){ //se valida si los 3 primeros dulces horizontalmente son iguales
        
        if($(".col-"+(indexC+2)+" div:nth-child(" +(indexD)+") img").attr("src") == $(".col-"+(indexC+3)+" div:nth-child(" +(indexD)+") img").attr("src")){ //se valida si hay 4 dulces iguales

            if($(".col-"+(indexC+3)+" div:nth-child(" +(indexD)+") img").attr("src") == $(".col-"+(indexC+4)+" div:nth-child(" +(indexD)+") img").attr("src")){ //si hay 5 dulces iguales

                if($(".col-"+(indexC+4)+" div:nth-child(" +(indexD)+") img").attr("src") == $(".col-"+(indexC+5)+" div:nth-child(" +(indexD)+") img").attr("src")){ //si hay 6 dulces iguales

                }else{
                    puntos+=5; //se suman 5 puntos y se llama la funcion para sumar los puntos y mostrarlos en pantalla
                    sumarPuntos(puntos)
                    obtenerDulcesHorizontal(indexD,indexC,5) //se llama la funcion que selecciona los match de dulces
                }

            }else{  
                puntos+=4; 
                sumarPuntos(puntos)
                obtenerDulcesHorizontal(indexD,indexC,4)
            }

        }else{
            puntos+=3;
            sumarPuntos(puntos)
            obtenerDulcesHorizontal(indexD,indexC,3)
        }

    }else{

    }
    
}

function obtenerDulcesVertical(inicio, final, indexC){ //funcion que va seleccionando los matches de dulces verticalmente para posteriormente desaparecerlos
    indexC++; //columna que va a recorrer
    for (var i = inicio; i<=final; i++ ){ //
        $(".col-"+(indexC)+" div:nth-child(" +(i+1)+") img").addClass("seleccionado") 
        .animate({
            backgroundColor: "#30f78b",
          }, 450).fadeOut(600)
    }
}


function obtenerDulcesHorizontal(indexD, indexC, ciclo){ //funcion que va seleccionando los matches de dulces horizontalmente para posteriormente desaparecerlos
    for (var i = 0; i<ciclo; i++ ){
        $(".col-"+(indexC)+" div:nth-child(" +(indexD)+") img").addClass("seleccionado")
        .animate({
            backgroundColor: "#30f78b",
          }, 450).fadeOut(600) 
          indexC++
    }
    
}

function agregarDulces(){ // funcion que reccore la matriz y va llenando los espacios vacios con nuevos dulces aleatorios
    
    var columnas = $('*[class^="col-"]');
    var min = Math.ceil(1);
    var max = Math.floor(5);
   
    for(var i=0; i<columnas.length; i++){ //recorremos cada columna
        var cont = 0;
       // var element = []
        if ($(".col-"+(i+1)+" img").length<7){ //identificamos si la columna le faltan dulces

            var ciclo = (7 - $(".col-"+(i+1)+" img").length); //identificamos cuandos dulces faltan en esa columna
            //var sec = (ciclo-7)*(-1);
            while (cont < ciclo){ //recorremos los espacios vacios
                //var img = $(".col-"+(i+1)+" img")
                var imagen = "image/" + (Math.floor(Math.random() * (max - min)) + min) + ".png"; //generamos un dulce aleatorio
                $(".col-"+(i+1)).prepend("<div class='col l12 m12 s12 colu'><img src='"+imagen+"' class='img-dulce'> </img></div>")  //se lo agregamos a la columna 
                $(".col-"+(i+1)+" div:nth-child(" +(1)+") img").hide().delay(10).show("bounce",500) //con un efecto de rebote hacia abajo
                $(".img-dulce" ).css("width", "88px"); // le agregamos css para que quede alineado igual a los demas dulces
                $(".colu" ).css("margin-bottom", "7px"); // le agregamos css para que quede alineado igual a los demas dulces
                cont++     
            }

        }else{ //si la columna esta llena de dulces, no se debe hacer nada

        }

    }
    
    $( function() { //la funcion que permite el drag and drop 
       
            
            $( "img" ).draggable({ 
                //los dulces pueden ser arrastrados
                revert: 'invalid', //si no concuerda con el droppable, se regresa a su lugar original
                start: function() {

                    var indexD
                    var dre = $(this)
                    var col = $(this).closest('*[class^="col-"]').attr("class").substring(4) //obtenemos la columna de la imagen que se esta arrastrando

                    var n = $(this).parent().index(".colu") // obtenemos el indice del dulce en base a los 49 dulces
                    
                    if (n < 7 ){  //metodo para poder obtener el indice del dulce en su respectiva columna
                        indexD = $(this).parent().index(".colu") + 1;
                    }else if(n < 14){
                        indexD = $(this).parent().index(".colu") - 6;
                    } else if (n < 21){
                        indexD = $(this).parent().index(".colu") - 13;
                    } else if (n < 28){
                        indexD = $(this).parent().index(".colu") - 20;
                    } else if (n < 35){
                        indexD = $(this).parent().index(".colu") - 27;
                    } else if (n < 42){
                        indexD = $(this).parent().index(".colu") - 34;
                    } else {
                        indexD = $(this).parent().index(".colu") - 41;
                    }
                    
                    var dragObj = $(this).parent()
                    var drag1 = $(dragObj).next() //opcion de droppable, el dulce se puede mover hacia abajo
                    var drag2 = $(dragObj).prev() //opcion de droppable, el dulce se puede mover a su arriba
                    var drag3 =  $(".col-"+(col-1)+" div:nth-child(" +(indexD)+")") //opcion de droppable, el dulce se puede mover a su izquierda
                    var drag4 =  $(drag3).parent().next().next().children() //opcion de droppable, el dulce se puede mover a su derecha
                    drag4 = $(drag4[indexD-1]) //opcion de droppable, el dulce se puede mover a su derecha
                    
                    $(drag1).droppable({ 
                        accept: dre, //el droppable acepta los dulces
                        drop: function(event, ui) {   //funcion al hacer el drop
                        var move = $(this).children().detach(); //se guarda el dulce que esta en el droppable actual y se guarda en una variable
                           $(ui.draggable).parent().append(move); //se mueve la variable al elemento padre del dulce que esta siendo arrastrado
                           $(this).append($(ui.draggable)); // el dulce que esta siendo arrastrado se añade al droppable, se intercambiaron los dulces de lugar
                           $(ui.draggable).css("top","0")  // se alinean los dulces para que no haya problemas visuales
                           setTimeout(validarVertical,500) //una vez que los dulces se intercambian, vamos a validar si hay matches en la matriz
                           
                    }
                   })

                   $(drag2).droppable({  //aqui se repite el mismo proceso con la opcion 2 droppable
                    accept: dre,
                    drop: function(event, ui) {   
                       var move = $(this).children().detach();
                       $(ui.draggable).parent().append(move);
                       $(this).append($(ui.draggable));
                       $(ui.draggable).css("top","0") 
                       setTimeout(validarVertical,500)
                }
               })

                    $(drag3).droppable({ //aqui se repite el mismo proceso con la opcion 3 droppable
                        accept: dre,
                        drop: function(event, ui) {   
                        var move = $(this).children().detach();
                        $(ui.draggable).parent().append(move);
                        $(this).append($(ui.draggable));
                        $(ui.draggable).css("top","0") // se alinean los dulces para que no haya problemas visuales
                        $(ui.draggable).css("left","0")  // se alinean los dulces para que no haya problemas visuales
                        setTimeout(validarVertical,500)
                    }
                })

                    $(drag4).droppable({ //aqui se repite el mismo proceso con la opcion 4 droppable
                        accept: dre,
                        drop: function(event, ui) {   
                        var move = $(this).children().detach();
                        $(ui.draggable).parent().append(move);
                        $(this).append($(ui.draggable));
                        $(ui.draggable).css("top","0") // se alinean los dulces para que no haya problemas visuales
                        $(ui.draggable).css("left","0")  // se alinean los dulces para que no haya problemas visuales
                        setTimeout(validarVertical,500)
                    }
                })

                   
                },

                stop: function() { // al soltar el dulce, se suma 1 movimiento y se muestra en pantalla, se le elimina la clase droppable para que no existan problemas con los elementos draggable actuales
                    movimientos++;
                    sumarMovimientos(movimientos);
                    $(".colu.ui-droppable").droppable("destroy");
                }

               
              });

     });
     $(".img-dulce" ).css("left", "0px"); //por si las dudas, se alinean los dulces al finalizar la funcio para que no haya problemas visuales
     $(".img-dulce" ).css("top", "0px");
     $(".img-dulce" ).css("position", "relative");
    setTimeout(validarVertical,800)
}

function sumarPuntos(puntos){  //funcion que muestra los puntos en pantalla
    $("#score-text").text(puntos)
} 

function sumarMovimientos(movimientos){ //funcion que muestra los movimientos en pantalla
    $("#movimientos-text").text(movimientos)
}

function iniciarTiempo(){  //funcion que recorre el tiempo al iniciar el juego y muestra los puntos
    var start = 120;
    
    setInterval(function() {  //se le da 120 segundos al usuario para que haga la mayor cantidad de puntos, despues se muestra su cantidad de puntos y moviemientos y la opcion de volver a jugar con un boton de reinicio
        start-=1;
        $('#timer').text((start) + " Seconds");
        if (start==0){
            $("body").empty()
            $("body").append("<div class='mostrar'><div class='puntos'><h1>PUNTOS:</h1> <br><br> </div><div class='movimientos'><h1>MOVIMIENTOS:</h1> <br><br> </div></div>")
            $(".puntos").append("<h1>"+puntos+"</h1>")
            $(".movimientos").append("<h1>"+movimientos+"</h1>")
            $("body").append("<div class='buttons'><button class='btn-reinicio'>Reiniciar</button></div>")
            $(".btn-reinicio").click(function(){
                window.location.reload()
            })
        }
    }, 1000);   
}
