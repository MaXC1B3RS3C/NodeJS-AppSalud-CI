'use strict';

var mocha = require('mocha')
var describe  = mocha.describe
var it = mocha.it
var assert = require('chai').assert
var expect = require('chai').expect;

const Bascula = require('../appSalud/bascula.js').Bascula;
describe('#Iniciando conjunto de tests.  # All mocha testfiles in tests/ directory:bascula.spec.js, paciente.spec.js, termometro.spec.js #Ejecutando los test preparados....', function() {
  it('debería devolver -1 cuando inicio sin ningún problema', function() {
    assert.equal([1,2,3].indexOf(4), -1)
    
  })
})
describe('#Iniciando los tests... #Testfile:bascula.spec.js #Ejecutando los test preparados....', function() {
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
      basculaTest.runner_bascula_actual;

      it('*debería devolver -1 cuando se ejecutó la funcion runner de Bascula', function() {
            })
    });

    describe('#Bascula funcion obtenerTablaPesosHTML', function() {
      basculaTest.obtenerTablaPesosHTML();

        it('*debería devolver -1 cuando se ejecutó la funcion obtenerTablaPesosHTML() de Bascula', function() {
              })
    });

    describe('#Bascula funcion obtenerServidorPesosHTML', function() {
      //Esto solo sirve para testear si la funcion del metodo web es correcto
      it('*Descomentar o comentar para poner en modo escucha *Si se ejecuta el servidor HTTP se debería estár ejecutando en http://localhost:3000/ o bien en http://127.0.0.1:3000/,\n         retorna -1 cuando se ejecutó la funcion obtenerServidorPesosHTML() de Bascula \n        >>No se va a ejecutar el servidor HTTP según el fichero #Testfile:bascula.spec.js.', function() {
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
      basculaTest.saludar();

        it('retorna -1 cuando se ejecutó la funcion saludar() de Bascula', function() {
              //Descomentar/comentar si quieres que la funcion se ejecute en el test
              })
    });
    describe('#Bascula funcion obtenerPesoMaximo()', function() {
      basculaTest.obtenerPesoMaximo();
      it('retorna -1 cuando se ejecutó la funcion obtenerPesoMaximo() de Bascula', function() {
           //Esto solo sirve para testear si la funcion del metodo web es correcto
      })    
    });   
    describe('#Bascula funcion obtenerPesoMinimo()', function() {
      basculaTest.obtenerPesoMinimo();
      it('retorna -1 cuando se ejecutó la funcion saludar() de Bascula', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            })
    });
    describe('#Bascula funcion obtenerPesoMedio()', function() {
      basculaTest.obtenerPesoMedio();
      it('retorna -1 cuando se ejecutó la funcion obtenerPesoMedio() de Bascula', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            })
    });
 
    describe('#Bascula funcion obtenerNumeroAnotaciones()', function() {
      basculaTest.obtenerNumeroAnotaciones();

      it('retorna -1 cuando se ejecutó la funcion obtenerNumeroAnotaciones() de Bascula', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            })
    });
    describe('#Bascula funcion  modificarBascula()', function() {
      basculaTest.modificarBascula();

      it('retorna -1 cuando se ejecutó la funcion  modificarBascula() de Bascula', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            })
    });
    describe('#Bascula funcion  obtenerBascula()', function() {
      basculaTest.obtenerBascula();

      it('retorna -1 cuando se ejecutó la funcion  obtenerBascula() de Bascula', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            })
    });
    describe('#Bascula funcion  calcularIMC()', function() {
      basculaTest.calcularIMC();
      it('retorna -1 cuando se ejecutó la funcion  calcularIMC() de Bascula', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            })
    });
    describe('#Bascula funcion  describirIMC()', function() {
      basculaTest.describirIMC();
      it('retorna -1 cuando se ejecutó la funcion  describirIMC() de Bascula', function() {
            //Descomentar/comentar si quieres que la funcion se ejecute en el test
            })
    });
    

});
});
});

  
