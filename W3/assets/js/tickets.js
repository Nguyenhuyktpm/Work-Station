const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal=document.querySelector('.modal');

function showBuyTicket(){
    modal.classList.add('open');
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyTicket);
} 

const close = document.querySelector('.modal-close');

function showClose(){
    modal.classList.remove('open');
}
close.addEventListener('click',showClose);



const logbtn=document.querySelector('.btn-log')
const sigin=document.querySelector('.sigin')

function showLogin(){
    sigin.classList.add('open')
}
logbtn.addEventListener('click',showLogin)

