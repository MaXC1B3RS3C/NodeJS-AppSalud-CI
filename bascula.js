
class Bascula {
    constructor() {
        this.id_anotacion = [];
        this.pesos=[];
        this.alturas=[];
        this.fechas=[];      
    }
    * [Symbol.iterator]() {
        for (let pos of this.id_anotacion) {
            yield pos;
        }
    }
    * [Symbol.iterator]() {
        for (let pos of this.pesos) {
            yield pos;
        }
    }
    * [Symbol.iterator]() {
        for (let pos of this.alturas) {
            yield pos;
        }
    }
    * [Symbol.iterator]() {
        for (let pos of this.fechas) {
            yield pos;
        }
    }
    anotarPeso(peso, altura, id_anotacion,fecha){
        this.id_anotacion=id_anotacion +1;
        this.peso=peso;
        this.altura=altura;
        this.fecha=fecha;
    }
    obtenerPesoMaximo(){
        return Math.max(pesos)
        //return Math.max(pesos)
    }
    obtenerPesoMinimo(){
        return Math.min(pesos)
    }
    obtenerPesoMedio(){
        return Math.round(pesos)
    }
    obtenerNumeroAnotaciones(id_anotacion){
        return id_anotacion.length
    }
    obtenerTablaPesosHTML(){
        HTML="<!Doctype><html></html><script>"
        for (peso in pesos){
            HTML=HTML+peso+"</script>";
        }
        return HTML
    }
    calcularIMC(){
        imc= peso/(altura*altura);
    }
    describirIMC(){
        console.log(imc)
    }
    static describirIMC(imc){
        return imc
    }

}

 basculaActual= new Bascula('0','88','1.85','20/12/2021');
