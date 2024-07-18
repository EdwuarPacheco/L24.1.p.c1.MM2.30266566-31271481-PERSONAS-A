export default class Cl_Persona{
    constructor(s,n){
        this.sexo = s;
        this.nombre = n;
    }
    set sexo(s){
        this._sexo = s;
    }
    get sexo(){
        return this._sexo;
    }
    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }

}