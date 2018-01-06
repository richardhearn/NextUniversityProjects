import React from 'react';
import $ from 'jquery'; 
import axios from 'axios'  /*libreria que utilice para hacer las peticiones a la base de datos*/
import Formulario from './formulario.jsx'

import { render } from 'react-dom'
import ReactDOM from 'react-dom';

class Bodega extends React.Component{
	componentDidMount() {

		/*Llamamos a la base de datos y renderizamos todos los productos utilizando la funcion append*/

    	axios.get('bodega.json')
              .then(function (response) {
                  for(var i = 0; i<response.data.length; i++){
        			$(".div-top").append("<div class='col m3 l3 card producto'><img class='responsive-img' src='"+response.data[i].ruta+"'><div><p>"+response.data[i].nombre+"</p><p>Precio: "+response.data[i].precio+"</p><p>Unidades Disponibles: "+response.data[i].disponible+"</p><a class='waves-effect #64b5f6 blue lighten-2 btn ver-mas' id='"+response.data[i].nombre+"'>Ver mas</a><br><a class='waves-effect #66bb6a green lighten-1 btn col m6 l6 anadir' id='"+response.data[i].nombre+"'>Añadir</a><select class='browser-default'><option value='1' selected>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select></div>")
        		}

        		/*Boton para salir y regresar al inicio de sesion*/

  				$(".p4").click(function(event){
  					event.preventDefault();
  					render(<Formulario />, document.getElementById('app'));
  				})


  				/*funcion para el Boton de pagar al realizar la compra, se reincian todos los valores y nos regresa a los productos*/

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


  				/*funcion para el Boton para cancelar la compra*/

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
  					
  				
  				/*Funcion que va mostrando los productos que hacen match con lo que se va ingresando en el campo de busqueda*/

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

				/*variables para gestionar las cantidades, precio, productos*/

				var cantidad = 0;
				var total = 0;
				var ruta = ""


				/*funcion para agregar los productos a nuestro carrito*/

				$('.anadir').click(function(event){
					$(".p2").css("color", "#ff8080")
					cantidad = $("#" + event.target.id).next().next().next().val()
					var ruta = "img/"+event.target.id+".jpg"

					var nombre = event.target.id;

					for(var i = 0; i<response.data.length; i++){
						if(response.data[i].nombre == event.target.id){
							var precio = response.data[i].precio;
						}
					}
					total += cantidad*precio.toFixed(2);;

					$(".mostrarProductos").append("<div class='col l12 m12 card'><img class='responsive-img' src='"+ruta+"'><div><p> "+nombre+"</p><p>Unidades: "+cantidad+"</p><p>Precio: $"+precio+"</p><p><strong>SubTotal: $"+(cantidad*precio).toFixed(2)+"</strong></p></div></div>")
					$("#total").text("Total: $"+total)

					alert("Se agrego el producto al carrito")

 		 		})

 		 		/*funcion del boton que nos muestra nuestro carrito hasta el momento*/

 		 		$(".p2").click(function(e){
 		 		e.preventDefault()
 		 		$(".div-top").hide();
 		 		$(".carrito").show();
 		 		$(".ver").empty()
 		 		})

 		 		/*funcion para el boton de ver mas*/

 		 		$(".ver-mas").click(function(e){
 		 			e.preventDefault()
 		 			let ruta = "img/"+event.target.id+".jpg"
 		 			let nombre = event.target.id
 		 			for(var i = 0; i<response.data.length; i++){ //buscamos en la base el producto que de desea ver
						if(response.data[i].nombre == event.target.id){
							var pre = response.data[i].precio;
							var disp = response.data[i].disponible;
						}
					}

 		 			$(".div-top").hide() //escondemos todo y solo mostramos el producto seleccionado
 		 			$(".ver").show()
 		 			$(".ver").html("<div class='col l12 m12 card'><img class='responsive-img' src='"+ruta+"'><div><p> "+nombre+"</p><p>Unidades: "+disp+"</p><p>Precio: $"+pre+"</p></div></div><a class='waves-effect #d84315 deep-orange darken-3 btn back'>Regresar</a>")

 		 			/*funcion del boton regresar al expandir la ventanda de los productos*/
 		 			$(".back").click(function(){
 		 			$(".div-top").show()
 		 			$(".ver").empty()
 		 			})
 		 		})

            })
            
  	}

	constructor(){
		super()
		this.state = {
		}

	}
	render() {
		/* Aqui esta todas los elementos html que se renderizan al iniciar sesion*/
		return(
			<div className="col l12 m12 s12 div-main">
	         	
			  	<nav className="col l12 m12">
			    	<div className="nav-wrapper card" >
				      	<a href="#" className="brand-logo">La Bodega</a>
				      	<ul id="nav-mobile" className="right hide-on-med-and-down">
					        <li><a href="#"><i className="large material-icons p1">apps</i></a></li>
					        <li><a href=""><i className="large material-icons p2">child_friendly</i></a></li>
					        <li><a href="#"><i className="large material-icons p3">event_note</i></a></li>
					        <li><a href=""><i className="large material-icons p4">exit_to_app</i></a></li>
				      	</ul>
			    	</div>
			  	</nav>
             
	            <div className="row l12 m12 s12 card div-top">
	            	<div className="row">
	            	<div className="col l5 m5">
	            		<h5>Catalogo de Productos</h5>
	            	</div>
	            	<div className="row right l5 m5">
	            		<div className="col l12 m12">
	            			<h6>¿Que estas buscando?</h6>
	            		</div>
	            		<div className="col l12 m12">
	            			<div className="input-field col l12 m12 s12">
				                <input id="busqueda" type="text" className="validate"></input>
				                <label htmlFor="busqueda">Buscar producto</label>
			              	</div>
	            		</div>
	            	</div>
	            	</div>

	            </div>

	            <div className="col row l12 m12 s12 card carrito">
	            	<div className="col left col l7 m7">
	            		<h5>Carrito de Compras</h5>
	            	</div>
	            	<div className="col row col l6 m6 mostrarProductos">
	            		
	            	</div>
	            	<div className="col col l6 m6 mostrarTotal">
	            		<p id='total'></p>
	            		<a className="waves-effect #43a047 green darken-1 btn pagar" onClick={this.pagar.bind(this)}>Pagar</a>
	            		<a className="waves-effect #d84315 deep-orange darken-3 btn cancelar" onClick={this.cancelar.bind(this)}>Cancelar</a>
	            	</div>

	            </div>

	            <div className="col row l12 m12 s12 card ver"></div>
	        	
            </div>
		)

	}

	/*funciones para el boton de cancelar y pagar*/
	cancelar(){
		alert("Pedido cancelado")
	}

	pagar(){
		alert("Realizo Compra con exito")
	}


}


export default Bodega