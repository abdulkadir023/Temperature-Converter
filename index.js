const CtoF = document.getElementById("CtoF");
const FtoC = document.getElementById("FtoC");

const submit = document.getElementById("submit");

const result = document.getElementById("result");

const test = document.getElementById("test");

submit.onclick = function(){
  
  const input = document.getElementById("input").value;
  
  //test.textContent = `Answer is: ${input}`;
  
  if(CtoF.checked) {
    let answer = (input * 9 / 5 ) + 32;
    result.textContent = ` ${answer }` +  '°F' ;
  }
  else if(FtoC.checked) {
    let answer = (input - 32) * 5 / 9;
    result.textContent = (` ${ answer  }` + '℃');
}
else if (input === "" || input === undefined){
    result.textContent = `Please enter a number and select a conversion of your choosing.`
}
else {
    result.textContent = `Please Select a Conversion type!!!`;
}
}