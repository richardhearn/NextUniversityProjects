import { Component } from '@angular/core';
import axios from 'axios'
import { Http } from '@angular/http';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	

	ngAfterViewInit() {
		var response = [
	{
		"name": "mario@gmail.com",
		"pass": "123",
		"nombre": "Mario"
	},
	{
		"name": "juan@gmail.com",
		"pass": "1234",
		"nombre": "Juan"
	},
	{
		"name": "jose@gmail.com",
		"pass": "1234",
		"nombre": "Jose"
	},
	{
		"name": "cristina@gmail.com",
		"pass": "123321",
		"nombre": "Cristina"
	},
	{
		"name": "ana@gmail.com",
		"pass": "ana123",
		"nombre": "Ana"
	},
	{
		"name": "jessica@gmail.com",
		"pass": "jessi",
		"nombre": "Jessica"
	}
]

var bodega = [
	{
		"nombre": "aguacate",
		"precio": 3,
		"disponible": 46,
		"ruta": "img/aguacate.jpg"
	},
	{
		"nombre": "ajo",
		"precio": 2,
		"disponible": 49,
		"ruta": "img/ajo.jpg"
	},
	{
		"nombre": "almendras",
		"precio": 3.55,
		"disponible": 40,
		"ruta": "img/almendras.jpg"	
	},
	{
		"nombre": "arandanos",
		"precio": 1.99,
		"disponible": 150,
		"ruta": "img/arandanos.jpg"
	},
	{
		"nombre": "calabaza",
		"precio": 7.25,
		"disponible": 76,
		"ruta": "img/calabaza.jpg"
	},
	{
		"nombre": "canela",
		"precio": 4.25,
		"disponible": 36,
		"ruta": "img/canela.jpg"
	},
	{
		"nombre": "cebolla",
		"precio": 4.65,
		"disponible": 44,
		"ruta": "img/cebolla.jpg"
	},
	{
		"nombre": "fresa",
		"precio": 3.65,
		"disponible": 72,
		"ruta": "img/fresa.jpg"
	},
	{
		"nombre": "kiwi",
		"precio": 6.55,
		"disponible": 88,
		"ruta": "img/kiwi.jpg"
	},
	{
		"nombre": "limon",
		"precio": 3.45,
		"disponible": 70,
		"ruta": "img/limon.jpg"
	},
	{
		"nombre": "lychee",
		"precio": 6.85,
		"disponible": 56,
		"ruta": "/img/lychee.jpg"
	}
]
		

		$(".iniciar").click(function(){
			var username = $('#email').val();
	        var passw = $('#password').val();
			for(var i = 0; i <response.length; i++ ){

                    if(response[i].name == username && response[i].pass == passw){
                      
                      var bienvenido = "si";
                      var usuario = response[i].nombre
                    }else {
                      
                    }

                  }
                  if(bienvenido == "si"){
                  	$("form").hide()
                  	$(".div-main").show()
                    for(var i = 0; i<bodega.length; i++){
        			$(".div-top").append("<div class='col m3 l3 card producto'><img class='responsive-img' src='"+bodega[i].ruta+"'><div><p>"+bodega[i].nombre+"</p><p>Precio: "+bodega[i].precio+"</p><p>Unidades Disponibles: "+bodega[i].disponible+"</p><a class='waves-effect #64b5f6 blue lighten-2 btn ver-mas' id='"+bodega[i].nombre+"'>Ver mas</a><br><a class='waves-effect #66bb6a green lighten-1 btn col m6 l6 anadir' id='"+bodega[i].nombre+"'>Añadir</a><select class='browser-default'><option value='1' selected>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select></div>")
        		}
                  }else {
                    console.log("correo o contraseña invalido")
                  }
		})

		$( "#busqueda" ).keyup(function(event) {
    				if ($("#busqueda").val() == "") {
        				$(".responsive-img").each(function(){
        					$(this).parent().show()
        				})
    				}
					$(".responsive-img").each(function(){
        	    		if($(this).attr("src").indexOf($("#busqueda").val()) > -1){
									
						}else{
							$(this).parent().hide()
						}
        			});				
				});

				$(".p4").click(function(event){
  					event.preventDefault();
  					location.reload();
  				})

  				$(".pagar").click(function(e){
  					$(".p2").css("color", "#006064")
  					e.preventDefault()
 		 			$(".div-top").show();
 		 			$(".carrito").hide();
 		 			$(".mostrarProductos").empty();
 		 			cantidad = 0;
					total = 0;
					ruta = ""
					$("#total").text("")
  				})

  				$(".cancelar").click(function(e){
  					$(".p2").css("color", "#006064")
  					e.preventDefault()
 		 			$(".div-top").show();
 		 			$(".carrito").hide();
 		 			$(".mostrarProductos").empty();
 		 			cantidad = 0;
					total = 0;
					ruta = ""
					$("#total").text("")
  				})

  				var cantidad = 0;
				var total = 0;
				var ruta = ""
				var nombre = ""

				$(".anadir").click(function(event){
					

					cantidad = $("#" + event.target.id).next().next().next().val()
					console.log(cantidad)
					var ruta = "img/"+event.target.id+".jpg"
					nombre = event.target.id;

					for(var i = 0; i<bodega.length; i++){
						if(bodega[i].nombre == event.target.id){
							var precio = bodega[i].precio;
						}
					}
					total += cantidad*precio;
					
					$(".mostrarProductos").append("<div class='col l12 m12 card'><img class='responsive-img' src='"+ruta+"'><div><p> "+nombre+"</p><p>Unidades: "+cantidad+"</p><p>Precio: $"+precio+"</p><p><strong>SubTotal: $"+cantidad*precio+"</strong></p></div></div>")
					$("#total").text("Total: $"+total)

 		 		})

 		 		$(".p2").click(function(e){
 		 		e.preventDefault()
 		 		$(".div-top").hide();
 		 		$(".carrito").show();

 		 		})

	}

}