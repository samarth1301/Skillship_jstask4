let accno=prompt('Enter your account number : ');
document.getElementById('detail').innerHTML+=
'Account Number : '+ accno+'<br>';

let cbalance=prompt('Enter credit balance : ');
document.getElementById('detail').innerHTML+=
'Credit limit : '+ cbalance+'<br>';

let initialbalance=prompt('Enter initial balance : ');
document.getElementById('detail').innerHTML+=
'Beginning balance : '+ initialbalance+'<br>';

let expenditure=prompt('Enter current expenditure :');
document.getElementById('detail').innerHTML+=
'Total Expenditure :'+expenditure+'<br>';

let credit=prompt('Enter Credit Payment :');
document.getElementById('detail').innerHTML+=
'Total Credit Payments :'+credit+'<br>';

let balance= parseInt(initialbalance)+parseInt(expenditure)
-parseInt(credit);
document.getElementById('detail').innerHTML+=
'New Balance :'+balance+'<br> <br> '; 

if(parseInt(balance)>parseInt(cbalance)){
    document.getElementById('detail').innerHTML+=
    'Caution: You have exceeded your<br> monthly Credit limit  '
}