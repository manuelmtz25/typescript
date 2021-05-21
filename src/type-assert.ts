export {};
// <> Angle bracket syntax

let username:any;
username ='manuel'

//let message:string=(<string>username).length>5?'welcome':'bye';
let message:string=(username as string).length>5?'welcome':'bye';
console.log(message)
