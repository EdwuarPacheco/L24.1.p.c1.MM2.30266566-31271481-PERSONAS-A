/* Sea el nombre y el sexo de varias personas (F-M). 
Se necesita un programa que lea estos datos y 
reporte al final: el porcentaje de mujeres procesadas y 
si hay más hombres, más mujeres o ambos por igual.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, 
Rosa, José, María, Luz, Rafael, Liz, Marcos y Leo. */

import Cl_Persona from "./Persona.js";
import Cl_PersonaMayor from "./PersonaMayor.js";

let persona1= new Cl_Persona("F", "Luisa");
let persona2= new Cl_Persona("F", "Ana");
let persona3= new Cl_Persona("M", "José");
let persona4= new Cl_Persona("F", "Carmen");
let persona5= new Cl_Persona("F", "Rosa");
let persona6= new Cl_Persona("M", "José");
let persona7= new Cl_Persona("F", "Maria");
let persona8= new Cl_Persona("F", "Luz");
let persona9= new Cl_Persona("M", "Rafaez");
let persona10= new Cl_Persona("F", "Liz");
let persona11= new Cl_Persona("M", "Marcos");
let persona12= new Cl_Persona("M", "Leo");

let personaMayor= new Cl_PersonaMayor()
personaMayor.procesarPersona(persona1);
personaMayor.procesarPersona(persona2);
personaMayor.procesarPersona(persona3);
personaMayor.procesarPersona(persona4);
personaMayor.procesarPersona(persona5);
personaMayor.procesarPersona(persona6);
personaMayor.procesarPersona(persona7);
personaMayor.procesarPersona(persona8);
personaMayor.procesarPersona(persona9);
personaMayor.procesarPersona(persona10);
personaMayor.procesarPersona(persona11);
personaMayor.procesarPersona(persona12);

let salida = document.getElementById("salida")
salida.innerHTML+= "Porcentaje de mujeres procesadas: " +personaMayor.PorceMujeres().toFixed(2) +"%";
salida.innerHTML+= "<br> " +personaMayor.devolverAuxNombre();