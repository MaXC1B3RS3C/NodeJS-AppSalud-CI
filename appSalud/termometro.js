class Termometro {
    //Descomentar console logs para ver resultados
    constructor() {
        this.temperaturas=[];
        this.fechas=[];
        this.celsius_temps=[];
        this.farenheit_temps=[];
        this.contador='';
        this.registrosTermometro=0;    
    }
    anotarTemperatura(temp,fecha){   
        this.temperatura=temp;
        this.fecha=fecha;
        this.registrosTermometro++;
        this.contador=this.registrosTermometro;
        this.temperaturas.push(temp);
        this.fechas.push(fecha);       
        this.celsius_temps.push(temp);
        var celsius_temp = temp;
        this.celsius=temp;
        var farenheit_temp = celsius_temp * 9 / 5 + 32;
        this.farenheit=farenheit_temp;
        this.farenheit_temps.push(this.farenheit);
    }      
    saludar(){
        //console.log("---------------------------------------")

        //console.log("Hola soy el termometro de appSalud.")
        //console.log("--------- NUEVA TEMPERATURA ----------------")
        //console.log(this.temperatura);
        //console.log("Cº.")
        //console.log("---------------------------------------")
        //console.log("Cantidad de temperaturas anotadas:")
        //console.log(this.contador)

    } 
    obtenerNumeroAnotaciones(){
        //console.log("Cantidad de anotaciones:")
        //console.log(this.contador);
        return this.contador;
    }  
    getArrayMax(){
        return Math.max.apply(null, this.arr);
    } 
    getArrayMin(){
        return Math.min.apply(null, this.arr);
    }  
    
    obtenerTemperaturaMax(){    
        //console.log("Temperatura MÁXIMA>");
        //console.log("El contador és: ", this.contador);    
        this.arr=[];
        this.arr=this.temperaturas;
        let max=termometroActual.getArrayMax(this.arr); //11         
        //console.log("La temperatura máxima és:  ",max);              
        return (max);
    }    
    obtenerTemperaturaMin(){
        //console.log("Temperatura MÍNIMA>");
        //console.log("El contador és: ", this.contador);    
        this.arr=[];
        this.arr=this.temperaturas;
        let min=termometroActual.getArrayMin(this.arr); //11         
        //console.log("La temperatura mínima és:  ",min);      
        return (min);
    }
    obtenerTemperaturaMedia(){
        //console.log("Temperatura MEDIA>");
        var arr=[]
        arr=this.temperaturas;
        var avg = arr.reduce(function(p,c,i,a){return p + (c/a.length)},0);
        //console.log("El contador és: ", this.contador);    
        //console.log("La temperatura media és:  ",avg);   
        return (avg);   
    }
   
    convertirCelsiusAFarenheit(celsius){
        var celsius_temp = this.temperatura;
        var farenheit_temp = celsius_temp * 9 / 5 + 32;
        this.farenheit=farenheit_temp;
        return this.farenheit      
    }
    static convertirCelsiusAFarenheit(celsius){
        return this.farenheit      
    }
    convertirFarenheitACelsius(){
        var farenheit_temp = this.farenheit;
        var celsius_temp = (farenheit_temp - 32) * 5 / 9;
        this.celsius_temp=celsius_temp;
        return this.celsius_temp
    }
    static convertirFarenheitACelsius(){
        return this.celsius_temp
    }
    modificarTermometro(){
        this.registrosTermometro = this.contador;
    }
    obtenerTermometro(){
        //console.log("termometroActual>")
        //console.log(termometroActual);
        return termometroActual;
    }
    obtenerTablaTemperaturasHTML() {
        let arr=[];
        let table=[];
        arr = this.temperaturas;
        var arrayLength = arr.length;
        var html;
        html='<!Doctype><html><html lang="es"><head><meta charset="utf-8"/>';
        for (var i = 0; i < arrayLength; i++) {
            table+=html+"<table border=1><tr><td>Temperatura: "+(i+1)+":"+arr[i]+"<tr></td></table";
        }
        return table
    }
    obtenerServidorTemperaturasHTML(){        
        // Cargar el modulo HTTP
        const http = require('http');

        const host = '127.0.0.1';
        const port = 3000;

        //const requestListener = function (request, response) {
       //     response.setHeader(200, {"Content-Type": "text/html"});
       //     response.end(`{"message": "This is a test JSON response"}`);
        //};
        const server = http.createServer(onRequest);
        // Configurar una respuesta HTTP para todas las peticiones
        function onRequest(request, response) {
            //console.log("Peticion Recibida.");
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write("Temperaturas:");
            var res;
            res=termometroActual.obtenerTablaTemperaturasHTML();
            response.write(res);
            response.end();
        }
    }

}

function runner_termometro_actual(){
    termometroActual.anotarTemperatura(36.5,'20/12/2021');
   // termometroActual.saludar();
   termometroActual.anotarTemperatura(37,'5/12/2021');
   // termometroActual.saludar();
   termometroActual.anotarTemperatura(36.3,'7/12/2021');
   // termometroActual.saludar();
   termometroActual.anotarTemperatura(37,'10/12/2021');
   // termometroActual.saludar();
   termometroActual.obtenerTemperaturaMax();
   termometroActual.obtenerTemperaturaMin();
   termometroActual.obtenerTemperaturaMedia();
   termometroActual.obtenerNumeroAnotaciones();

   //Para obtener la tabla en pesos en HTML  descomentaría esta línea
   termometroActual.obtenerTablaTemperaturasHTML();
    //Para poner en produccion un servidor http se descomentaría esta línea
    //termometroActual.obtenerTablaTemperaturasHTML();
   termometroActual.obtenerTermometro();
   termometroActual.modificarTermometro();

}
exports.Termometro = Termometro

//Creare el objeto termometroActual que servirá para realizar pruebas

termometroActual = new Termometro;

//Creare la funcion runner_termometro_actual();   
//que sera para probar la clase Termometro, llamando a la funcion
runner_termometro_actual();   
