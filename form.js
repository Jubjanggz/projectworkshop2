$(function(){

    $('#mainform').submit(function (event) {
        console.log('onsubmit');
       var form = $('#mainform')[0];
       if (form.checkValidity() == false) {
           event.preventDefault();
       }  
       $(this).addClass('was-validated');
    
});
 });



var email = document.getElementById("email");
var confirm_email = document.getElementById("confirm_email");

function validateEmail(){

   if(email.value != confirm_email.value){
    confirm_email.setcustomValidity("Email is't correct !");
   }else{
    confirm_email.setcustomValidity('');
   }
}
email.onchange = validateEmail;
confirm_email.onkeyup = validateEmail;
