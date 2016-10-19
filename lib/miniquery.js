/*!
 * miniquery
 */


/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 var SweetSelector = {}
 SweetSelector.select = function (param){
     switch (param.charAt(0)) {
       case '#':
         return document.getElementById(param.substr(1))
         break;
       case '.':
         return document.getElementsByClassName(param.substr(1))
         break;
       default:
         return document.getElementsByTagName(param)
         break;

     }
   }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 var DOM = {}
 DOM.hide = function(param){
   var el = SweetSelector.select(param)
   if(param.charAt(0) === "#"){
      el.style.display = "none"
   } else{
     for (var i = 0; i < el.length; i++) {
       el[i].style.display = "none"
     }
   }
 }
 DOM.show = function(param){
   var el = SweetSelector.select(param)
   if(param.charAt(0) === "#"){
      el.style.display = "block"
   } else{
     for (var i = 0; i < el.length; i++) {
       el[i].style.display = "block"
     }
   }
 }
 DOM.removeClass = function(param){
   var el = SweetSelector.select(arguments[0])
   if(param.charAt(0) === "#"){
      el.className.replace(arguments[1],"")
   } else{
     for (var i = 0; i < el.length; i++) {
       el[i].className.replace(arguments[1],"")
     }
   }

 }
 DOM.addClass = function(param){
   var el = SweetSelector.select(arguments[0])
   if(param.charAt(0) === "#"){
      el.className += " "+arguments[1]
   } else{
     for (var i = 0; i < el.length; i++) {
       el[i].className += " "+arguments[1]
     }
   }
 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
 EventDispatcher = {}
 EventDispatcher.on = function (classname, eventname, functions) {
   var el = SweetSelector.select(classname)
   for (var i = 0; i < el.length; i++) {
     el[i].addEventListener(eventname, functions())
   }
 }


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


 var AjaxWrapper = {}
 AjaxWrapper.request = function(obj){
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
        obj.success(this.responseText)
   } else if(this.readyState == 4 && this.status != 200){
       obj.fail()
   }
 }
   xhttp.open(obj.type, obj.url, true);
   xhttp.send();

 }
/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */



 /*!
  * jQuery JavaScript Library v3.1.1
  * https://jquery.com/
  *
  * Includes Sizzle.js
  * https://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * https://jquery.org/license
  *
  * Date: 2016-09-22T22:30Z
  */
  /*!
  * Bonzo: DOM Utility (c) Dustin Diaz 2012
  * https://github.com/ded/bonzo
  * License MIT
  */
