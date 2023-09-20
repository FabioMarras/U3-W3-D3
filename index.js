console.log("COMPITO RIGA 219"); // COMPITO RIGA 219
// let myVar = "Fabio";
// myVar = 40;
// let myVar;
var myVar; //possiamo assegnare noi il tipo
var myVar2 = "Fabio"; //questa cosa non ha molto senso perchè la riconosce da solo
// myVar = "Fabio";
myVar = 40;
//tipi primitivi: string, number, boolean, null, undefined, any(da usare con cautela)
//tipi strutturali: array, object, function
var myVar3; //avrà any come tipo quindi non possiamo controllare il tipo
//se noi scriviamo myVar2. ci da tutti i metodi delle stringhe in questo caso
var sum = function (num1, num2) {
    var n1 = parseInt(num1);
    var n2 = parseInt(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
        return n1 + n2;
    }
    else {
        return "inserisci due numeri";
    }
};
console.log(sum("3", "5"));
var sumWithTS = function (num1, num2) {
    return num1 + num2;
};
sumWithTS(5, 10);
var mixed = function (par1, par2) {
    if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2))
        return par1 + par2;
    else {
        return "NOPE";
    }
};
console.log(mixed("ciao", 8));
console.log(mixed(8, 8));
var mixed2 = function (par1, par2) { };
var maybe;
if (maybe === true) {
    var myBoolean = maybe;
    //   const myBoolean2:string = maybe; questo non lo accetta
}
//array
var myArray = [1, 4];
myArray.push(3);
console.log(myArray);
// const myArray2: string | number = [1, 4];
// myArray2.push("ciao");
// console.log(myArray2);
var myArray3 = [];
myArray3.push("ciao");
myArray3.push("Fabio");
myArray3.push(3);
console.log(myArray3);
// const myArray4: string[] = []; //qui puoi pushare solo stringhe
var myArray4 = []; //qui puoi pushare solo stringhe
myArray4.push("uno");
myArray4.push("due");
myArray4.push("tre");
myArray4.forEach(function (s) { return s === null || s === void 0 ? void 0 : s.length; }); //s potrebbe non essere ancora arrivato e quindi essere undefined
//TUPLE
var myTuple = ["", 0];
var myTuple2 = ["", 0, true]; //sono scritti in ordine, se manca qualcosa si lamenta
var myTuple3 = ["", 0, true]; //lo capisce anche da solo
var NOTTuple4 = [0, "", true]; //cosi puoi anche scrivere senza ordine preciso
// myTuple2[0]. con questo punto riconosce il tipo e il punto assoccia i metodi del tipo
//quando riconosce o gli indichiamo un tipo lui assoccia tutti i metodi
var addition = function (n1, n2) {
    return n1 + n2;
};
var addition2 = function (n1, n2) { return n1 + n2; }; //torna un numero se specificato e non void
var empty = function () { };
var newFunc = addition;
newFunc = empty;
//OGGETTI
var obj = {
    name: "Fabio",
    surname: "Marras",
    age: 26,
    gender: "male",
};
console.log(obj.name.length);
var obj2 = {
    firstName: "Mario",
    lastName: "Rossi",
};
var obj3 = {
    name: "Riccardo",
    surname: "alpha",
    age: 30,
    gender: "male",
    //   country: "italy" questo da errore perchè non è assegnato come proprietà, seguente
};
var obj4 = {
    name: "Riccardo",
    surname: "alpha",
    age: 30,
    gender: "male",
    isRemote: true,
    country: "italy",
};
var obj5 = {
    name: "Franco",
    surname: "Beta",
    age: 35,
    gender: "male",
    isRemote: true,
    //ora country non è obbligatorio per via del ? su RemoteTeacher
};
var Student1 = {
    name: "Fabio",
    eyes: true,
    height: 176,
    hasWebcam: true,
    batch: "FS0323B",
};
var Student2 = {
    name: "Max",
    eyes: true,
    height: 160,
    hasWebcam: true,
    batch: "FS0323B",
};
var arrStudents = [];
arrStudents.push(Student1);
arrStudents.push(Student2);
console.log(arrStudents);
arrStudents.forEach(function (s) { return s.hasWebcam; });
var U1 = {
    name: "Unit1",
    assignedTeacher: "Stefano",
    topic: "HTML, CSS",
};
var U2 = {
    name: "Unit2",
    assignedTeacher: "Stefano",
    topic: ["JS", "BOOTSTRAP"],
};
var U3 = {
    name: "Unit3",
    assignedTeacher: "Stefano",
    topic: [
        { weeklyTopic: ["React", "state"] },
        { weeklyTopic: ["Redux", "Router"] },
        { weeklyTopic: ["Redux Extra", "Typescript"] },
    ],
};
//COMPITO
var Q1 = "QUESTION 1: Spiegazione generica (Cos'è, a cosa serve, che problema risolve, differenze con JS semplice)";
var A1 = "ANSWER 1: Sviluppato da Microsoft, è un estensione di JavaScript. Ci da una mano per capire meglio, e in maniera più veloce, il tipo con cui abbiamo a che fare (es. stringa, numeri, bolleani, array, oggetti ecc). Praticamente JavaScript viene equipaggiato con tipi, classi, interfacce e moduli";
console.log(Q1);
console.log(A1);
var Q2 = "QUESTION 2: Il compilatore TS (perché è necessario? e come si usa?)";
var A2 = "ANSWER 2: ";
console.log(Q2);
console.log(A2);
var Q3 = "QUESTION 3: La Type Inference";
var A3 = "ANSWER 3: TypeScript è abbastanza intelligente da capire da solo il tipo del dato, possiamo comunque fornire noi un tipo che vorremmo arrivasse";
console.log(Q3);
console.log(A3);
var Q4 = "QUESTION 4: Il tipo ‘any’";
var A4 = "ANSWER 4: Il tipo any viene usato quando è sconosciuto il tipo del dato che ci sta arrivando";
console.log(Q4);
console.log(A4);
var Q5 = "QUESTION 5: Il tipo Union";
var A5 = "ANSWER 5: Si possono usare gli UNION quando abbiamo due parametri diversi, es string | number";
console.log(Q5);
console.log(A5);
var Q6 = "QUESTION 6: Il tipo Tuple";
var A6 = "ANSWER 6: Il tuple definisce 2 o 3 tipi di dati dentro un array in ordine ben preciso: [number, boolean, string] --> [5, true, 'ciao']";
console.log(Q6);
console.log(A6);
var Q7 = "QUESTION 7: Le Interfaces in TS";
var A7 = "ANSWER 7: le interfacce ci aiutano ad avere più controllo dei nostri componenti e del tipo al loro interno";
console.log(Q7);
console.log(A7);
var Q8 = "QUESTION 8: Types vs Interfaces";
var A8 = "ANSWER 8: Le interfacce possono estendersi con un extend ";
console.log(Q8);
console.log(A8);
var Q9 = "QUESTION 9: I Generics";
var A9 = "ANSWER 9: i Generics sono dei parametri per le interfaccie scritte con le <> . è possibile creare delle variabili di tipo da implementare poi nell'interfaccia";
console.log(Q9);
console.log(A9);
