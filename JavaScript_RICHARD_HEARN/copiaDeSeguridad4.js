var pantalla = document.getElementById("display")
var click = 0
var clickSigno = 0
var resultado = 0
var numero, operador, operando, temporal
var i = 0
var operadores = []
var signo = ""
var p = ""
var numeros = []

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
            self.validarLongitud(numero)  // funcion para validar longitud del numero
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
            self.limpiarPantalla(boton)
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
            self.registrarOperacion(operador)
        })
        menos.addEventListener("click",function(){
            operador = "-"
            self.registrarOperacion(operador)
        })
        por.addEventListener("click",function(){
            operador = "*"
            self.registrarOperacion(operador)
        })
        dividido.addEventListener("click",function(){
            operador = "/"
            self.registrarOperacion(operador)
        })
        igual.addEventListener("click",function(){
            self.realizarOperacion()
        })
    },
    validarEscribir: function(tecla){//validamos si solo esta el 0 en pantalla para reemplazarlo por el primer numero
        if (click==1){
            operando = tecla //en el operando guardando los numeros ingresados para realizar operaciones 
            pantalla.innerHTML = operando
            temporal = pantalla.innerHTML
        }else {
            operando += tecla // a partir del 2do click vamos a ir sumando los numeros al operando, que utilizaremos para las operaciones
            pantalla.innerHTML = signo + operando //en pantalla se va a mostrar el signo mas el operando
            temporal = pantalla.innerHTML
        }
    },
    validarSigno: function(){ //funcion para poner signo negativo o quitarlo
        if (signo == ""){
            signo = "-"
            pantalla.innerHTML = signo + operando
            temporal = pantalla.innerHTML
        }else{
            signo = ""
            pantalla.innerHTML = operando  
            temporal = pantalla.innerHTML
        }
    },
    validarLongitud: function(n){ //validamos la longitud del operando y se escribe si no pasa el limite
        if (click>0){ //validamos si ya se hizo un click, porque sino entonces "operando" tendria valor undefined y no podriamos realizar la validacion
           if (p == ""){ //si el operando tiene punto, se valida la longitud hasta 9 caracteres, ya que el punto no deberia contar como digito
            if (operando.length >= 8){
                alert("Numero maximo de digitos alcanzado")
            } else{
                click++
                self.validarEscribir(n) //si no alcanzo el limite de digitos, se ingresa el nuevo numero
            }
           }else{
            if (operando.length >= 9){ //en caso de tener punto se hace la validacion hasta 9 caracteres
                alert("Numero maximo de digitos alcanzado")
            } else{
                click++
                self.validarEscribir(n) //si no alcanzó el limite de digitos, se ingresa el nuevo numero
            }  
           }
        }else{
            click++
            self.validarEscribir(n)
        }
    },
    validarPunto: function(){ // funcion para ingresar el punto
        if (pantalla.innerHTML == "0"){  // si solo hay 0 en la pantalla se agrega el punto  y el valor queda como "0."
            click++
            p = "."
            pantalla.innerHTML = "0."
            operando = "0."
            temporal = pantalla.innerHTML
            
        }else { // de lo contrario seria el valor del operando + el punto a la derecha y con su signo en caso de tener
            click++
            p = "."
            pantalla.innerHTML = signo + operando + p
            operando += p
            temporal = pantalla.innerHTML
            
        } 
    },
    registrarOperacion: function(tipoOper){
        numeros[i] = Number(pantalla.innerHTML)
        operadores[i] = tipoOper
        self.limpiarPantalla(tipoOper)
        i++
    },
    realizarOperacion: function(){
        var k = 0
        numeros[i] = Number(pantalla.innerHTML)
        
    },
    limpiarPantalla: function(tecla){
        switch(tecla){
            case "on":
            pantalla.innerHTML="0"
            signo = ""
            p = ""
            numero = ""
            click = 0
            operando = ""
            operador = ""
            numeros.length = 0
            operadores.length = 0
            temporal = 0
            break;
            default:
            pantalla.innerHTML="0"
            signo = ""
            p = ""
            numero = ""
            click = 0
            operando = ""
            operador = ""
            break;
        }
    },
    sumar: function(a,b){
        resultado = a+b 
    }

}

Calculadora.init();

