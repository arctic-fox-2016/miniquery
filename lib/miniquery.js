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
    let arrayInput = input.split("")
    let type = arrayInput.shift()
    let name = arrayInput.join("")
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

let DOM = {
  hide: function(input){
    let arrayInput = input.split("")
    let type = arrayInput.shift()
    let name = arrayInput.join("")
    if(type == "#"){
      document.getElementById(name).style.display= 'none'
    } else if (type =="."){
      for (let i=0; i<document.getElementsByClassName(name).length;i++){
        console.log('masuk ganti')
        document.getElementsByClassName(name)[i].style.display= 'none'
        console.log('ganti')
      }
    } else {
      for (let i=0; i< document.getElementsByTagName(input).length;i++){
        document.getElementsByTagName(input)[i].style.display= 'none'
      }
    }
  },

  show: function(input){
    let arrayInput = input.split("")
    let type = arrayInput.shift()
    let name = arrayInput.join("")
    if(type == "#"){
      document.getElementById(name).style.display= 'block'
    } else if (type =="."){
      for (let i=0; i<document.getElementsByClassName(name).length;i++){
        console.log('masuk ganti')
        document.getElementsByClassName(name)[i].style.display= 'block'
        console.log('ganti')
      }
    } else {
      for (let i=0; i< document.getElementsByTagName(input).length;i++){
        document.getElementsByTagName(input)[i].style.display= 'block'
      }
    }
  },

  addClass: function(input, addition){
    let arrayInput = input.split("")
    let type = arrayInput.shift()
    let name = arrayInput.join("")
    if(type == "#"){
      document.getElementById(name).className += " " + addition
    } else if (type =="."){
      for (let i=0; i<document.getElementsByClassName(name).length;i++){
        console.log('masuk ganti')
        document.getElementsByClassName(name)[i].className += " " + addition
        console.log('ganti')
      }
    } else {
      for (let i=0; i< document.getElementsByTagName(input).length;i++){
        document.getElementsByTagName(input)[i].className += " " +addition
      }
    }
  },

  removeClass: function(input, deletion){
    let arrayInput = input.split("")
    let type = arrayInput.shift()
    let name = arrayInput.join("")
    if(type == "#"){
      document.getElementById(name).className= document.getElementById(name).className.replace(deletion, "")
    } else if (type =="."){
      for (let i=0; i<document.getElementsByClassName(name).length;i++){
        console.log('masuk ganti')
        document.getElementsByClassName(name)[i].className= document.getElementsByClassName(name)[i].className.replace(deletion, "")
      }
    } else {
      for (let i=0; i< document.getElementsByTagName(input).length;i++){
        document.getElementsByTagName(input)[i].className=document.getElementsByTagName(input)[i].className.replace(deletion,"")
      }
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
    let arrayInput = input.split("")
    let type = arrayInput.shift()
    let name = arrayInput.join("")
    if(type == "#"){
      document.getElementById(name).addEventListener(action, callback)
    } else if (type =="."){
      for (let i=0; i<document.getElementsByClassName(name).length;i++){
        document.getElementsByClassName(name)[i].addEventListener(action, callback)
      }
    } else {
      for (let i=0; i< document.getElementsByTagName(input).length;i++){
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
