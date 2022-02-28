function deposite() {
    let depositeValue = document.querySelector('#deposite-to-account');
    let depositeOutput = document.querySelector('#deposite-output');
    let balanceOutput = document.querySelector('#balance-output');
    depositeOutput.innerText = Number(depositeOutput.innerText) + Number(depositeValue.value);
    balanceOutput.innerText = Number(balanceOutput.innerText) + Number(depositeValue.value);
    depositeValue.value = "";
}
//widraw button functionality
function widraw() {
    let widrawValue = document.querySelector('#widraw-from-account');
    let widrawOutput = document.querySelector('#widraw-output');
    widrawOutput.innerText = Number(widrawOutput.innerText) + Number(widrawValue.value);
   widrawValue.value = "";
}