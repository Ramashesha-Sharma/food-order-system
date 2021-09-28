let unameNode=document.getElementById("uname"); 
let spanNode1=document.getElementById("error1"); 
let passNode=document.getElementById("pass"); 
let spanNode3=document.getElementById("error3"); 
let c_passNode=document.getElementById("cpass"); 
let spanNode4=document.getElementById("error4"); 
let addNode=document.getElementById("addr"); 
let spanNode7=document.getElementById("error5"); 
function validate1() {
    spanNode1.innerHTML="";
    let fname=unameNode.value;
    if(fname==''){
        spanNode1.innerHTML="This field is required";
        unameNode.style.border="3px solid red";
        return false;
    }
    else if(fname.includes(' ')){
        spanNode1.innerHTML="Space is not allowed";
        unameNode.style.border="3px solid red";
        return false;
    }
    else{
        unameNode.style.border="3px solid green";
        return true;
    }
}
function validate3(){
    spanNode3.innerHTML="";
    let password=passNode.value;
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

    if(password==''){
        spanNode3.innerHTML="This field is required";
        passNode.style.border ="3px solid red";
        return false;
    }
    else if(password.length<4 || password.length>8){
        spanNode3.innerHTML="Password should be in the range 4 to 8 characters long";
        return false;
    }
    else if(regExp.test(password)==false){
        spanNode3.innerHTML="Password should be alphanumeric with symbols";
        return false;
    }
    else{
        passNode.style.border="3px solid green";
        return true;
    }
}
function validate4(){
    spanNode4.innerHTML="";
    let password=passNode.value;
    let cpassword=c_passNode.value;
    
    if(cpassword==''){
        spanNode4.innerHTML="This field is required";
        c_passNode.style.border ="3px solid red";
        return false;
    }
    else if(cpassword!=password){
        spanNode4.innerHTML="Password should be match";
        c_passNode.style.border ="3px solid red";
        return false;
    }
    else{
        c_passNode.style.border="3px solid green";
        return true;
    }
}

function validateForm() {
    let v1=validate1();
    let v2=validate2();
    let v3=validate3();
    return(v1&&v2&&v3);
}