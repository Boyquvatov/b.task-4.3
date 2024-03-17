// 1 masala
// let a = +prompt("sonni kirit .. ")
// let summ=0
// for(let i = 1 ; i <= a ; i++){
//     summ += i
// }
// console.log( summ )


// 2 masala
// let a = +prompt("sonni kirit .. ")
// let summ1=0
// let summ2=0
// let result=0
// for( let i = 0; i<=a ; i++){
//     if(i % 2 == 0){
//         summ1 += i
//     }else{
//         summ2 += i
//     }
// }
// console.log(Math.abs(summ1 - summ2))


// 3 masala
// let a = +prompt("1-sonni kirit .. ")
// let b = +prompt("2-sonni kirit .. ")
// if(a < b){
//     for(let i = a + 1 ; i < b ; i++){
//         console.log(i)
//     }
// }
// else{
//     console.log("Error")
// }


// 4-masala
// let a = prompt("So'zni kirit")
// let summ = a.length
// console.log(summ)

// 5-masala
// let a = +prompt("Sonni kirit")
// let summ = 0
// for(let i = 1 ; i <= a ; i ++){
//     if( a % i == 0){
//         summ++
//     }
// }
// if( summ == 2){
//     console.log('KIritilgan son tub')
// }else{
//     console.log('KIritilgan son tub emas')
// }

// 6-masala
// let a = prompt("so'zni kirit...")
// let b = 0
// for(let i = 0 ; i<= a.length ; i++){
//     let l = a[i]
//     if( l === "a" || l === "o" || l === "i" || l === "e" || l === "u" || l === "o'"){
//         b++
//     }
// }
// console.log(b)


// 7-masala
// let a = prompt("so'zni kirit...")
// let b = 0
// for(let i = 0 ; i<= a.length ; i++){
//     let l = a[i]
//     if( l === "a" || l === "o" || l === "i" || l === "e" || l === "u" || l === "o'"){
//         b++
//     }
// }
// console.log(a.length - b)


// 8 - masala
let a = +prompt("sonni kirit...") 
let b = 0
for( let i = 1 ; i < a ; i++){
    if( a % i == 0){
        b += i
    }
}
if( b == a){
    console.log("kiritilgan son mukammal")
}
else{
    console.log("kiritilgan son mukammal emas")
}
