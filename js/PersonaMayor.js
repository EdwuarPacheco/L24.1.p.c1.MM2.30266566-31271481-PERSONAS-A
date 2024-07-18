export default class Cl_PersonaMayor{
    constructor(){
        this.contPersona = 0;
        this.contPersonaMujeres= 0;
        this.contPersonasHombre = 0;
        this.auxNombre = "";
    }
    procesarPersona(pe){
        //contamos las personas
        this.contPersona++;
        //contamos cada sexo 
        if(pe.sexo == "F"){
            this.contPersonaMujeres++;
        }
        else if(pe.sexo == "M"){
            this.contPersonasHombre++;
    }
        //vemos quien es mayor
        if(this.contPersonaMujeres<this.contPersonasHombre){
            this.auxNombre = "Hay más hombres";
        }
        else{
            this.auxNombre = "Hay más mujeres";
        }
    }
    PorceMujeres(){
        return this.contPersonaMujeres*100/this.contPersona;
    }
    devolverAuxNombre(){
        return this.auxNombre;
    }
}