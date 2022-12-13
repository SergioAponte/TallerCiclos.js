
// let suma=0
// let prom=0
// let num=0
// while (num>=0){
//     num=+prompt('digite los numeros')
//     if (num>=0){
//     prom++
//     suma+=num}
// }console.log(`el promedio es ${suma/prom}`)

// let suma=0
// for (i=1;i<=100;i++){
//     suma+=i
// }console.log(suma)

// let alumno=prompt('digite el nombre del alumno')
// while (alumno!=''){
//     let practica=parseFloat(prompt('digite nota de la practica'))
//     let problema=parseFloat(prompt('digite nota del problema'))
//     let teorica=parseFloat(prompt('digite la nota teorica'))
//     if (practica>=0 && practica<=10 && problema>=0 && problema<=10 && teorica>=0 && teorica<=10){
//         promedio=(practica*0.1)+(problema*0.5)+(teorica*0.4)
//         console.log(`las notas de ${alumno} son: practica; ${practica}, problema: ${problema} y teorica: ${teorica} y su promedio es de ${alumno} es de ${promedio}`)
//     }
//     else{
//         alert('error en las notas')
//         alumno=prompt('digite el nombre del alumno')
//     }
//     alumno=prompt('digite el nombre del alumno')
// } 

// let dividendo=+prompt('digite el dividendo'),divisor=+prompt('digite el divisor'),cociente=0,verdadero=true
// while (verdadero){
//     if(dividendo-divisor<0){
//         residuo=dividendo
//         verdadero=false
//     }
//     else{
//         dividendo-=divisor
//         cociente++
//     }

// } console.log(`el residuo es ${residuo} y su cociente es de ${cociente}`)

// for (i=1;i<=5;i++){
//     for (j=1;j<=i;j++){
//         document.write(j, end='')
//     }
//     document.write('<br>')
// }

// for (i=5;i>=1;i--){
//     for (j=5;j>=i;j--){
//         document.write(j, end='')
//     }
//     document.write('<br>')
// }

// let acreedor=0
// let numcuenta=0
// while (numcuenta>=0){
//     numcuenta=+prompt('digite el numero de la cuenta')
//     if (numcuenta>=0){
//         nombre=prompt('digite el nombre del cliente')
//         saldoAct=+prompt('digite el saldo de actual de la cuenta')
//         if (saldoAct<0){
//             estado='deudor'
//             nombre=''}
//         else if (saldoAct>0){
//             estado='acreedor'
//             acreedor+=saldoAct
//         }else{
//             estado='nulo'
//         }
//     }console.log(`cliente: ${nombre} numero de cuenta: ${numcuenta}su estado es: ${estado}`)
// }console.log(`el saldo de los acreedores es ${acreedor}`)
// let ptarde=0
// let pnoche=0
// let pmañana=0
// let mañana=0
// let tarde=0
// let noche=0
// for (i=1;i<=5;i++){
//     edad=+prompt('digite las edades de los estudiantes de la mañana')
//     pmañana++
//     mañana+=edad
//     promediomañana=mañana/pmañana
// }
// for (j=1;j<=6;j++){
//     edad=+prompt('digite las edades de los estudiantes de la tarde')
//     tarde+=edad
//     ptarde++
//     promediotarde=mañana/ptarde
// }
// for (k=1;k<=11;k++){
//     edad=+prompt('digite las edades de los estudiantes de la noche')
//     pnoche++
//     noche+=edad
//     promedionoche=mañana/pnoche
// }console.log(`promedio mañana:${promediomañana}, promedio tarde: ${promediotarde}, promedio noche ${promedionoche}`)
// if (promediomañana>promedionoche,promediotarde){
//     console.log('el promedio de la mañana es mayor')
// }else if(promediotarde>promedionoche,promediomañana){
//     console.log('el promedio de la tarde es mayor')
// }else if(promedionoche>promediomañana,promediotarde){
//     console.log('el promedio de la noche es mayor')
// }else{
//     console.log('algunos promedios coinciden')
// }