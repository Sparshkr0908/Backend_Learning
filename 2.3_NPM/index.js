//this is for common js
//var generateName = require("sillyname");
//const sillyname = generateName();

//this is for ecmascript
import generateName from "sillyname";
var sillyname = generateName();
console.log(`my name is ${sillyname}.`);

import { randomSuperhero } from "superheroes";
var name = randomSuperhero();
console.log(`I am ${name}.`);
