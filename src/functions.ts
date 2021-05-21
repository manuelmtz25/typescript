type SquareSize='100x100'|'500x500'|'1000x1000'

function createPicture(title?:string, date?:string, size?:SquareSize){
    //se crea la fotografía
    console.log('Create Picture')

}

createPicture('','','100x100')
createPicture('','')

//flat array function
let createPic=(title?:string, date?:string, size?:SquareSize):object => {
    return{
        title,
        date,
        size
    }
}

let createPicObj=createPic('Manuel')
console.log(createPicObj)