// let sueldo=+(prompt('digite el sueldo '))
// if (sueldo<=8000000){
//     incremento=0.1 
// }else if (sueldo>=8000000 && sueldo<=12000000){
//     incremento=0.8
// }else{
//     incremento= 0.5
// }
// aumento= sueldo*incremento
// console.log(`el valor del aumento es de ${aumento}`)
// console.log(`el nuevo sueldo es de ${sueldo+aumento}`)

// let salario=+ (prompt('digite el sueldo'))
// if (salario>=2000000){
//     auxilio='No recibe auxilio de transporte'
// }else if (salario>=0 && salario<=2000000){
//     auxilio='si recibe auxilio de transporte'
// }else {
//     auxilio='error en el salario'
// }
// console.log(`el trabajador ${auxilio}`)

// let cantidad=+(prompt('digite la cantidad vendida '))
// let valorunitario= parseFloat(prompt('valor unitario'))
// if (cantidad>=1000){
//     descuento=0.1
// }else if(cantidad>=500 && cantidad<=999){
//     descuento=0.08
// }else if(cantidad>=200 && cantidad<=499){
//     descuento=0.05
// }else{
//     descuento='no hay descuento'
// }
// console.log(`el descuento es de ${(valorunitario*cantidad)*descuento} y el valor a pagar es de ${(valorunitario+(valorunitario*cantidad))-descuento}`)

// inversion=+prompt('digite la inversion')
// tiempo=+ prompt('digite los meses de la tasa de interes')
// if (tiempo<=6){
//     tasa=0.08
// }else if(tiempo>=7 && tiempo<=12){
//     tasa=0.1
// }else if (tiempo>=13 && tiempo<=18){
//     tasa=0.12
// }else if(tiempo>=19 && tiempo<=24){
//     tasa=0.15
// }else {
//     tasa=0.18
// }
// interes=((inversion*(tasa/12)*tiempo))
// total=inversion+interes
// console.log(`el cliente recibira ${interes} por concepto de interes y un total de ${total}`)


// let puesto=prompt(`digite su puesto
// 1. administrativos
// 2. diagramadores
// 3. vendedores`)
// let salario=+(prompt('digite su sueldo '))
// if (puesto==1){
//     aumento=0.05
// }else if (puesto==2){
//     aumento=0.1
// }else if (puesto==3){
//     aumento==0.12
// }else{
//     console.log('error en la digitacion')
// }
// console.log(`el porcentaje que aumento que se le aplico fue de ${aumento*100} %`)
// console.log(`su nuevo sueldo es de ${salario+(salario*aumento)}`)

// let sueldo=+(prompt('digite el sueldo'))
// let venta=+(prompt('digite el total de las ventas'))
// if (venta>=1000000 && venta<=2000000){
//     comision=0.03
// }else if (venta>2000000 && venta<=5000000){
//     comision=0.05
// }else if (venta>5000000){
//     comision=0.08
// }else{
//     comision=0.0
// }
// console.log(`al vendedor le corresponde por comision: ${venta*comision}`)
// console.log(`su sueldo final es de: ${sueldo+comision}`)

// let kW= 100
// let descuentos=0
// let actual=+prompt('digite el valor del consumo actual')
// let anterior=+prompt('digite el valor del consumo anterior')
// let consumo=actual-anterior
// let estrato=+prompt(`digite su estrato:
// 1. estrato 1
// 2. estrato 2
// 3. estrato 3
// 4. otro`)
// switch (estrato){
//     case 1:
//         descuento=0.1
//         descuentos+=descuento
//     case 2:
//         descuento=0.06
//         descuentos+=descuento
//     case 3:
//         descuento=0.05
//         descuentos+=descuento
//     case 4:
//         descuento=0
//         descuentos+=descuento
// }if (consumo>200){
//     descuentos+=0.02
// }
// total=consumo*kW
// console.log(`se consumio: ${consumo}`)
// console.log(`el valor a pagar es de: ${total-(total*descuentos)}`)
// decision=0
// let Name=prompt('digite el nombre')
// let prof=+prompt(`digite sus estudios:
// 1. pregrado
// 2. postgrado
// 3. sin formacion`)
// switch (prof){
//     case 1:
//         let edad=+prompt('digite la edad')
//         if (edad>=25 && edad<=35){
//             decision='APTO'
//         }else{
//             decision='NO APTO'
//         }
//         break
//     case 2:
//         let formacion=+prompt(`digite su experiencia
//         1. especialista
//         2. superior`)
//         if (formacion==1){
//             decision='APTO'
//         }       
//         if (formacion==2){
//             decision='APTO'
//         }       
//         break
//     case 3:
//         decision='NO APTO'
//         break

// }
// console.log(`${Name} ${decision}`)

// let num1=+prompt('digite el numero 1')
// let num2=+prompt('digite el numero 2')
// if (num1%num2 || num2%num1){
//     alert('si es multiplo')
// }else {
//     alert('no es multiplo')
// }
// let bonificacion=0
// let sueldo=+prompt('digite el sueldo')
// let time=+prompt('digite el tiempo de servicio')
// let estado=+(prompt(`digite el estado civil
// 1. soltero
// 2. casado `))
// switch(estado){
//     case 1:
//         if (time>=1 && time<=5){
//         bonificacion+=0.02
//         }else if (time>=6 && time<=10){
//             bonificacion+=0.5
//         }else if (time>10)
//         bonificacion+=0.1
//         break
//     case 2:
//         if (time>=1 && time<=5){
//         bonificacion+=0.05
//         }else if (time>=6 && time<=10){
//             bonificacion+=0.1
//         }else if (time>10)
//         bonificacion+=0.15
//         break
// }
// console.log(`valor bonificacion ${sueldo*bonificacion}`)