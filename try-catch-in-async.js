// Simple Part
let value =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Error")
    },1000);

});



async function showValue(){
    try{
        let result = await value;
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
    
}

showValue();

// Challenge Part
let value_1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("1s")
    },2000);

});

let value_2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("2s")
    },3000);

});

let value_3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("3s")
    },1000);

});

async function showAllValues() {
    try{
        let result = await Promise.race([value_1,value_2,value_3]);

       console.log(result);

    }catch(error){
        console.log(error);
    }
    
}
showAllValues();
