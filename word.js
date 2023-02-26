let answer ;
answer= Math.floor(Math.random()*10 +1);
let count = 0;
let pre;
document.getElementById('btn').onclick=function()
{
    
let guess =document.getElementById('ans').value;
document.getElementById('ans').value=" ";

if(guess==answer)
{
    count ++ ;
    document.getElementById('dis').innerHTML= 'awesome !  you took ' + count + ' guessss' ;
   
  
    
}
else if (guess<answer)
{
    document.getElementById('dis').innerHTML= 'too small , keep guessing'   ;
    count ++ ;
}
else
{
    document.getElementById('dis').innerHTML= 'too big  ' + " thats what she said!!!" ;
    count ++ ;
}




}






