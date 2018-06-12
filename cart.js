order_desc=window.getSelection().toString()
host=window.location.host;

if(order_desc!="")
{
    var pop='<div class="cc_modal-content"><div id="cc_close-button">&times;</div><iframe style="width:80vw; height:70vh" src="https://pokupo.ru/payment/8591/payment#//description='+order_desc+' ('+ host +')&mailUser=&idMethodPayment=&byGroup=no"></iframe></div>';

    var div = document.createElement('div');
    div.className = "cc_modal";
    div.innerHTML =pop;

    document.body.appendChild(div); 

    div.classList.toggle('cc_show-modal');

    div.addEventListener('click', function(e) {
        div.classList.toggle('cc_show-modal');
    });

    document.getElementById("cc_close-button").addEventListener('click', function(e) {
        div.classList.toggle('cc_show-modal');
    });
}
else
{
    alert(chrome.i18n.getMessage("alert_msg"));
}
