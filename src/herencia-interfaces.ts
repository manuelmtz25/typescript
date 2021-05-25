export {};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama,
}

interface Entity{
    id:number;
    title:string;    
}

interface Album extends Entity{
    description:string;    
}

interface Picture extends Entity{    
    orientation:PhotoOrientation
}

const album:Album={
    id:123,
    title:'Test',
    description:'lorem ipsum dolor'
}

let album2={} as Album;
album2.id=11;
album2.title='asd';
album2.description='lorem ipsum dolor'


console.log('Album',album);
console.log('Album',album2);