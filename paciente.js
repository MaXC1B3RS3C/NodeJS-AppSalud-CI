class Paciente{
    constructor(){
        this.nombres=[]
        this.apellidos=[]
        this.fechaNacimiento=[]
        this.registroBascula= []
    }    
    saludar(){
        console.log("Hi"+this.nombre+this.apellidos+"Welcome to the App")
    }
    obtenerNombre(){
        return this.nombre        
    }
    obtenerApellidos(){
        return this.apellidos
    }
    modificarNombre(nombre){
        this.nombre = nombre;
    }
    obtenerApellidos(){
        return this.apellidos[this.registroBascula]
    }
    modificarApellidos(){
        this.apellidos = apellidos;
    }
    obtenerFechaNacimiento(){
        return this.fechaNacimiento[this.registroBascula]
    }
    modificarFechaNacimiento(fecha){
        this.fechaNacimiento = fechaNacimiento;
    }
    obtentenerEdad(){
        hoy = new Date();
        cumpleanos = new Date(fecha);
        edad = hoy.getFullYear() - cumpleanos.getFullYear();
        m = hoy.getMonth() - cumpleanos.getMonth();    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }    
        return edad;        
    }

    modificarBascula(){
        this.registroBascula = registroBascula;

    }
    obtenerBascula(){
        return console.log(basculaActual)
    }
    calcularIMC(){
        imc= peso/(altura*altura);
    }
}
