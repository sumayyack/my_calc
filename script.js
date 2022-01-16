function displayText(num){
    result.value+=num
}


function clearBox(){
    result.value=""
}


function evaluateExpression(){
    let res=eval(result.value)
    result.value=res
}