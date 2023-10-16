let a = [1, 2, 3, 4, 5, 6] 

let total = a.reduce((sum,item) => {
   
    if(item  % 2 === 0){
         sum+= item
    }
    return sum
},0)
console.log(total)