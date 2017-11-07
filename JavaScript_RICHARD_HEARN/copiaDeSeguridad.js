var pantalla = document.getElementById("display")
var click = 0
var numero, operador, operando
var signo = ""
var seguir = true
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
            click++
            numero = "1"
            self.escribir(numero)
        })
        dos.addEventListener("click",function(){
            click++
            numero = "2"
            self.escribir(numero)
        })
        tres.addEventListener("click",function(){
            click++
            numero = "3"
            self.escribir(numero)
        })
        cuatro.addEventListener("click",function(){
            click++
            numero = "4"
            self.escribir(numero)
        })
        cinco.addEventListener("click",function(){
            click++
            numero = "5"
            self.escribir(numero)
        })
        seis.addEventListener("click",function(){
            click++
            numero = "6"
            self.escribir(numero)
        })
        siete.addEventListener("click",function(){
            click++
            numero = "7"
            self.escribir(numero)
        })
        ocho.addEventListener("click",function(){
            click++
            numero = "8"
            self.escribir(numero)
        })
        nueve.addEventListener("click",function(){
            click++
            numero = "9"
            self.escribir(numero)
        })
        sign.addEventListener("click",function(){ //funcion para poner signo negativo
            if (pantalla.innerHTML == "0"){
                alert("Ingrese un numero primero")
            } else {
                self.validarSigno()
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
            case 'punto':

            break;
        }   
    },
    validarEscribir: function(tecla){//validamos si solo esta el 0 para reemplazarlo por el primer numero
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

}

Calculadora.init();

