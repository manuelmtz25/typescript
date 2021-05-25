import {Picture, PhotoOrientation} from './clases'

let sample:PhotoOrientation;
sample=PhotoOrientation.Square

console.log(sample)

const pic:Picture=new Picture(123, 'MMA', PhotoOrientation.Landscape);
console.log(pic);