//  validation for checking user input fields
validateData = {}
validateData.checkUserInput = () =>{
    if ($('#input_uid').val()== '') {
        $('#uid').html("<p>User data Can't be empty</p>");
        $('#uid').css("color", "red");
        $('#input_uid').css("border", "2px solid red");
        return;
    }else{
        $('#uid').hide();
        $('#input_uid').css("border", "2px solid green");
        validateData.validateLength();
    }
    if ($('#input_mailId').val()== '') {
        $('#mid').html("<p>Mail id can't be empty </p>");
        $('#input_mailId').css("border", "2px solid red");
        $('#mid').css("color", "red");
        return
    }else{
        $('#mid').hide();
        $('#input_mailId').css("border", "2px solid green");
        validateData.validateDataForUserMailId(event);
    }
     if ($('#input_pwd').val() == '') {
        $('#pwd').html("<p>password can't be empty</p>");
        $('#input_pwd').css("border", "2px solid red");
        $('#pwd').css("color", "red");
        return
    }else{
        $('#pwd').hide();
        $('#input_pwd').css("border", "2px solid green");
        validateData.validateDataForUserPwd();
    }
    if ($('#input_rePwd').val() == '') {
        $('#rePwd').html("<p>Re-enter password can't be empty</p>");
        $('#input_rePwd').css("border", "2px solid red");
        $('#rePwd').css("color", "red");
    }else{
        $('#rePwd').hide();
        $('#input_rePwd').css("border", "2px solid green");
    }
   
}
validateData.validateDataForUserId = (event) => { 
    if ((event.charCode >= 65 && event.charCode <= 90 || event.charCode == 32)){
        $('#uid').hide();
        $('#input_uid').css("border", "2px solid green");
        return true;
        
    }else{
        $('#uid').html("<p>Only Capital letter allow</p>");
        $('#uid').css("color", "red");
        $('#input_uid').css("border", "2px solid red");
        return false; 
    }  
}
validateData.validateLength = (event) =>{
    
    var userIdLength = $('#input_uid').val().length;
    // console.log("got fired" + userIdLength)
    if (userIdLength >= 5) {
        $('#uid').hide();
        $('#input_uid').css("border", "2px solid green");
        return true;
        
     }else{
        $('#uid').show();
        $('#uid').html("<p>Length should be min 5 char</p>");
        $('#uid').css("color", "red");
        $('#input_uid').css("border", "2px solid red");
        return false; 
    }
}
// validation for mail id 
validateData.validateDataForUserMailId = (event) =>{
    var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
    var mailID = $('#input_mailId').val();
    if (regex.test(mailID)){
        $('#mid').hide();
        $('#input_mailId').css('border',"2px solid green")
        return true;
    }else{
        $('#mid').show();
        $('#mid').html('<p>plz enter ur correct mail id</p>')
        $('#mid').css('color', 'red')
        $('#input_mailId').css('border',"2px solid red")
        return false;
    }
}
//Validation for user password
validateData.validateDataForUserPwd = (event) =>{
        var pwdVal = $('#input_pwd').val();
    // console.log(pwdVal);
    if (pwdVal.length<8) {
        $('#pwd1').show();
        $('#pwd1').html ("<p>Password length should be at least 8 chars</p>");
        $('#pwd1').css('color','red');
        $('#input_pwd').css('border',"2px solid red");
    }else{
        $('#pwd1').hide();
        $('#input_pwd').css('border',"2px solid green")
    }
    if (pwdVal.match(/[0-9]/)){
        $('#pwd2').hide();
        $('#input_pwd').css('border',"2px solid green")
       
    } else {
        $('#pwd2').show();
        $('#pwd2').html ("<p>Password contains num</p>");
        $('#pwd2').css('color','red');
        $('#input_pwd').css('border',"2px solid red")
    }  
    if (pwdVal.match(/[a-z]/)) {
        $('#pwd3').hide();
        $('#input_pwd').css('border',"2px solid green")
       
    } else {
        $('#pwd3').show();
        $('#pwd3').html ("<p>pwd contains small letters</p>");
        $('#pwd3').css('color','red');
        $('#input_pwd').css('border',"2px solid red")
    }  
    if (pwdVal.match(/[A-Z]/)) {
        $('#pwd4').hide();
        $('#input_pwd').css('border',"2px solid green")
       
    } else {
        $('#pwd4').show();
        $('#pwd4').html ("<p>pwd contains at least one Capital letters</p>");
        $('#pwd4').css('color','red');
        $('#input_pwd').css('border',"2px solid red")
    }  
    if (pwdVal.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\<\.\,]/)) {
        $('#pwd5').hide();
        $('#input_pwd').css('border',"2px solid green")
       
    } else {
        $('#pwd5').show();
        $('#pwd5').html ("<p>plz add atleast one special symbols(@,#,$,&,_,*,!....etc)</p>");
        $('#pwd5').css('color','red');
        $('#input_pwd').css('border',"2px solid red")
    }  
   console.log(pwdVal );
    validateData.checkReenterPwd = (event) =>{
    var rePwdVal = $('#input_rePwd').val()
    if (pwdVal === rePwdVal ) {
        // console.log('prited');
        $('#rePwd').hide();
        $('#input_rePwd').css('border',"2px solid green")
    } else {
        // console.log('err');
        $('#rePwd').show();
        $('#rePwd').html ("<p>plz re-enter correct password </p>");
        $('#rePwd').css('color','red');
        $('#input_rePwd').css('border',"2px solid red")
    }
   }
}