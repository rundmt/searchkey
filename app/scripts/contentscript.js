'use strict';

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSelection")
      sendResponse({data: window.getSelection().toString()});
    else
      sendResponse({});
});

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

document.onkeydown = function(e)
	{
    var search_string = getSelectionText();

    if((e.metaKey && e.shiftKey && e.keyCode == 83) || (e.ctrlKey && e.shiftKey && e.keyCode == 83))
    {
      search_string = getSelectionText();
      window.open('https://www.google.com/search?q='+search_string,'_blank');
    }
	}
