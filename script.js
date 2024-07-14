// alert("Hello")
function validate(){
    var user=document.getElementById('user').value;
    var password1 =document.getElementById('password1').value;
    var password2 =document.getElementById('password2').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;

if(user==null || user==""){
    document.getElementById('uname').innerHTML ="Please fill the username field";
    return false;
}

if(user.length <=3 || user.length >=30){
    document.getElementById('uname').innerHTML ="Username should be between 3 to 30 letters";
    return false;
}

if(!isNaN(user)){
    document.getElementById('uname').innerHTML ="only character is allowed ";
    return false;
}

if(password1==null || password1==""){
    document.getElementById('pass1').innerHTML ="Please Enter Password";
    return false;
}

if(password1.length <=6 || password1.length >=20){
    document.getElementById('pass1').innerHTML ="Password should be between 8 to 20 letters";
    return false;
}

if(password2==null || password2==""){
    document.getElementById('pass2').innerHTML ="Please Re-enter Password";
    return false;
}


if(password2!=password1 ){
    document.getElementById('pass2').innerHTML ="Passwords do not match. Please enter correct paswords";
    return false;
}

if(email==null || email==""){
    document.getElementById('email_id').innerHTML ="Please enter email id ";
    return false;
}

if(phone==null || phone==""){
    document.getElementById('phone_no').innerHTML ="Please enter mobile number ";
    return false;
}

if(isNaN(phone)){
    document.getElementById('phone_no').innerHTML= "Mobile number should be in digits only ";
    return false;
}

if(phone.length!=10){
    document.getElementById('phone_no').innerHTML ="Please enter correct mobile number ";
    return false;
}
return true;

}