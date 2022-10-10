import { Mamiferos } from "./Mamiferos";
import { Herviboros } from "./Herviboros";
import { Carnivoros} from "./Carnivoros";
import { Omnivoros } from "./Omnivoros";

let Mamifero1: Mamiferos = new Mamiferos('Ballena','Cetaceo','Peces');
let Carnivoro1: Carnivoros = new Carnivoros('Leon','Felinos','Animales');
let Carnivoro2: Carnivoros = new Carnivoros('Oso polar','Osos','Focas');
let Herviboro1: Herviboros = new Herviboros('Elefante','Proboscidea','Plantas');
let Herviboro2: Herviboros = new Herviboros('Koala','Marsupial','Hojas');
let Omnivoro1: Omnivoros = new Omnivoros('Avestruz','Rhea','Plantas y pequeños animales');
let Omnivoro2: Omnivoros = new Omnivoros('Ser humano','Humano','Vegetales y carne animal');

Mamifero1.setAlimentacion('Personas');
console.log(Mamifero1);
Mamifero1.setAlimentacion('Peces');
Carnivoro1.setAlimentacion('Cebras');
console.log(Carnivoro1);
console.log(Carnivoro2);
console.log(Herviboro1);
Herviboro2.setAlimentacion('Eucalipto');
console.log(Herviboro2);
console.log(Omnivoro1);
Omnivoro2.setAlimentacion('Carroña y plantas');
console.log(Omnivoro2);