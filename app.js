let fresh = 0;
let support = 0;
let transfer = 0;
let outbound = 0;
let outbound_connect = 0;

// Code for fresh calls

const fresh_num = document.getElementById("fresh-num");
const fresh_minus = document.getElementById("fresh-minus");
const fresh_plus = document.getElementById("fresh-plus");
const fresh_data = document.getElementById("fresh-data");
const reset = document.getElementById("reset");

fresh_plus.addEventListener("click", ()=>{
    fresh++;
    fresh = (fresh<10) ? "0" + fresh : fresh;
    fresh_data.innerHTML = fresh;
    fresh_num.innerHTML = fresh;
})
fresh_minus.addEventListener("click", ()=>{
    if(fresh <= 0 ){
        fresh = 0;
        fresh_data.innerHTML = fresh;
    }
    else{
        fresh--;
        fresh = (fresh<10) ? "0" + fresh : fresh;
        fresh_num.innerHTML = fresh;
        fresh_data.innerHTML = fresh;
    }
    
})
// Code for support calls

const support_num = document.getElementById("support-num");
const support_minus = document.getElementById("support-minus");
const support_plus = document.getElementById("support-plus");
const support_data = document.getElementById("support-data");

support_plus.addEventListener("click", ()=>{
    support++;
    support = (support<10) ? "0" + support : support;
    support_data.innerHTML = support;
    support_num.innerHTML = support;
})
support_minus.addEventListener("click", ()=>{
    if(support <= 0 ){
        support = 0;
        support_data.innerHTML = support;
    }
    else{
        support--;
        support = (support<10) ? "0" + support : support;
        support_num.innerHTML = support;
        support_data.innerHTML = support;
    }
    
})

// Code for transfer calls

const transfer_num = document.getElementById("transfer-num");
const transfer_minus = document.getElementById("transfer-minus");
const transfer_plus = document.getElementById("transfer-plus");
const transfer_data = document.getElementById("transfer-data");

transfer_plus.addEventListener("click", ()=>{
    transfer++;
    transfer = (transfer<10) ? "0" + transfer : transfer;
    transfer_data.innerHTML = transfer;
    transfer_num.innerHTML = transfer;
})
transfer_minus.addEventListener("click", ()=>{
    if(transfer <= 0 ){
        transfer = 0;
        transfer_data.innerHTML = transfer;
    }
    else{
        transfer--;
        transfer = (transfer<10) ? "0" + transfer : transfer;
        transfer_num.innerHTML = transfer;
        transfer_data.innerHTML = transfer;
    }
    
})

// Code for outbound calls

const outbound_num = document.getElementById("outbound-num");
const outbound_minus = document.getElementById("outbound-minus");
const outbound_plus = document.getElementById("outbound-plus");
const outbound_data = document.getElementById("outbound-data");

outbound_plus.addEventListener("click", ()=>{
    outbound++;
    outbound = (outbound<10) ? "0" + outbound : outbound;
    outbound_data.innerHTML = outbound;
    outbound_num.innerHTML = outbound;
})
outbound_minus.addEventListener("click", ()=>{
    if(outbound <= 0 ){
        outbound = 0;
        outbound_data.innerHTML = outbound;
    }
    else{
        outbound--;
        outbound = (outbound<10) ? "0" + outbound : outbound;
        outbound_num.innerHTML = outbound;
        outbound_data.innerHTML = outbound;
    }
    
})

// Code for outbound_connect calls

const outbound_connect_num = document.getElementById("outbound-connect-num");
const outbound_connect_minus = document.getElementById("outbound-connect-minus");
const outbound_connect_plus = document.getElementById("outbound-connect-plus");
const outbound_connect_data = document.getElementById("outbound-connect-data");

outbound_connect_plus.addEventListener("click", ()=>{
    outbound_connect++;
    outbound_connect = (outbound_connect<10) ? "0" + outbound_connect : outbound_connect;
    outbound_connect_data.innerHTML = outbound_connect;
    outbound_connect_num.innerHTML = outbound_connect;
})
outbound_connect_minus.addEventListener("click", ()=>{
    if(outbound_connect <= 0 ){
        outbound_connect = 0;
        outbound_connect_data.innerHTML = outbound_connect;
    }
    else{
        outbound_connect--;
        outbound_connect = (outbound_connect<10) ? "0" + outbound_connect : outbound_connect;
        outbound_connect_num.innerHTML = outbound_connect;
        outbound_connect_data.innerHTML = outbound_connect;
    }
    
})

// Adding Copy button functionality

function copyText(htmlElement) {
    let inputElement = htmlElement.innerText;
    console.log(inputElement);
    navigator.clipboard.writeText(inputElement);
}


const btn = document.getElementById("copy-btn");

btn.onclick = function(){
    copyText(document.querySelector(".data"));
}


// Reset Button

reset.addEventListener("click", ()=>{
    fresh = "0" + 0;
    fresh_num.innerHTML = fresh;
        fresh_data.innerHTML = fresh;

    support = "0" + 0;
    support_num.innerHTML = support;
    support_data.innerHTML = support;

    transfer = "0" + 0;
    transfer_num.innerHTML = transfer;
    transfer_data.innerHTML = transfer;

    outbound = "0" + 0;
    outbound_num.innerHTML = outbound;
    outbound_data.innerHTML = outbound;

    outbound_connect = "0" + 0;
    outbound_connect_num.innerHTML = outbound_connect;
    outbound_connect_data.innerHTML = outbound_connect;

    

})

