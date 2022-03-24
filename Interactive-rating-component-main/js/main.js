var choice = {};
function option(elem){
   choice.value = elem;
}
function submit(){
   card_0 = document.getElementById('card-0');
   card_0.style.opacity = '0';
   card_0.style.visibility = 'hidden';

   card_1 = document.getElementById('card-1');
   
   card_1.style.opacity = '1';
   card_1.style.visibility = 'visible';
 
   var message = document.getElementById('message');
   message.innerHTML = 'You selected ' + choice.value + ' out of 5';
}