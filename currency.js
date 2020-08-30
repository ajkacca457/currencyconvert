const currencyone=document.querySelector("#currencyone");
const currencytwo=document.querySelector("#currencytwo");
const input1=document.querySelector("#inputone");
const input2=document.querySelector("#inputtwo");

const button=document.querySelector("#swap");
const rate=document.querySelector("#rate");

function calculate (){
const conevalue=currencyone.value;
const ctwovalue=currencytwo.value;

fetch(` https://api.exchangerate-api.com/v4/latest/${conevalue}`)
  .then(function(res){
      return res.json();
  })
  .then(function(data){
    const updatedcurrency=data.rates[ctwovalue];
    rate.innerText=`1 ${conevalue} = ${updatedcurrency} ${ctwovalue}`
    rate.style.display="block";
    input2.value=(input1.value*updatedcurrency).toFixed(2);
  })
}


button.addEventListener("click", function(){
const temp=currencyone.value;
currencyone.value=currencytwo.value;
currencytwo.value=temp;
  calculate();
})




currencyone.addEventListener("change",calculate);
input1.addEventListener("input",calculate);
currencytwo.addEventListener("change",calculate);
input2.addEventListener("input",calculate);
