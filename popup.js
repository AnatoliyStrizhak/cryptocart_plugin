var allElements = document.querySelectorAll("*");


for (var i =0; i<allElements.length; i++){
    if (allElements[i].dataset && allElements[i].dataset.translate){
        allElements[i].innerHTML = chrome.i18n.getMessage(allElements[i].dataset.translate);
    }
}


back=chrome.extension.getBackgroundPage();

function b()
{
    back.buy();
    window.close();
}

if(back.sup_site!="")
{

    document.getElementById('cryptobuy').style.display="block";
    document.getElementById('cryptobuy').addEventListener('click', b);
    document.getElementById('whattosel').innerHTML="<strong>"+back.whattosel+"</strong>";
}
else
{
    document.getElementById('cryptobuy').style.display="none";
}

