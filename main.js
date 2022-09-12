var fullname=document.getElementById("fullname").value;
var email=document.getElementById("email").value;
var phone=document.getElementById("phone").value;
var message=document.getElementById("message").value;
var submitBtn=document.getElementById("submit-btn");
var errors=document.getElementById("errors");


submitBtn.addEventListener("click",validateForm);

function validateForm(){
   var phonereg= /^((+961)(3|70|71|76))\d{6}$/; //phone number regular expression
   var emailreg=^\S{3}+@\S{5}+$;  //phone number regular expression

   if(message.length<100){ //Check the length of the message
        errors.innerHTML+="Message should be a minimum of 100 characters";
   }
   if(fullname.length<100){ //Check the length of the name
    errors.innerHTML+="Full Name should be a minimum of 5 characters";
}
   if(phone.match(phonereg)){ //Check if the phone number is valid
        console.log(valid)}
    else{
        errors.innerHTML+="Phone Number is not valid";}
    if(email.match(phonereg)){  //Check if the email is valid
        console.log(valid)}
    else{
        errors.innerHTML+="Email is not valid";}

 
}