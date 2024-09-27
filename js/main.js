document.addEventListener("DOMContentLoaded", function() {
    // duh
    var adScript = document.createElement('script');
    adScript.async = true;
    adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3317735030374126";
    adScript.setAttribute("crossorigin", "anonymous");

    document.head.appendChild(adScript);
});
console.log('This file should be linked to every file. If this is not the case, then it is considered a bug.');
