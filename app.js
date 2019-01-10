//Project Euler question 2
//Even Fibonacci numbers

//helper function
var isEven = function(num){
    return num % 2 == 0;
}




var sequence = function(){
    fibSeq = [0,1];
    i=1;
    
    while(fibSeq[i]<4000000){
    nextNum = fibSeq[i] + fibSeq[i-1];
    fibSeq.push(nextNum);
    i++;
    
}
console.log(fibSeq.length);
var sol = 0;
for (j=0;j<fibSeq.length; j++){
    
    if(isEven(fibSeq[j])){
        sol += fibSeq[j];
    }
    
}
console.log("solution is " + sol);
}

sequence();