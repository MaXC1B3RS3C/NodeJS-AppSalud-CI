var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('chai').assert
const Paciente = require('../appSalud/paciente.js').Paciente;

describe('#Iniciando los tests... #Testfile:paciente.spec.js #Ejecutando los test preparados....', function() {
  it('debería devolver -1 cuando inicio sin ningún problema', function() {
    assert.equal([1,2,3].indexOf(4), -1)
    
  })
})

describe('-Generic test Paciente class', function() {
  // variable Bascula does NOT exist in this context.

  describe('-Paciente class constructor', function() {
    //Genero una bascula llamada basculaTest
    const pacienteTest = new Paciente;
    it('*debería devolver -1 cuando se generó la bascula', function() {      
    })

    describe('Paciente Runner', function() {
      it('*debería devolver -1 cuando se ejecutó la funcion runner de Paciente', function() {
              pacienteTest.runner_bascula_actual;
            })
    });
    describe('#Funcion anotarPaciente()', function() {
      pacienteTest.anotarPaciente();
      it('*debería devolver -1 cuando se ejecutó la funcion anotarPaciente() de Paciente', function() {
      })
    });
    describe('#Funcion obtentenerEdad()', function() {
      pacienteTest.obtentenerEdad();
      it('*debería devolver -1 cuando se ejecutó la funcion obtentenerEdad() de Paciente', function() {
      })
    });



});
});

  
