function check(){
        
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var submit = document.getElementById("submit");
    if(user.length >= 5 &&  pass.length >= 5){
        submit.disabled = false;
        EnableSubmit();
    }
    else{
        submit.disabled = true;
        DisableSubmit();

    }
}

function EnableSubmit(){
    var element = document.getElementById("submit");
    element.style.opacity = "1";
    element.style.border = "2px solid darkorchid";
    element.addEventListener("mouseenter",function(){
        element.style.fontSize = "1.2em";
    })
    element.addEventListener("mouseout",function(){
        element.style.fontSize = "1em";
    })
    element.style.cursor = "pointer";
}
function DisableSubmit(){
    var element = document.getElementById("submit");
    element.style.border = "none";
    element.style.opacity = "0.4";
    element.style.cursor = "";
}
setInterval(check,1);
