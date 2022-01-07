'use strict';

var mocha = require('mocha')
var describe  = mocha.describe
var it = mocha.it
var assert = require('chai').assert
var expect = require('chai').expect;

const Termometro = require('../appSalud/termometro.js').Termometro;

describe('#Iniciando los tests... #Testfile:termometro.spec.js #Ejecutando los test preparados....', function() {
  it('debería devolver -1 cuando inicio sin ningún problema', function() {
    assert.equal([1,2,3].indexOf(4), -1)
    
  })
})

describe('-Generic test Termometro class', function() {
  // variable Termometro does NOT exist in this context.
  describe('-Termometro class constructor', function() {
    //Genero una Termometro llamada TermometroTest
    const termometroTest = new Termometro;
    it('*debería devolver -1 cuando se generó la Termometro', function() {      
    })

    describe('Termometro Runner', function() {
      termometroTest.runner_Termometro_actual;

      it('*debería devolver -1 cuando se ejecutó la funcion runner de Termometro', function() {
            })
    });

    describe('#Termometro funcion obtenerTablaTemperaturasHTML', function() {
      termometroTest.obtenerTablaTemperaturasHTML();

        it('*debería devolver -1 cuando se ejecutó la funcion obtenerTablaTemperaturasHTML() de Termometro', function() {
              })
    });

    describe('#Termometro funcion obtenerServidorTemperaturasHTML', function() {
      //Esto solo sirve para testear si la funcion del metodo web es correcto
      it('*Descomentar o comentar para poner en modo escucha  *Si se ejecuta el servidor HTTP se debería estár ejecutando en http://localhost:3000/ o bien en http://127.0.0.1:3000/,\n         retorna -1 cuando se ejecutó la funcion obtenerServidorTemperaturasHTML() de Termometro \n        >>No se va a ejecutar el servidor HTTP según el fichero #Testfile:Termometro.spec.js.', function() {
        let numTesting;
        if(numTesting==0){
          console.log(">>Se va a ejecutar el servidor HTTP según el fichero #Testfile:Termometro.spec.js.")

          numTesting=termometroTest.obtenerServidorTemperaturasHTML();

        }
        if(numTesting!=-1){
        //Descomentar/comentar si quieres que la funcion se ejecute en el test
       // numTesting=TermometroTest.obtenerServidorTemperaturasHTML();
        }
      });
    describe('#Termometro funcion saludar()', function() {
      termometroTest.saludar();

        it('retorna -1 cuando se ejecutó la funcion saludar() de Termometro', function() {
              //Descomentar/comentar si quieres que la funcion se ejecute en el test
              })
    });
    describe('#Termometro funcion obtenerTemperaturaMaximo()', function() {
      termometroTest.obtenerTemperaturaMax();
      it('retorna -1 cuando se ejecutó la funcion obtenerTemperaturaMaximo() de Termometro', function() {
           //Esto solo sirve para testear si la funcion del metodo web es correcto
      })    
    });   
    describe('#Termometro funcion obtenerTemperaturaMinimo()', function() {
      termometroTest.obtenerTemperaturaMin();
      it('retorna -1 cuando se ejecutó la funcion saludar() de Termometro', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            })
    });
    describe('#Termometro funcion obtenerTemperaturaMedio()', function() {
      termometroTest.obtenerTemperaturaMedia();
      it('retorna -1 cuando se ejecutó la funcion obtenerTemperaturaMedio() de Termometro', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            })
    });

    describe('#Termometro funcion obtenerNumeroAnotaciones()', function() {
      termometroTest.obtenerNumeroAnotaciones();

      it('retorna -1 cuando se ejecutó la funcion obtenerNumeroAnotaciones() de Termometro', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            })
    });
    describe('#Termometro funcion  modificarTermometro()', function() {
      termometroTest.modificarTermometro();

      it('retorna -1 cuando se ejecutó la funcion  modificarTermometro() de Termometro', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            })
    });
    describe('#Termometro funcion  obtenerTermometro()', function() {
      termometroTest.obtenerTermometro();

      it('retorna -1 cuando se ejecutó la funcion  obtenerTermometro() de Termometro', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            })
    });
    describe('#Termometro funcion  convertirCelsiusAFarenheit()', function() {
      termometroTest.convertirCelsiusAFarenheit();

      it('retorna -1 cuando se ejecutó la funcion  convertirCelsiusAFarenheit() de Termometro', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            })
    });
    describe('#Termometro funcion  convertirFarenheitACelsius()', function() {
      termometroTest.convertirFarenheitACelsius();

      it('retorna -1 cuando se ejecutó la funcion  convertirFarenheitACelsius() de Termometro', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            })
    });
    

});
});
});

  
