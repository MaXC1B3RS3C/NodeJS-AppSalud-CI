'use strict';

var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('chai').assert
var expect = require('chai').expect;

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
              //pacienteTest.runner_bascula_actual;
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
    describe('#Funcion obtentenerEdad()', function() {
      pacienteTest.obtentenerEdad();
      it('*debería devolver -1 cuando se ejecutó la funcion obtentenerEdad() de Paciente', function() {
      })
    });
    describe('#Funcion saludar()', function() {
      pacienteTest.saludar();
      it('*debería devolver -1 cuando se ejecutó la funcion saludar() de Paciente', function() {
      })
    });
    describe('#Funcion obtenerNombre()', function() {
      pacienteTest.obtenerNombre();
      it('*debería devolver -1 cuando se ejecutó la funcion obtenerNombre() de Paciente', function() {
      })
    });
    describe('#Funcion obtenerNombres()', function() {
      pacienteTest.obtenerNombres();
      it('*debería devolver -1 cuando se ejecutó la funcion obtenerNombres() de Paciente', function() {
      })
    });
    describe('#Funcion obtenerApellido()', function() {
      pacienteTest.obtenerApellido();
      it('*debería devolver -1 cuando se ejecutó la funcion obtenerApellido() de Paciente', function() {
      })
    });
    describe('#Funcion obtenerApellidos()', function() {
      pacienteTest.obtenerApellidos();
      it('*debería devolver -1 cuando se ejecutó la funcion obtenerApellidos() de Paciente', function() {
      })
    });
    describe('#Funcion modificarNombre()', function() {
      pacienteTest.modificarNombre();
      it('*debería devolver -1 cuando se ejecutó la funcion modificarNombre() de Paciente', function() {
      })
    });
    describe('#Funcion obtenerPesos()', function() {
      pacienteTest.obtenerPesos();
      it('*debería devolver -1 cuando se ejecutó la funcion obtenerPesos() de Paciente', function() {
      })
    });
    describe('#Funcion modificarApellido()', function() {
      pacienteTest.modificarApellido();
      it('*debería devolver -1 cuando se ejecutó la funcion modificarApellido() de Paciente', function() {
      })
    });
    describe('#Funcion modificarApellidos()', function() {
      pacienteTest.modificarApellidos();
      it('*debería devolver -1 cuando se ejecutó la funcion modificarApellidos() de Paciente', function() {
      })
    });
    describe('#Funcion obtenerFechaNacimiento()', function() {
      pacienteTest.obtenerFechaNacimiento();
      it('*debería devolver -1 cuando se ejecutó la funcion obtenerFechaNacimiento() de Paciente', function() {
      })
    });
    describe('#Funcion modificarFechaNacimiento()', function() {
      pacienteTest.modificarFechaNacimiento();
      it('*debería devolver -1 cuando se ejecutó la funcion modificarFechaNacimiento() de Paciente', function() {
      })
    });

    describe('#Funcion obtentenerEdades()', function() {
      pacienteTest.obtentenerEdades();
      it('*debería devolver -1 cuando se ejecutó la funcion obtentenerEdades() de Paciente', function() {
      })
    });
    describe('#Funcion modificarPaciente()', function() {
      pacienteTest.modificarPaciente();
      it('*debería devolver -1 cuando se ejecutó la funcion modificarPaciente() de Paciente', function() {
      })
    });
    describe('#Funcion obtenerPaciente()', function() {
      pacienteTest.obtenerPaciente();
      it('*debería devolver -1 cuando se ejecutó la funcion modificarPaciente() de Paciente', function() {
      })
    });
    describe('#Funcion calcularIMC()', function() {
      pacienteTest.calcularIMC();
      it('*debería devolver -1 cuando se ejecutó la funcion calcularIMC() de Paciente', function() {
      })
    });
    
});
});

  
