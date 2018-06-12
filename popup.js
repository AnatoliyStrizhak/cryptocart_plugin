var allElements = document.querySelectorAll("*");


for (var i =0; i<allElements.length; i++){
    if (allElements[i].dataset && allElements[i].dataset.translate){
        allElements[i].innerHTML = chrome.i18n.getMessage(allElements[i].dataset.translate);
    }
}


function buy() {

    chrome.tabs.insertCSS(null, {file: 'cart.css'}, function () {
        chrome.tabs.executeScript({file: 'cart.js'})
        window.close();
    });
}


back=chrome.extension.getBackgroundPage();

if(back.sup_site!="")
{
    document.getElementById('cryptobuy').style.display="block";
    document.getElementById('cryptobuy').addEventListener('click', buy);
    document.getElementById('whattosel').innerHTML="<strong>"+back.whattosel+"</strong>";
}
else
{
    document.getElementById('cryptobuy').style.display="none";
}

