enum PhotoOrientation{
    Landscape =12,
    Portrait=20,
    Square,//21
    Panorama,

}

let sample:PhotoOrientation;
sample=PhotoOrientation.Square

console.log(sample)
console.log(PhotoOrientation[sample])

enum Country{
    Mexico='mex',
    Colombia='col',
    Bolivia='bol'
}

let enumCountry:Country;
enumCountry=Country.Mexico

console.log(enumCountry)
//console.log(Country[enumCountry])//error