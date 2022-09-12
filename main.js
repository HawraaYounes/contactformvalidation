var fullname=document.getElementById("fullname").value;
var email=document.getElementById("email").value;
var phone=document.getElementById("phone").value;
var message=document.getElementById("message").value;
var submitBtn=document.getElementById("submit-btn");
var errors=document.getElementById("errors");


submitBtn.addEventListener("click",validateForm);//Button event listener on click

var emailPartOne=email.split("@");//spliting the email with respect to @
var emailPartTwo=emailPartOne[1].split(".");//spliting the email part after @ with respect to .


function validateForm(){

   var phonereg=((00)|(\+))961((\d)|(7[0168]))\d{6}; //phone number regular expression

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


    if(emailPartOne[0].length<3){ //Check if email is valid
        errors.innerHTML+="Email field should have a minimum of 3 characters before the @";
    }else if(emailPartTwo[0].length<5 || emailPartTwo[0].length>5){
            errors.innerHTML+="Email field should have 5 characters after the @";
        }

 
}