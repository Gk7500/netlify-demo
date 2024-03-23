//a. Print odd numbers in an array
var array=[1,2,3,4,5,6,7,8,9,];
  let odd=function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i]);
          } 
     }
  }(array);

  //b. Convert all the strings to title caps in a string array

  var str="my name is gaurav";
let def=function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
def(str);

//c. Sum of all numbers in an array

var a = [1,2,3,4,5,6,7,8,9];
var sum = 0;
 let all = function(a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
} 
all(a);

//d .Return all the prime numbers in an array

var n=34;
  let prime =function (n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
      console.log(i);
      }
   }
}
prime(n);

//e .Return all the palindromes in an array
    
     var palindrome = function(arr, n)
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    palindrome(arr,n)
  //  f . Return median of two sorted arrays of the same size
     var array = function(nums1, nums2){
    let s1= nums1.length
    let s2= nums2.length
    let index = s1+s2
    if(s1==0){
        if(s2%2==1){
            return nums2[Math.floor(index/2)]
        }else{
            return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
        }
    }
    for(let i=0 ; i<index/2+1;i++){
            nums1.push(nums2[i])
        }
    nums1.sort((a,b)=>a-b)
    console.log(nums1)
    if(index%2==1){
        return nums1[Math.floor(index/2)]
    }else{
        return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
    }
    
 };

 //g . Remove duplicates from an array

 var array=[1,1,2,3,4,5];
 var dupli = function(array){
   let dup = [...new Set(array)];
   return(dup);
 }
 dupli(array);

 //h. Rotate an array by k times

  let rot = function (a, n, k)
{
    k = k % n;
    for (let i = 0; i < n; i++) {
        if (i < k) {console.log(a[n + i - k] + " ");
        }
        else {console.log((a[i - k]) + " ");
        }
    }
}
  let Array = [1, 2, 3, 4, 5];
 let N = Array.length;
 let K = 2;
 rot( Array, N, K);
