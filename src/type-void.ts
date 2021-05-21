//Void

//Explicito
function showInfo(user:any){
    console.log('User info:', user.id, user.username, user.firstName)    
}

showInfo({id:1, username:'mma', firstName:'Manuel'})

//tipo void como tipo de dato en variable

let unusable:void;
//unusable=null; //para que no marque error se debe poner en el config "strict": false,
unusable=undefined;

//Tipo: Never

function handleError(code: number, message: string):never{
    //Process your code here
    //Generate a message
    throw new Error(`Code: ${code}, Message: ${message}`)
}

try{
    handleError(404,'Not found')
}
catch(error){
    console.log(error.message)
}