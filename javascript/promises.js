const { fetchData } = require("@coral-xyz/anchor/dist/cjs/utils/registry");

function check(){
    return new Promise (
        (resolve,reject) => {
            setTimeout(() => {
            let sucess = true;
            if(sucess){
                resolve("data fetched");
            }
            else{
                reject("data failed");
            }
                
            }, 3000);
            
        }
    ) ;

    
}
check()
 .then((data) => console.log(data))
 .catch((error) => console.error(error));