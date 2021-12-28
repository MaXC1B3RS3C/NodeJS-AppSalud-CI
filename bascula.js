const { create } = require('domain');

class Bascula {
    constructor() {
        this.pesos=[];
        this.alturas=[];
        this.fechas=[];
        this.contador='';
        this.registrosBascula=0;        
        this.cero=0;        
    }

    anotarPeso(peso,altura,fecha){   
        this.peso=peso;
        this.altura=altura;
        this.registrosBascula++;
        this.contador=this.registrosBascula;
        this.alturas.push(altura);
        this.fechas.push(fecha);        
        this.pesos.push(peso);       
    }     
    saludar(){
        console.log("---------------------------------------")

        console.log("Hola soy la bascula de appSalud.")
        console.log("--------- NUEVA PESADA ----------------")
        console.log(this.peso);
        console.log("KG.")
        console.log("---------------------------------------")
        console.log("Cantidad de pesadas anotadas:")
        console.log(this.contador)

    } 

    getArrayMax(){
        return Math.max.apply(null, this.arr);
    }
    obtenerPesoMaximo(){
    
        console.log("PESO MÁXIMO>");
        console.log("El contador és: ", this.contador);    
        this.arr=[];
        this.arr=this.pesos;
        let max=basculaActual.getArrayMax(this.arr); //11         
        console.log("El peso maximo és:  ",max);      
        //return Math.max(this.pesos);

    }
    getArrayMin(){
        return Math.min.apply(null, this.arr);
    }
    obtenerPesoMinimo(){
        console.log("PESO MÍNIMO>");
        console.log("El contador és: ", this.contador);    
        this.arr=[];
        this.arr=this.pesos;
        let min=basculaActual.getArrayMin(this.arr); //11         
        console.log("El peso mínimo és:  ",min);      
        //return Math.max(this.pesoss);
    }
    obtenerPesoMedio(){
        console.log("PESO MEDIO>");
        var arr=[]
        arr=this.pesos;
        var avg = arr.reduce(function(p,c,i,a){return p + (c/a.length)},0);
        console.log("El contador és: ", this.contador);    
        console.log("La media és:  ",avg);      
    }
    obtenerNumeroAnotaciones(){
        console.log("Cantidad de anotaciones:")
        console.log(this.contador);
    }
    obtenerTablaPesosHTML() {
        let arr=[];
        let table=[];
        arr = this.pesos;
        var arrayLength = arr.length;
        var html;
        html='<!Doctype><html><html lang="es"><head><meta charset="utf-8"/>';
        for (var i = 0; i < arrayLength; i++) {
            table+=html+"<table border=1><tr><td>Peso"+(i+1)+":"+arr[i]+"<tr></td></table";
        }
        return table
    }
     
    obtenerServidorPesosHTML(){
        
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
            console.log("Peticion Recibida.");
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write("PESOS:");
            var res;
            var imc;
            res=basculaActual.obtenerTablaPesosHTML();
            imc=basculaActual.calcularIMC();
            response.write(res);
            response.write("<tr><td>Ultimo IMC:"+imc);
            response.end();
        }

       // Escuchar al puerto 3000 creo otro falla por firewall o puertos por  defecto
       server.listen(port, host, () => {
        console.log(`El servidor HTTP se está ejecutando en http://${host}:${port}`);
        console.log("*El servidor HTTP se debería está ejecutando en http://localhost:3000/");
        console.log("**El servidor HTTP se debería estar ejecutando en http://127.0.0.1:3000/");

        });        // Poner un mensaje en la consola    
    }
    modificarBascula(){
        this.registrosBascula = this.contador;
    }
    obtenerBascula(){
        console.log("BasculaActual>")
        console.log(basculaActual);
    }

    calcularIMC(){
        
        this.imc=this.peso/(this.altura*this.altura);
        return (this.imc)
    }
    describirIMC(){
        
        console.log(this.imc)
    }
    static describirIMC(){     
        console.log(this.imc)
    }
    
    
}

//Testeo el objeto/clase bascula con 2 funciones
function generar_basculaActual(){
    basculaActual=new Object(new Bascula()); 
}
function runner_bascula_actual(){
    basculaActual.anotarPeso(88,1.85,'20/12/2021');
    basculaActual.saludar();
    basculaActual.anotarPeso(86,1.82,'5/12/2021');
    basculaActual.saludar();
    basculaActual.anotarPeso(85,1.83,'7/12/2021');
    basculaActual.saludar();
    basculaActual.anotarPeso(3,1.84,'10/12/2021');
    basculaActual.saludar();
    basculaActual.obtenerPesoMaximo();
    basculaActual.obtenerPesoMinimo();
    basculaActual.obtenerPesoMedio();
    basculaActual.obtenerNumeroAnotaciones();
    basculaActual.calcularIMC();
    basculaActual.describirIMC();    
    //Para obtener la tabla en pesos en HTML
    basculaActual.obtenerTablaPesosHTML();
    //Para poner en produccion un servidor http
    basculaActual.obtenerServidorPesosHTML();
    basculaActual.obtenerBascula();
    basculaActual.modificarBascula();

}

//Creare el objeto basculaActual que sera para probar la clase Bascula, llamando a la funcion
generar_basculaActual();   
//Ejecuto funcion runner_bascula_actual(); que sera para probar la clase Bascula, llamando a la funcion
runner_bascula_actual();