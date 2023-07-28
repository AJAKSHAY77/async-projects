// 

// const promise = new Promise((resolve,reject)=>{
//      const error = false
//      if(!error){
//         setTimeout(()=>{
//             console.log("i will take time");
//             resolve({name:"akshay",password:"aj11"})
//           },1000)
//      }else{
//         reject("Error, some error is coming")
//      }
// })

// promise.then((username)=>{
//     console.log(username);
//    return username.name
// })
// .then((name)=>{
// console.log(name);
// })
// .catch((err)=>{
//     console.log(err);
// })

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const error = false
//         if(!error){
           
//             resolve({username:"akshay",pass:"aj11"})
//         }else{
//             reject("error isssss")
//         }
//     },1000)
// })

// async function consumepromise(){
    
//        try{
//         const response  =await promise;
//         console.log(response);
//        }catch{
//         console.log("erro is accur");
//        }
  
// }
// consumepromise()


// async function getAllusers(){
//  const response = await fetch("https://jsonplaceholder.typicode.com/users")
//  const data = await response.json()
//  console.log(data);
// }
// getAllusers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
return response.json()
})
.then((data)=>{
   console.log(data);
})
.catch((err)=>{
   console.log(err);
})