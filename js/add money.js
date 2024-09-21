

document.getElementById('btn-add-money')
.addEventListener('click', function(event){
event.preventDefault();

const addmoney= document.getElementById('input-add-money').value;
const addmoneyNumber = parseFloat(addmoney);

const pinNumber= document.getElementById('input-pin-number').value;
console.log(addmoney,pinNumber);

// Wrong way To Validate pin Number
if(pinNumber === '100'){
    const balance= document.getElementById('Account-balance').innerText;
    const balanceNumber = parseFloat (balance)
   const newBlance= balanceNumber + addmoneyNumber;
   
   document.getElementById('Account-balance').innerText= newBlance;
}
else{
    alert('Wrong Pin Number ! Pleace Try again')
}
})