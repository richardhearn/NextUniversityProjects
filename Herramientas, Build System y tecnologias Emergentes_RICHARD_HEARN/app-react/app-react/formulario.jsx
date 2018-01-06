import React from 'react';
import $ from 'jquery'; 
import axios from 'axios'
import Bodega from './bodega.jsx'
import { render } from 'react-dom'

class Formulario extends React.Component{
	constructor(){
		super()
	}
    /*Este es el formulario de inicio de sesion*/
    render(){
        return(
          <div className="div-principal center-align">

            <form className="row ">
              <h3>Inicia Sesion</h3>
              <div className="input-field col l12 m12 s12">
                <input id="email" type="email" className="validate" required="true" aria-required="true"></input>
                <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
              </div>

              <div className="input-field col l12 m12 s12">
                <input id="password" type="password" className="validate" required="true" aria-required="true"></input>
                <label htmlFor="password" data-error="wrong" data-success="right">Password</label>
              </div>

              <div className="col l12 m12 s12">
                <a className="waves-effect waves-light btn" onClick={this.iniciarSesion.bind(this)}>Iniciar</a>
              </div>

            </form>
          </div>
            )
        }

        /*Funcion que valida los datos ingresados en los inputs y los valida con los datos en la base de datos*/
        iniciarSesion(){

          if(document.getElementById('email').value == "" || document.getElementById('password').value == ""){
            alert('ingresa informacion en los campos')
          } else {
            var username = document.getElementById('email').value;
            var passw = document.getElementById('password').value;

            axios.get('usuarios.json') /*llamamos los datos de la base de datos*/
              .then(function (response) {
                  for(var i = 0; i <response.data.length; i++ ){

                    if(response.data[i].name == username && response.data[i].pass == passw){
                      
                      var bienvenido = "si";
                      var usuario = response.data[i].nombre
                    }else {
                      
                    }

                  }
                  if(bienvenido == "si"){  /*Si los datos concuerdan, se renderiza la pagina de productos*/
                    render(<Bodega />, document.getElementById('app'));
                    alert("Bienvenido "+usuario)
                  }else {
                    alert("correo o contraseña invalido") /*si un dato es incorrecto se muestra mensaje*/
                  }
              })
              
          }
}

}

export default Formulario;