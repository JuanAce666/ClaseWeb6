/*var fruta = "Mango";
var fruta2 =  "Manzana";
var fruta3 = "Limon";
var frutas = ["sandia","Fresas","Banano"];
var sanchocho = [
    "papa",
    false,
    666,
    function(){
        return "Hola desde la fuction"        
    },
    ["cebolla",555,true]
];*/


//var frutas = ["sandia","Mango","manzana"];
//frutas.push("fresas");
//frutas.unshift("pera");
//var dato = frutas.shift();
//var rango = [frutas.slice(0,1), frutas.slice(2,3)];
//frutas.splice(2,0,"fresas");
//document.write("dato: " +(frutas.length)+"<br>");
//document.write("dato: " +rango+"<br>");
//document.write("dato: " +frutas+"<br>");


/*
document.write("cosas: "+ sanchocho[0]+"<br>");
document.write("cosas: "+ sanchocho[3]()+"<br>");
//arreglo matriz
document.write("cosas: "+ sanchocho[4][1]+"<br>");*/


/*var frutas = [];
var numero = parseInt(prompt("Digite numeros de frutas: "));
for (var i=0; i < numero; i++){
   // frutas.push(prompt("Digite nombre de la fruta"));
    frutas[i] = prompt("Digite nombre de la fruta: ");
}
for (var j = 0; j < frutas.length; j++) {
    document.write("Fruta: " + frutas[j]+ "<br>");
}
frutas.forEach((dato, pos ) => {
    document.write("Fruta "+ pos+": "+ dato+ "<br>");
})*/

/*var num1 = [3,45,22,50,32,34];
var num2 = [5,67,43,23,43,12];
var suma1 = 0;
var suma2 = 0;
for (var x = 0; x < num1.length; x++) {
   document.write(num1[x] +" + "+num2[x]+" = " +(num1[x]+num2[x]) +"<br>");
   suma1 += num1[x];
   suma2 += num2[x]; 
}
document.write(suma1 +" + "+suma2+ " = "+(suma1+suma2));*/


//declarar objetos
/*var sanchocho = {
    "v1":"Tomate",
    "v2":666,
    "v3":true,
    "v4":function(){
        return"Hola funcion";
    },
    "v5":["maggi",555,false],
    "v6":{
        "y1":"cilantro",
        "y2":777
    }
}
document.write("sancocho: "+ sanchocho.v1+"<br>");
document.write("sancocho: "+ sanchocho.v2+"<br>");
document.write("sancocho: "+ sanchocho.v3+"<br>");
document.write("sancocho: "+ sanchocho.v4()+"<br>");
document.write("sancocho: "+ sanchocho.v5+"<br>");
document.write("sancocho: "+ sanchocho.v6.y1+"<br>");
document.write("sancocho: "+ sanchocho.v6.y2+"<br>");*/
/*var verdura ={
    "v1":"tomate",
    "v2":"cebolla",
    "v3":"zanahoria"
}
document.write("Numero de ref: "+ Object.keys(verdura).length +"<br>");
document.write("Referencias: "+ Object.keys(verdura) +"<br>");
document.write("Valores: "+ Object.values(verdura) +"<br>");
document.write("Ref y valores: "+ Object.entries(verdura) +"<br>");*/
/*var empleados = {};
var empleado2 = {
    "Nombre": "",
    "Profesion":"",
    "Salario":""
}
empleados.Nombres = "Juan",
empleados.Profesion = "Doctor",
empleados.Salario = "666"

empleado2.Nombre = "Felipe",
empleado2.Profesion="Ing",
empleado2.Salario="555"
document.write("nombres: "+empleados.Nombres);*/