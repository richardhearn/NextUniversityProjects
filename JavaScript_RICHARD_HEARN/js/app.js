var pantalla = document.getElementById("display")
var click = 0
var validar = 0
var clickSigno = 0
var clickIgual = 0
var resultado = 0
var numAnt = 0
var numero, operador, operando, temporal, operacion
var i = 0
var j = 0
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
                self.validarEscribir(numero)
            }
        })
        cero.addEventListener("mousedown", function(){
            cero.setAttribute("style", "transform:scale(0.95,0.95)") //funcion al hacer click
        })
        cero.addEventListener("mouseout", function(){
            cero.setAttribute("style", "transform:scale(1,1)")  // funcion al soltar el click 
        })
        uno.addEventListener("click",function(){ // al hacer click sobre un numero, llamamos a la funcion validarLongitud()
            numero = "1"
            self.validarLongitud(numero)
        })
        uno.addEventListener("mousedown", function(){
            uno.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        uno.addEventListener("mouseout", function(){
            uno.setAttribute("style", "transform:scale(1,1)")
        })
        dos.addEventListener("click",function(){
            numero = "2"
            self.validarLongitud(numero)
        })
        dos.addEventListener("mousedown", function(){
            dos.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        dos.addEventListener("mouseout", function(){
            dos.setAttribute("style", "transform:scale(1,1)")
        })
        tres.addEventListener("click",function(){
            numero = "3"
            self.validarLongitud(numero)
        })
        tres.addEventListener("mousedown", function(){
            tres.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        tres.addEventListener("mouseout", function(){
            tres.setAttribute("style", "transform:scale(1,1)")
        })
        cuatro.addEventListener("click",function(){
            numero = "4"
            self.validarLongitud(numero)
        })
        cuatro.addEventListener("mousedown", function(){
            cuatro.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        cuatro.addEventListener("mouseout", function(){
            cuatro.setAttribute("style", "transform:scale(1,1)")
        })
        cinco.addEventListener("click",function(){
            numero = "5"
            self.validarLongitud(numero)
        })
        cinco.addEventListener("mousedown", function(){
            cinco.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        cinco.addEventListener("mouseout", function(){
            cinco.setAttribute("style", "transform:scale(1,1)")
        })
        seis.addEventListener("click",function(){
            numero = "6"
            self.validarLongitud(numero)
        })
        seis.addEventListener("mousedown", function(){
            seis.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        seis.addEventListener("mouseout", function(){
            seis.setAttribute("style", "transform:scale(1,1)")
        })
        siete.addEventListener("click",function(){
            numero = "7"
            self.validarLongitud(numero)
        })
        siete.addEventListener("mousedown", function(){
            siete.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        siete.addEventListener("mouseout", function(){
            siete.setAttribute("style", "transform:scale(1,1)")
        })
        ocho.addEventListener("click",function(){
            numero = "8"
            self.validarLongitud(numero) 
        })
        ocho.addEventListener("mousedown", function(){
            ocho.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        ocho.addEventListener("mouseout", function(){
            ocho.setAttribute("style", "transform:scale(1,1)")
        })
        nueve.addEventListener("click",function(){
            numero = "9"
            self.validarLongitud(numero)
        })
        nueve.addEventListener("mousedown", function(){
            nueve.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        nueve.addEventListener("mouseout", function(){
            nueve.setAttribute("style", "transform:scale(1,1)")
        })
        sign.addEventListener("click",function(){ //funcion para poner signo negativo
            if (pantalla.innerHTML == "0"){ //si la pantalla esta en 0, no se pone signo negativo
                alert("Ingrese un numero primero")
            } else {
                self.validarSigno() //se llama a la funcion para poner signo negativo o quitarlo
            }
        })
        sign.addEventListener("mousedown", function(){
            sign.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        sign.addEventListener("mouseout", function(){
            sign.setAttribute("style", "transform:scale(1,1)")
        })
        on.addEventListener("click",function(){
            boton = "on"
            self.limpiarPantalla(boton) //Se llama a la funcion para limpiar la pantalla
        })
        on.addEventListener("mousedown", function(){
            on.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        on.addEventListener("mouseout", function(){
            on.setAttribute("style", "transform:scale(1,1)")
        })
        punto.addEventListener("click",function(){  // se llama a la funcion para poner el punto
            if (p == "."){ //se valida si ya hay un punto
                alert("Ya existe un punto")
            }else{
                self.validarPunto() //de lo contrario se llama a la funcion que pone el punto
            }
        })
        punto.addEventListener("mousedown", function(){
            punto.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        punto.addEventListener("mouseout", function(){
            punto.setAttribute("style", "transform:scale(1,1)")
        })
        mas.addEventListener("click",function(){  // estas son las funciones para realizar las operaciones
            operador = "+"
            self.registrarOperacion(operador)
        })
        mas.addEventListener("mousedown", function(){
            mas.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        mas.addEventListener("mouseout", function(){
            mas.setAttribute("style", "transform:scale(1,1)")
        })
        menos.addEventListener("click",function(){ // estas son las funciones para realizar las operaciones
            operador = "-"
            self.registrarOperacion(operador)
        })
        menos.addEventListener("mousedown", function(){
            menos.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        menos.addEventListener("mouseout", function(){
            menos.setAttribute("style", "transform:scale(1,1)")
        })
        por.addEventListener("click",function(){ // estas son las funciones para realizar las operaciones
            operador = "*"
            self.registrarOperacion(operador)
        })
        por.addEventListener("mousedown", function(){
            por.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        por.addEventListener("mouseout", function(){
            por.setAttribute("style", "transform:scale(1,1)")
        })
        dividido.addEventListener("click",function(){ // estas son las funciones para realizar las operaciones
            operador = "/"
            self.registrarOperacion(operador)
        })
        dividido.addEventListener("mousedown", function(){
            dividido.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        dividido.addEventListener("mouseout", function(){
            dividido.setAttribute("style", "transform:scale(1,1)")
        })
        igual.addEventListener("click",function(){ // al hacer click en = se lleva a cabo la operacion
            self.realizarOperacion()
        })
        igual.addEventListener("mousedown", function(){
            igual.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        igual.addEventListener("mouseout", function(){
            igual.setAttribute("style", "transform:scale(1,1)")
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
                validar++
                self.validarEscribir(n) //si no alcanzo el limite de digitos, se ingresa el nuevo numero
            }
           }else{
            if (operando.length >= 9){ //en caso de tener punto se hace la validacion hasta 9 caracteres
                alert("Numero maximo de digitos alcanzado")
            } else{
                validar++
                click++
                self.validarEscribir(n) //si no alcanzó el limite de digitos, se ingresa el nuevo numero
            }  
           }
        }else{
            click++
            validar++
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
        if (validar==0){
            alert("Ingrese un numero primero")
        }else {
            clickIgual = 0
            if (clickSigno==0){
                numero1 = Number(pantalla.innerHTML)
                self.limpiarPantalla(tipoOper)
                operacion = tipoOper
                clickSigno++
            }else {
                operacion = tipoOper
            }
        }
    },
    realizarOperacion: function(){ // esta es la funcion que lleva a cabo las operaciones, dependiendo del tipo de operador
        clickSigno = 0
        if (clickIgual == 0){ //gracias a esta variable podemos llevar a cabo la secuencia de operaciones, 
            clickIgual++
            numero2 = Number(pantalla.innerHTML)
            switch(operacion){
                case "+":
                    self.sumar(numero1, numero2)
                    break;
                case "-":
                    self.restar(numero1, numero2)
                    break;
                case "/":
                    self.dividir(numero1, numero2)
                    break;
                case "*":
                    self.multiplicar(numero1, numero2)
                    break;
            }
        } else {
            switch(operacion){ //si va mas de 1 click en el boton de igual, se empieza a efectuar secuencialmente la operacion
                case "+":
                    self.sumar(numero1, numero2)
                    break;
                case "-":
                    self.restar(numero1, numero2)
                    break;
                case "/":
                    self.dividir(numero1, numero2)
                    break;
                case "*":
                    self.multiplicar(numero1, numero2)
                    break;
            }
        }

    },
    limpiarPantalla: function(tecla){ // esta es la funcion que limpia la pantalla y reinicia los valores de las variables
        switch(tecla){
            case "on":
            pantalla.innerHTML="0"
            signo = ""
            p = ""
            numero = ""
            click = 0
            operando = ""
            operador = ""
            numero1 = 0
            numero2 = 0
            temporal = 0
            resultado = 0
            operacion = 0
            clickSigno = 0 
            clickIgual = 0
            validar = 0
            break;
            default:
            pantalla.innerHTML="0" //al hacer click en algun operador, se limpia la pantalla y se reinician algunos valores de variables
            signo = ""
            p = ""
            numero = ""
            click = 0
            operando = ""
            operador = ""
            break;
        }
    },
    sumar: function(a,b){ // funcion para sumar
        resultado = a+b 
        self.limpiarPantalla(operador)
        self.validarLongitudDeResultado(resultado)
        numero1 = Number(pantalla.innerHTML)
        
    },
    restar: function(a,b){  //funcion para restar
        resultado = a-b 
        self.limpiarPantalla(operador)
        self.validarLongitudDeResultado(resultado)
        numero1 = Number(pantalla.innerHTML)

    },
    dividir: function(a,b){ // funcion para dividir
        if (b==0){
            alert("no se puede dividir entre 0")
        } else {
            resultado = a/b 
            self.limpiarPantalla(operador)
            self.validarLongitudDeResultado(resultado)
            numero1 = Number(pantalla.innerHTML)
        }
    },
    multiplicar: function(a,b){ // funcion para multiplicar
        resultado = a*b 
        self.limpiarPantalla(operador)
        self.validarLongitudDeResultado(resultado)
        numero1 = Number(pantalla.innerHTML)
    },
    validarLongitudDeResultado: function(){ // funcion para que el resultado no pase de los 8 digitos
        if (resultado % 1 != 0){ //se valida si el numero es decimal
            if (resultado.toString().length >= 9){
                resultado = resultado.toPrecision(8);
                pantalla.innerHTML = resultado
                }else{
                pantalla.innerHTML = resultado 
                }
            }else{
                if (resultado.toString().length >=8 ){
                    resultado = resultado.toPrecision(8);
                    pantalla.innerHTML = resultado
                }else{
                    pantalla.innerHTML = resultado  
                }
            }
        }
}

Calculadora.init(); 
