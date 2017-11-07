var pantalla = document.getElementById("display")
var click = 0
var numero, operador, operando
var signo = ""
var p = ""
var Calculadora = {
    init: function(){
        self = this
        var cero = document.getElementById("0")
        var uno = document.getElementById("1")
        var dos = document.getElementById("2")
        var tres = document.getElementById("3")
        var cuatro = document.getElementById("4")
        var cinco = document.getElementById("5")
        var seis = document.getElementById("6")
        var siete = document.getElementById("7")
        var ocho = document.getElementById("8")
        var nueve = document.getElementById("9")
        var on = document.getElementById("on")
        var sign = document.getElementById("sign")
        var punto = document.getElementById("punto")
        var raiz = document.getElementById("raiz")
        var div = document.getElementById("dividido")
        var por = document.getElementById("por")
        var menos = document.getElementById("menos")
        var mas = document.getElementById("mas")
        var igual = document.getElementById("igual")
        cero.addEventListener("click",function(){
            if (pantalla.innerHTML=="0"){ //validamos si solo esta el 0 en pantalla para que no se vuelva a repetir
                
            } else {
                click++
                numero = "0"
                self.escribir(numero)
            }
        })
        uno.addEventListener("click",function(){
            numero = "1"
            self.validarLongitud(numero)
        })
        dos.addEventListener("click",function(){
            numero = "2"
            self.validarLongitud(numero)
        })
        tres.addEventListener("click",function(){
            numero = "3"
            self.validarLongitud(numero)
        })
        cuatro.addEventListener("click",function(){
            numero = "4"
            self.validarLongitud(numero)
        })
        cinco.addEventListener("click",function(){
            numero = "5"
            self.validarLongitud(numero)
        })
        seis.addEventListener("click",function(){
            numero = "6"
            self.validarLongitud(numero)
        })
        siete.addEventListener("click",function(){
            numero = "7"
            self.validarLongitud(numero)
        })
        ocho.addEventListener("click",function(){
            numero = "8"
            self.validarLongitud(numero)
        })
        nueve.addEventListener("click",function(){
            numero = "9"
            self.validarLongitud(numero)
        })
        sign.addEventListener("click",function(){ //funcion para poner signo negativo
            if (pantalla.innerHTML == "0"){
                alert("Ingrese un numero primero")
            } else {
                self.validarSigno()
            }
        })
        on.addEventListener("click",function(){
            boton = "on"
            self.escribir(boton)
        })
        punto.addEventListener("click",function(){
            if (p == "."){
                alert("Ya existe un punto")
            }else{
                self.validarPunto()
            }
        })
        mas.addEventListener("click",function(){
            operador = "+"
            self.escribir(operador)
        })
    },
    escribir: function(tecla){ 
        switch(tecla){
            case '0':
            self.validarEscribir(tecla)
            break;
            case '1':
            self.validarEscribir(tecla)
            break;
            case '2':
            self.validarEscribir(tecla)
            break;
            case '3':
            self.validarEscribir(tecla)
            break;
            case '4':
            self.validarEscribir(tecla)
            break;
            case '5':
            self.validarEscribir(tecla)
            break;
            case '6':
            self.validarEscribir(tecla)
            break;
            case '7':
            self.validarEscribir(tecla)
            break;
            case '8':
            self.validarEscribir(tecla)
            break;
            case '9':
            self.validarEscribir(tecla)
            break;
            case 'on':
            pantalla.innerHTML = "0"  //reiniciamos todos los valores al presionar la tecla "ON"
            operando = ""
            numero = ""
            signo = ""
            click = 0
            p = ""
            break;
        }   
    },
    validarEscribir: function(tecla){//validamos si solo esta el 0 en pantalla para reemplazarlo por el primer numero
        if (click==1){
            operando = tecla //en el operando guardando los numeros ingresados para realizar operaciones 
            pantalla.innerHTML = operando
        }else {
            operando += tecla // a partir del 2do click vamos a ir sumando los numeros al operando, que utilizaremos para las operaciones
            pantalla.innerHTML = signo + operando //en pantalla se va a mostrar el signo mas el operando
        }
    },
    validarSigno: function(){ //funcion para poner signo negativo o quitarlo
        if (signo == ""){
            signo = "-"
            pantalla.innerHTML = signo + operando
        }else{
            signo = ""
            pantalla.innerHTML = operando
        }
    },
    validarLongitud: function(n){ //validamos la longitud del operando y se escribe si no pasa el limite
        if (click>0){ //validamos si ya se hizo un click, porque sino entonces "operando" tendria valor undefined y no podriamos realizar la validacion
           if (p == ""){ //si el operando tiene punto, se valida la longitud hasta 9 caracteres, ya que el punto no deberia contar como digito
            if (operando.length >= 8){
                alert("Numero maximo de digitos alcanzado")
            } else{
                click++
                self.escribir(n) //si no alcanzo el limite de digitos, se ingresa el nuevo numero
            }
           }else{
            if (operando.length >= 9){ //en caso de tener punto se hace la validacion hasta 9 caracteres
                alert("Numero maximo de digitos alcanzado")
            } else{
                click++
                self.escribir(n) //si no alcanzo el limite de digitos, se ingresa el nuevo numero
            }  
           }
        }else{
            click++
            self.escribir(n)
        }
    },
    validarPunto: function(){ // funcion para ingresar el punto
        if (pantalla.innerHTML == "0"){  // si solo hay 0 en la pantalla se agrega el punto  y el valor queda como "0."
            click++
            p = "."
            pantalla.innerHTML = "0."
            operando = "0."
            
        }else { // de lo contrario seria el valor del operando + el punto a la derecha y con su signo en caso de tener
            click++
            p = "."
            pantalla.innerHTML = signo + operando + p
            operando += p
            
        } 
    }

}

Calculadora.init();

