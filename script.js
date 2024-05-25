function mincost(arr)
{ 
//write your code here
// return the min cost
	let result = 0
 while(arr.length>1){
     arr.sort()
     let x = arr[0]+arr[1]
     result +=x
     arr.splice(0,2)
     arr.push(x)
 }
return result
  
}

module.exports=mincost;
