console.log("COMPITO RIGA 219"); // COMPITO RIGA 219

// let myVar = "Fabio";
// myVar = 40;
// let myVar;
let myVar: number; //possiamo assegnare noi il tipo
let myVar2: string = "Fabio"; //questa cosa non ha molto senso perchè la riconosce da solo
// myVar = "Fabio";
myVar = 40;

//tipi primitivi: string, number, boolean, null, undefined, any(da usare con cautela)
//tipi strutturali: array, object, function
let myVar3: any; //avrà any come tipo quindi non possiamo controllare il tipo
//se noi scriviamo myVar2. ci da tutti i metodi delle stringhe in questo caso

const sum = (num1, num2) => {
  const n1 = parseInt(num1);
  const n2 = parseInt(num2);

  if (!isNaN(n1) && !isNaN(n2)) {
    return n1 + n2;
  } else {
    return "inserisci due numeri";
  }
};
console.log(sum("3", "5"));

const sumWithTS = function (num1: number, num2?) {
  return num1 + num2;
};
sumWithTS(5, 10);

const mixed = (par1: number | string, par2: number | string) => {
  if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)) return par1 + par2;
  else {
    return "NOPE";
  }
};
console.log(mixed("ciao", 8));
console.log(mixed(8, 8));
// console.log(mixed(true, 8)); da proprio errore perchè accetta number o string

type StringOrNumber = string | number;
const mixed2 = (par1: StringOrNumber, par2: StringOrNumber) => {};

let maybe: unknown;

if (maybe === true) {
  const myBoolean: boolean = maybe;
  //   const myBoolean2:string = maybe; questo non lo accetta
}

//array
const myArray = [1, 4];
myArray.push(3);
console.log(myArray);

// const myArray2: string | number = [1, 4];
// myArray2.push("ciao");
// console.log(myArray2);

const myArray3: Array<string | number> = [];
myArray3.push("ciao");
myArray3.push("Fabio");
myArray3.push(3);
console.log(myArray3);

// const myArray4: string[] = []; //qui puoi pushare solo stringhe
const myArray4: (string | undefined)[] = []; //qui puoi pushare solo stringhe
myArray4.push("uno");
myArray4.push("due");
myArray4.push("tre");
myArray4.forEach((s) => s?.length); //s potrebbe non essere ancora arrivato e quindi essere undefined

//TUPLE
const myTuple = ["", 0];
const myTuple2: [string, number, boolean] = ["", 0, true]; //sono scritti in ordine, se manca qualcosa si lamenta
const myTuple3 = ["", 0, true]; //lo capisce anche da solo

const NOTTuple4: (string | number | boolean)[] = [0, "", true]; //cosi puoi anche scrivere senza ordine preciso
// myTuple2[0]. con questo punto riconosce il tipo e il punto assoccia i metodi del tipo
//quando riconosce o gli indichiamo un tipo lui assoccia tutti i metodi

const addition = (n1: number, n2: number) => {
  return n1 + n2;
};
const addition2 = (n1: number, n2: number) => n1 + n2; //torna un numero se specificato e non void

const empty = () => {};

let newFunc: Function = addition;
newFunc = empty;

//OGGETTI

const obj = {
  name: "Fabio",
  surname: "Marras",
  age: 26,
  gender: "male",
};

console.log(obj.name.length);

const obj2 = {
  firstName: "Mario",
  lastName: "Rossi",
};

type EpicodeTeacher = {
  name: string;
  surname: string;
  age: number;
  gender: string;
};

type RemoteTEacher = {
  isRemote: boolean;
  country?: string; // con il ? non sappiamo se ci sarà questo dato
};

const obj3: EpicodeTeacher = {
  name: "Riccardo",
  surname: "alpha",
  age: 30,
  gender: "male",
  //   country: "italy" questo da errore perchè non è assegnato come proprietà, seguente
};

const obj4: EpicodeTeacher & RemoteTEacher = {
  name: "Riccardo",
  surname: "alpha",
  age: 30,
  gender: "male",
  isRemote: true,
  country: "italy",
};

const obj5: EpicodeTeacher & RemoteTEacher = {
  name: "Franco",
  surname: "Beta",
  age: 35,
  gender: "male",
  isRemote: true,
  //ora country non è obbligatorio per via del ? su RemoteTeacher
};

