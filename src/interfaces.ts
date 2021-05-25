export {};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama,
}

interface Picture{
    title:string;
    date:string;
    orientation:PhotoOrientation
}

interface PictureConfig{
    title?:string;
    date?:string;
    orientation?:PhotoOrientation
}

function showPicture(picture: Picture){
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`)
}

function generatePicture(config:PictureConfig){
    const pic={title:'Default', date:'2021'};
    if(config.title){
        pic.title = config.title;
    }
    if(config.date){
        pic.date = config.date;
    }

    return pic;
}

let myPic={
    title: 'Test title',
    date: '2021-05',
    orientation:PhotoOrientation.Landscape
}

showPicture(myPic)

showPicture({
    title:'Test',
    date: '2021-05',
    orientation:PhotoOrientation.Square,    
})

let picture=generatePicture({})
let picture2=generatePicture({title:'MMA'})
console.log('picture with empty',picture)
console.log('picture with empty',picture2)