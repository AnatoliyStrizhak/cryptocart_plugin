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
    document.getElementById('whattosel').innerHTML=back.whattosel;
}
else
{
    document.getElementById('cryptobuy').style.display="none";
}

