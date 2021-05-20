console.log('MMA')

// Number

//Explicito

let phone : number;
phone=1;
phone=12345;
//phone = "hola" // Error

//Inferido

let phoneNumber=1;
phoneNumber =12345;
//phone = "hola" // Error


let hex:number=0xf00d;
let binary:number=0b10;
let octal:number=0o744;

//Tipo: Boolean
let isPro:boolean;
isPro=true;
let isUserPro=false;

//String 
let username: string='Manuel Mtz'
username="MMA"

//Template String
//back-tick or back-quote
let userInfo:string;
userInfo=`
    User Info
    unername: ${username}
    firstName: ${username} Manuel
    other Name: ${username + ' Manuel'}
`;

console.log(userInfo)
