export {};

export enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama,
}

export class Picture{
    private _id:number;
    public title:string;    
    orientation:PhotoOrientation

    constructor(id:number, title:string, orientation:PhotoOrientation){
        this._id = id;
        this.title = title;
        this.orientation = orientation;
    }

    get id(){
        return this._id;
    }

    toString(){
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
    }
}

const pic:Picture=new Picture(123, 'MMA', PhotoOrientation.Landscape);
console.log(pic);