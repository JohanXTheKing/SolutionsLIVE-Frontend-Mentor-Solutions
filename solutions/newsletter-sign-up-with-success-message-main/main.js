function Enviar()
{   
    let emailAddress = document.getElementById("emailAddress")
    let main = document.getElementById("main")
    let successACTIVE = document.getElementById("successACTIVE");
    let Text__alt =document.getElementById("TEXT__alt");
    if(emailAddress.value.length == 0)
    {
        emailAddress.style.outline = "1px solid red";
        emailAddress.style.background = "#ffe8e6";
    }else
    {   
        main.style.display = "none";
        successACTIVE.style.display = "block";
        Text__alt.innerHTML = ` A confirmation email has been sent to <b>${emailAddress.value}</b>
        Please open it and click the button inside to confirm your subscription.`;
    }
}