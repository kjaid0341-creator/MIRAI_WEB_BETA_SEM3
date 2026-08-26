let p1 = 67;
p1=new Promise((resolve,reject)=>{
    // resolve("data fetch succesfully.....")
    // reject("data not fetched")
    // let x= 90;
    // reject(x);
    // resolve(x);
    console.log("wait we are working on it");
    
    setTimeout(()=>{
        resolve("data a gaya")
    },2000);
});
p1.then((data)=>{
    console.log("consumed p1 promise object");
    console.log(data);
})
.catch((error)=>{
    console.log("sorry data nahi aya");
    console.log(error);
})
.finally(()=>{
   console.log("thank you for services");
    
});
// console.log(p1);
//GIVES CALL BACK AND HAS TWO METHODS 1.RESOLVE 2. REJECT
// RESOLVE -> .THEN
// REJECT -> .CATCH
//FINALLY RUNS ALWAY
