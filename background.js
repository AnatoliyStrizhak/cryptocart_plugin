var sup_site=""
var whattosel=""


function checkURL(){

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

    var url = tabs[0].url;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/AnatoliyStrizhak/cryptocart_plugin/master/supported_sites.js', true);
    xhr.onload = function() {

        res = JSON.parse(this.responseText);

        for(var i=0; i<res['sites'].length; i++)
        {

            if (url.indexOf(res['sites'][i]['url']) > -1)
            {
                sup_site=res['sites'][i]['url'];

                if(chrome.i18n.getUILanguage().indexOf("ru") >-1)
                {
                    whattosel=res['sites'][i]['ru_order'];
                }
                else
                {
                    whattosel=res['sites'][i]['order'];
                }
                chrome.browserAction.setIcon({path:"logo.png"});
                break;
            }
            else
            {
                sup_site="";
                chrome.browserAction.setIcon({path:"logo_bw.png"});
            }
        }

    }

    xhr.send();
});

}


chrome.tabs.onActivated.addListener(checkURL);
chrome.tabs.onUpdated.addListener(checkURL)

