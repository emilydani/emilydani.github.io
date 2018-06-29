//function include() {
//    let file, xhttp;
//
//    let allElements = document.getElementsByTagName('*');  // get all elements on the page
//    
//    for (let i = 0; i < allElements.length; i++) {   // process all the elements looking for the custom attribute 'includefile'
//      file = allElements[i].getAttribute("includefile");
//      if (file) { // if the attribute is found, process an AJAX XMLHttpRequest
//        xhttp = new XMLHttpRequest();
//        xhttp.onreadystatechange = function() {
//          if (this.readyState == 4) { 
//            if (this.status == 200) { allElements[i].innerHTML = this.responseText;}
//            if (this.status == 400) { allElements[i].innerHTML = "Page not found!";}
//            allElements[i].removeAttribute('includefile');
//            include(); // call the function again to start the process over
//          }
//        }  
//        xhttp.open('GET', 'includes/' + file, true);  // matching file names in includes folder
//        xhttp.send();
//        return; 
//      }
//    } 
//}


function include() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("includefile");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("includefile");
          include();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
// initial call to the include function
include();