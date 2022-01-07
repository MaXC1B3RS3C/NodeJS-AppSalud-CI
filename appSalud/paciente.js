class Paciente{
    //Descomentar console logs para ver resultados
    constructor(){
        this.nombres_pacientes=[]
        this.apellidos_pacientes=[]
        this.fechasNacimiento=[]
        this.pesos=[]
        this.alturas=[]
        this.edades=[]
        this.contador='';
        this.registroPaciente=0;        
    }      
    
    anotarPaciente(nombre,apellido,fecha,peso,altura){   
        this.nombre=nombre;
        this.apellido=apellido;
        this.fecha=fecha;
        this.peso=peso;
        this.altura=altura;
        this.registroPaciente++;
        this.contador=this.registroPaciente;
        this.alturas.push(altura);
        this.nombres_pacientes.push(nombre);
        this.apellidos_pacientes.push(apellido);
        this.fechasNacimiento.push(fecha);        
        this.pesos.push(peso);    
        let hoy = new Date()
        let fechaNacimiento = new Date(fecha)
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
        if (
          diferenciaMeses < 0 ||
          (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
          edad--
        }
        this.edad=edad;
        this.edades.push(edad);
    }   
    obtentenerEdad() {
        let hoy = new Date()
        let fechaNacimiento = new Date(this.fechaNacimiento)
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
        if (
          diferenciaMeses < 0 ||
          (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
          edad--
        }
        return edad
    } 

    saludar(){
        //console.log("---------------------------------------")
        //console.log("--------- NUEVA PESADA ----------------")
        //console.log(this.peso);
        //console.log("KG.")
        //console.log("---------------------------------------")
        //console.log("Cantidad de pesadas anotadas:")
        //console.log(this.contador)

    }   
    saludar(){
        //console.log("---------------------------------------")
        //console.log("Hi patient, "+this.nombre+this.apellido+" Welcome to the appSalud");

    }
    obtenerNombre(){
        return this.nombre       
    }
    obtenerNombres(){
        return this.nombres       
    }
    obtenerApellido(){
        return this.nombre       
    }

    obtenerApellidos(){
        return this.apellidos
    }
    modificarNombre(nombre){
        this.nombres_pacientes.push(nombre);
    }
    obtenerPesos(){
        return this.pesos       
    }

    modificarApellido(apellido){
        this.apellido=apellido;
    }

    modificarApellidos(apellido){
        this.apellidos_pacientes.push(apellido);
    }

    obtenerFechaNacimiento(){
        return this.fechaNacimiento;
    }
    modificarFechaNacimiento(){
        this.fechasNacimiento.push(this.fechaNacimiento);
    }
    

    obtentenerEdades(){
        return this.edades
    }

    modificarPaciente(){
        this.registroPaciente = this.registroPaciente;
    }
    obtenerPaciente(){
        return //console.log(pacienteActual)
    }
    calcularIMC(){
        this.imc=this.peso/(this.altura*this.altura);
        return (this.imc)
    }
   
}
function runner_paciente_actual(){
    edad_paciente_actual=pacienteActual.obtentenerEdad()
    pacienteActual.anotarPaciente("Juan Perico ","Delos Palotes",'05/12/1990',"80","1.89");
    //pacienteActual.saludar();
    pacienteActual.anotarPaciente("Bartolo ","Escobar Altur",'10/12/1992',"78","1.86");
    //pacienteActual.saludar();
    pacienteActual.anotarPaciente("Luis ","Martinez Soria",'12/12/1994',"75","1.80");
    //pacienteActual.saludar();
    pacienteActual.anotarPaciente("Carlos ","Hernandez Garcia",'11/12/1985',"73","1.85");
    //pacienteActual.saludar();
    pacienteActual.obtenerNombre();
    pacienteActual.obtenerApellido();
    pacienteActual.obtenerNombres();
    pacienteActual.obtenerApellidos();
    pacienteActual.obtenerPesos();
    pacienteActual.modificarNombre();
    pacienteActual.modificarApellidos();
    pacienteActual.obtenerFechaNacimiento();
    pacienteActual.modificarPaciente();
    pacienteActual.obtenerPaciente();
    pacienteActual.calcularIMC();

};   
exports.Paciente = Paciente

//Creare el objeto pacienteActual que servirá para realizar pruebas
pacienteActual = new Paciente;

//Creare la funcion runner_paciente_actual();   
//que sera para probar la clase Paciente, llamando a la funcion
runner_paciente_actual();   
