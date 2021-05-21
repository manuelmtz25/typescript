export{};

//let idUser:number|string

type IdUser=number|string
let idUser:IdUser

idUser=10
idUser='10'

//Buscar username dado un ID
//function getUsernameById(id:number|string){
function getUsernameById(id:IdUser){
    //Logica de negocio
    return 'manuel'
}

console.log(getUsernameById(10))
console.log(getUsernameById('10'))


//Tipos literales
// 100x100 500x500 1000x1000

type SquareSize='100x100'|'500x500'|'1000x1000'
let smallPicture:SquareSize='100x100'