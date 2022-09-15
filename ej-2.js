// const nombreUsuario = prompt("Hola! Cual es tu nombre?").toLowerCase();
// const miNombre = 'juan'
// const nombreAmigo = 'marcos'

// if (miNombre === nombreUsuario) {
//   console.log(`Hola tocayo! Yo tambien me llamo ${nombreUsuario}`);
// } 
// else if (nombreAmigo === nombreUsuario) {
//   console.log(`Hola ${nombreUsuario} te llamas igual que mi amigo!`);
// } 
// else {
//   console.log(`Hola ${nombreUsuario}`);
// }

const EdadUsuario = Number(prompt("Cual es tu edad?"));
const miEdad = 20;

if (EdadUsuario > miEdad){
    console.log(`Tenes mas años que yo, tu edad es ${EdadUsuario} años`)
}
else if (EdadUsuario < miEdad)
{
    console.log(`Sos mas chico que yo, tu edad es ${EdadUsuario} años`)
}
else{
    console.log(`Tenemos la misma edad, tenes ${EdadUsuario} años`)
}

const pedirDocumento = prompt("Tenes documento?").toLowerCase();
const edadEntradaMinima = 18;
const respuestaSi = 'si';
const respuestaNo = 'no';

if(pedirDocumento === respuestaSi){
    const edadUsuario = Number(prompt("Cual es tu edad?"));
    
    if(edadUsuario>=edadEntradaMinima){
        console.log('Entras al bar');
    }
    else{
        console.log('No entras al bar');
    }
}
else if(pedirDocumento === respuestaNo)
{
    console.log('No podes entrar al bar');
}
else
{
    console.log('Lo siento, no entendi tu respuesta');
}