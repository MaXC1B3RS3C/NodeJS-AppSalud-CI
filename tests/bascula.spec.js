'use strict';

var mocha = require('mocha')
var describe  = mocha.describe
var it = mocha.it
var assert = require('chai').assert
var expect = require('chai').expect;

const Bascula = require('../appSalud/bascula.js').Bascula;

describe('#Iniciando los tests... #Testfile:bascula.spec.js', function() {
  it('debería devolver -1 cuando inicio sin ningún problema', function() {
    assert.equal([1,2,3].indexOf(4), -1)
    
  })
})

describe('-Generic test Bascula class', function() {
  // variable Bascula does NOT exist in this context.
  describe('-Bascula class constructor', function() {
    //Genero una bascula llamada basculaTest
    const basculaTest = new Bascula;
    it('*debería devolver -1 cuando se generó la bascula', function() {      
    })

    describe('Bascula Runner', function() {
      it('*debería devolver -1 cuando se ejecutó la funcion runner de Bascula', function() {
              basculaTest.runner_bascula_actual;
            })
    });

    describe('#Bascula funcion obtenerTablaPesosHTML', function() {
        it('*debería devolver -1 cuando se ejecutó la funcion obtenerTablaPesosHTML() de Bascula', function() {
                basculaTest.obtenerTablaPesosHTML();
              })
    });

    describe('#Bascula funcion obtenerServidorPesosHTML', function() {
      //Esto solo sirve para testear si la funcion del metodo web es correcto
      it('*Si se ejecuta el servidor HTTP se debería estár ejecutando en http://localhost:3000/ o bien en http://127.0.0.1:3000/,\n         retorna -1 cuando se ejecutó la funcion obtenerServidorPesosHTML() de Bascula \n        >>No se va a ejecutar el servidor HTTP según el fichero #Testfile:bascula.spec.js.', function() {
        let numTesting;
        if(numTesting==0){
          console.log(">>Se va a ejecutar el servidor HTTP según el fichero #Testfile:bascula.spec.js.")

          numTesting=basculaTest.obtenerServidorPesosHTML();

        }
        if(numTesting!=-1){
        //Descomentar/comentar si quieres que la funcion se ejecute en el test
       // numTesting=basculaTest.obtenerServidorPesosHTML();
        }
      });
    describe('#Bascula funcion saludar()', function() {
        it('retorna -1 cuando se ejecutó la funcion saludar() de Bascula,\n        No tiene parametros, es una funcion sin argumentos,\n        Descomentar si quieres que la funcion se ejecute en el test', function() {
              //Descomentar/comentar si quieres que la funcion se ejecute en el test
              basculaTest.saludar();
              })
    });
    describe('#Bascula funcion obtenerPesoMaximo()', function() {
      //Esto solo sirve para testear si la funcion del metodo web es correcto
      it('retorna -1 cuando se ejecutó la funcion obtenerPesoMaximo() de Bascula,\n        Descomentar si quieres que la funcion se ejecute en el test,\n         No tiene parametros, es una funcion sin argumentos', function() {
        let numTesting;
        if(numTesting==0){
          numTesting=basculaTest.obtenerPesoMaximo();
        }
        if(numTesting!=-1){        
          //Descomentar/comentar si quieres que la funcion se ejecute en el test
          numTesting=basculaTest.obtenerPesoMaximo();
        }
      })    
    });   
    describe('#Bascula funcion obtenerPesoMinimo()', function() {
      it('retorna -1 cuando se ejecutó la funcion saludar() de Bascula,\n        Descomentar si quieres que la funcion se ejecute en el test,\n        No tiene parametros, es una funcion sin argumentos', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            basculaTest.obtenerPesoMinimo();
            })
    });
    describe('#Bascula funcion obtenerPesoMedio()', function() {
      it('retorna -1 cuando se ejecutó la funcion obtenerPesoMedio() de Bascula,\n        Descomentar si quieres que la funcion se ejecute en el test,\n        No tiene parametros, es una funcion sin argumentos', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            basculaTest.obtenerPesoMinimo();
            })
    });
    describe('#Bascula funcion obtenerPesoMinimo()', function() {
      it('retorna -1 cuando se ejecutó la funcion saludar() de Bascula,\n        Descomentar si quieres que la funcion se ejecute en el test,\n        No tiene parametros, es una funcion sin argumentos', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            basculaTest.obtenerPesoMinimo();
            })
    });
    describe('#Bascula funcion obtenerNumeroAnotaciones()', function() {
      it('retorna -1 cuando se ejecutó la funcion obtenerNumeroAnotaciones() de Bascula,\n        Descomentar si quieres que la funcion se ejecute en el test,\n        No tiene parametros, es una funcion sin argumentos', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            basculaTest.obtenerNumeroAnotaciones();
            })
    });
    describe('#Bascula funcion  modificarBascula()', function() {
      it('retorna -1 cuando se ejecutó la funcion  modificarBascula() de Bascula,\n        Descomentar si quieres que la funcion se ejecute en el test,\n        No tiene parametros, es una funcion sin argumentos', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            basculaTest.modificarBascula();
            })
    });
    describe('#Bascula funcion  obtenerBascula()', function() {
      it('retorna -1 cuando se ejecutó la funcion  modificarBascula() de Bascula,\n        Descomentar si quieres que la funcion se ejecute en el test,\n        No tiene parametros, es una funcion sin argumentos', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            basculaTest.obtenerBascula();
            })
    });
    describe('#Bascula funcion  calcularIMC()', function() {
      it('retorna -1 cuando se ejecutó la funcion  calcularIMC() de Bascula,\n        Descomentar si quieres que la funcion se ejecute en el test,\n        No tiene parametros, es una funcion sin argumentos', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            basculaTest.calcularIMC();
            })
    });
    describe('#Bascula funcion  describirIMC()', function() {
      it('retorna -1 cuando se ejecutó la funcion  describirIMC() de Bascula,\n        Descomentar si quieres que la funcion se ejecute en el test,\n        No tiene parametros, es una funcion sin argumentos', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            basculaTest.describirIMC();
            })
    });
    
});
});
});

  