//INTERFACCIE

interface HumanBeing {
  name: string;
  eyes: boolean;
  height: number;
  numOfLimbs?: number;
}

interface EpicodeStudent extends HumanBeing {
  hasWebcam: boolean;
  batch: string;
}

const Student1: EpicodeStudent = {
  name: "Fabio",
  eyes: true,
  height: 176,
  hasWebcam: true,
  batch: "FS0323B",
};
const Student2: EpicodeStudent = {
  name: "Max",
  eyes: true,
  height: 160,
  hasWebcam: true,
  batch: "FS0323B",
};

const arrStudents: EpicodeStudent[] = [];
arrStudents.push(Student1);
arrStudents.push(Student2);
console.log(arrStudents);

arrStudents.forEach((s) => s.hasWebcam);

//GENERICS
//parametro di tipo per un interfaccia

interface EpicodeUnite<T> {
  name: string;
  assignedTeacher: string;
  //   topic: string | String[] | {weeklyTopic: string[]}[];
  topic: T;
}

const U1: EpicodeUnite<string> = {
  name: "Unit1",
  assignedTeacher: "Stefano",
  topic: "HTML, CSS",
};
const U2: EpicodeUnite<string[]> = {
  name: "Unit2",
  assignedTeacher: "Stefano",
  topic: ["JS", "BOOTSTRAP"],
};

interface Topic {
  weeklyTopic: string[];
}

const U3: EpicodeUnite<Topic[]> = {
  name: "Unit3",
  assignedTeacher: "Stefano",
  topic: [
    { weeklyTopic: ["React", "state"] },
    { weeklyTopic: ["Redux", "Router"] },
    { weeklyTopic: ["Redux Extra", "Typescript"] },
  ],
};

//COMPITO

const Q1 = "QUESTION 1: Spiegazione generica (Cos'è, a cosa serve, che problema risolve, differenze con JS semplice)";
const A1 =
  "ANSWER 1: Sviluppato da Microsoft, è un estensione di JavaScript. Ci da una mano per capire meglio, e in maniera più veloce, il tipo con cui abbiamo a che fare (es. stringa, numeri, bolleani, array, oggetti ecc). Praticamente JavaScript viene equipaggiato con tipi, classi, interfacce e moduli";
console.log(Q1);
console.log(A1);
const Q2 = "QUESTION 2: Il compilatore TS (perché è necessario? e come si usa?)";
const A2 = "ANSWER 2: ";
console.log(Q2);
console.log(A2);
const Q3 = "QUESTION 3: La Type Inference";
const A3 =
  "ANSWER 3: TypeScript è abbastanza intelligente da capire da solo il tipo del dato, possiamo comunque fornire noi un tipo che vorremmo arrivasse";
console.log(Q3);
console.log(A3);
const Q4 = "QUESTION 4: Il tipo ‘any’";
const A4 = "ANSWER 4: Il tipo any viene usato quando è sconosciuto il tipo del dato che ci sta arrivando";
console.log(Q4);
console.log(A4);
const Q5 = "QUESTION 5: Il tipo Union";
const A5 = "ANSWER 5: Si possono usare gli UNION quando abbiamo due parametri diversi, es string | number";
console.log(Q5);
console.log(A5);
const Q6 = "QUESTION 6: Il tipo Tuple";
const A6 =
  "ANSWER 6: Il tuple definisce 2 o 3 tipi di dati dentro un array in ordine ben preciso: [number, boolean, string] --> [5, true, 'ciao']";
console.log(Q6);
console.log(A6);
const Q7 = "QUESTION 7: Le Interfaces in TS";
const A7 = "ANSWER 7: le interfacce ci aiutano ad avere più controllo dei nostri componenti e del tipo al loro interno";
console.log(Q7);
console.log(A7);
const Q8 = "QUESTION 8: Types vs Interfaces";
const A8 = "ANSWER 8: Le interfacce possono estendersi con un extend ";
console.log(Q8);
console.log(A8);
const Q9 = "QUESTION 9: I Generics";
const A9 =
  "ANSWER 9: i Generics sono dei parametri per le interfaccie scritte con le <> . è possibile creare delle variabili di tipo da implementare poi nell'interfaccia";
console.log(Q9);
console.log(A9);
