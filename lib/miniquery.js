/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 var SweetSelector = {
   select: function(input){
     var arrayInput = input.split("")
     var type = arrayInput.shift()
     var name = arrayInput.join("")
     if(type == "#"){
       return document.getElementById(name)
     } else if (type =="."){
       return document.getElementsByClassName(name)
     } else {
       return document.getElementsByTagName(input)
     }
   }
 }


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

 var DOM = {
   hide: function(input){
     var arrayInput = input.split("")
     var type = arrayInput.shift()
     var name = arrayInput.join("")
     if(type == "#"){
       document.getElementById(name).style.display= 'none'
     } else if (type =="."){
       for (var i=0; i<document.getElementsByClassName(name).length;i++){
         document.getElementsByClassName(name)[i].style.display= 'none'
       }
     } else {
       for (var i=0; i< document.getElementsByTagName(input).length;i++){
         document.getElementsByTagName(input)[i].style.display= 'none'
       }
     }
   },

   show: function(input){
     var arrayInput = input.split("")
     var type = arrayInput.shift()
     var name = arrayInput.join("")
     if(type == "#"){
       document.getElementById(name).style.display= 'block'
     } else if (type =="."){
       for (var i=0; i<document.getElementsByClassName(name).length;i++){
         document.getElementsByClassName(name)[i].style.display= 'block'
       }
     } else {
       for (var i=0; i< document.getElementsByTagName(input).length;i++){
         document.getElementsByTagName(input)[i].style.display= 'block'
       }
     }
   },

   addClass: function(input, addition){
     var arrayInput = input.split("")
     var type = arrayInput.shift()
     var name = arrayInput.join("")
     if(type == "#"){
       document.getElementById(name).className += " " + addition
     } else if (type =="."){
       for (var i=0; i<document.getElementsByClassName(name).length;i++){
         document.getElementsByClassName(name)[i].className += " " + addition
       }
     } else {
       for (var i=0; i< document.getElementsByTagName(input).length;i++){
         document.getElementsByTagName(input)[i].className += " " +addition
       }
     }
   },

   removeClass: function(input, devarion){
     var arrayInput = input.split("")
     var type = arrayInput.shift()
     var name = arrayInput.join("")
     if(type == "#"){
       document.getElementById(name).className= document.getElementById(name).className.replace(devarion, "")
     } else if (type =="."){
       for (var i=0; i<document.getElementsByClassName(name).length;i++){
         document.getElementsByClassName(name)[i].className= document.getElementsByClassName(name)[i].className.replace(devarion, "")
       }
     } else {
       for (var i=0; i< document.getElementsByTagName(input).length;i++){
         document.getElementsByTagName(input)[i].className=document.getElementsByTagName(input)[i].className.replace(devarion,"")
       }
     }
   }
 }


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 var EventDispatcher = {
   on: function(input, action, callback){
     var arrayInput = input.split("")
     var type = arrayInput.shift()
     var name = arrayInput.join("")
     if(type == "#"){
       document.getElementById(name).addEventListener(action, callback)
     } else if (type =="."){
       for (var i=0; i<document.getElementsByClassName(name).length;i++){
         document.getElementsByClassName(name)[i].addEventListener(action, callback)
       }
     } else {
       for (var i=0; i< document.getElementsByTagName(input).length;i++){
         document.getElementsByTagName(input)[i].addEventListener(action, callback)
       }
     }
   }
 }

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

 var AjaxWrapper = {
   request: function(input){
     var xhr = new XMLHttpRequest()
     xhr.open(input.type, input.url, true)
     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
     xhr.responseType = 'json'
     xhr.send()

     xhr.onload = function(e){
       var data = e.target.response
       input.success(data)
     }
   }
 }

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
