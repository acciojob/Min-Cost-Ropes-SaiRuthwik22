function mincost(arr)
{ 
//write your code here
// return the min cost
	let result = []
 while(arr.length>1){
     arr.sort()
     let x = arr[0]+arr[1]
     result.push(x)
     arr.splice(0,2)
     arr.push(x)
 }
 let sum = 0
 result.forEach((ele)=>sum+=ele)
return sum
  
}

module.exports=mincost;
