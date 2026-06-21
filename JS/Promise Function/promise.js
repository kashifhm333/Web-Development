let prom1 = new Promise((resolve, reject) => {
    let sucess = true;

    setTimeout(() =>{
        if(sucess){
            console.log('function runned sucessfully');
            
        }
        else{
            console.log('Not Runned');
            
        }
    })
})