//auto reload the webpage within the time interval
javascript: document.getElementsByTagName("body")[0].innerHTML = "<iframe id=\"testFrame\"src=\"" + window.location.toString() + "\"style=\"position: absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;\"><\/iframe>";
reloadTimer = setInterval(function() {
    document.getElementById("testFrame").src = document.getElementById("testFrame").src
}, 300000)
