var clipboard = require('clipboard');

var container = document.getElementById('container');
var webview = document.getElementById('webview');
var current = "";

webview.setAttribute('useragent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A344 Safari/601.1');
  
setInterval(function() {
  var url = clipboard.readText();
  if (url.match(/^https?:\/\//) && current !== url) {
    container.innerText = current = url;
    webview.setAttribute("src", url);    
  }
}, 500);
