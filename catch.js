
let value = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Error")
    },1000);

});

value.catch(error=>console.log(error));



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

Promise.race([value_1,value_2,value_3]).catch(error=>console.log(error));


