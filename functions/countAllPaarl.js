function countAllPaarl(regNum){
    var str = regNum.split(', ');
    var newArry = [];
    
    for(var i = 0; i < str.length; i++){
    //var paarlReg = str[i];
    if(str[i].startsWith('CJ')){
      newArry++;
           
       }
    }
    return newArry;  
  }//end of function 