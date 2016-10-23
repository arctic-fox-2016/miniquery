/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 let SweetSelector = {
   select: function(input){
    let a = input.substring(0, 1)
    let b = input.substring(1,input.length)
     if(a=='#')return document.getElementById(b)
     else if(a=='.')return document.getElementsByClassName(b)
     else if(a=='a')return document.getElementsByTagName(input)
   }
 }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 let DOM = {
   hide: function(input){
     let a = input.substring(0, 1)
     let b = input.substring(1,input.length)
     if(a == "."){
       document.getElementsByClassName(b)[0].style.display= 'none'
     }
   },

   show: function(input){
     let a = input.substring(0, 1)
     let b = input.substring(1,input.length)
     if(a == "."){
       document.getElementsByClassName(b)[0].style.display= 'block'
     }
   },

   addClass: function(input, shaded){
     let a = input.substring(0, 1)
     let b = input.substring(1,input.length)
     if(a == "."){
        document.getElementsByClassName(b)[0].className += " " + shaded
     }
   },

   removeClass: function(input, unshaded){
     let a = input.substring(0, 1)
     let b = input.substring(1,input.length)
     if(a == "."){
        document.getElementsByClassName(b)[0].className += document.getElementsByClassName(b)[0].className.replace(unshaded, "")
     }
   }
 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
let EventDispatcher = {
  on: function(input, action, callback){
    let a = input.substring(0, 1)
    let b = input.substring(1,input.length)
    if (a =="."){
      document.getElementsByClassName(b)[0].addEventListener(action, callback)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
 let AjaxWrapper = {
   request: function(input){
     let xhr = new XMLHttpRequest()
     xhr.open(input.type, input.url, true)
     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
     xhr.responseType = 'json'
     xhr.send()

     xhr.onload = function(e){
       let data = e.target.response
       input.success(data)
     }
   }
 }

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
