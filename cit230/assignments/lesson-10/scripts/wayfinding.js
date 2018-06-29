 var urlString, urlArray, pageHREF, menu, i, currentURL;
        urlString = document.location.href;
        urlArray = urlString.split('/');
        pageHREF = urlArray[urlArray.length - 1];

        if (pageHREF !== "") {
            menu = document.querySelectorAll('ul#primaryNav li a');
            for (i = 0; i < menu.length; i++) {
                currentURL = (menu[i].getAttribute('href'));
                menu[i].parentNode.className = '';
                if (currentURL === pageHREF) {
                    menu[i].parentNode.className = 'active';
                }
            }
        }
////var w3 = {};
////w3.includeHTML=function(cb) {
////    var z, i, elmnt, file, xhttp;
////    z= document.getElementsByTagName("*");
////    for (i= 0; i<z.length; i++){
////        elmnt= z[i];
////        file = elmnt.getAttribute("includefile");
////        if (file) {
////            xhttp = new XMLHttpRequest();
////            xhttp.onreadystatechange=function() {
////                if (this.readyState == 4&& this.status == 200){
////                    elment.innerHTML = this.responseText +elmnt
////                    .innerHTML;
////                    elmnt.removeAttribute("includefile");
////                    w3.includeHTML(cb);
////                }
////            }
////            xhttp.open("GET", file, true);
////            xhttp.send();
////        }
////    }
////};
// Perform wayfinding highlighting
