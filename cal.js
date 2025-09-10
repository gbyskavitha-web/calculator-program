function calculate(operator){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let result;
    if(operator === '+') result = n1+n2;
    if(operator === '-') result=n1-n2;
    if(operator === '*') result=n1*n2;
    if (operator === '/')result=n2!==0? n1/n2:"cannnot divide by 0";
    document.getElementById("result").innerText="Result:"+result;
    

}