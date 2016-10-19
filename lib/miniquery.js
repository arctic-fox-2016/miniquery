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
    let element = input.split("")
    let letter = element.shift()
    let label = element.join("")
    if(letter == "#"){
      return document.getElementById(label)
    } else if (letter =="."){
      return document.getElementsByClassName(label)
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
    let element = input.split("")
    let letter = element.shift()
    let label = element.join("")
    if(letter == "#"){
      document.getElementById(label).style.display= 'none'
    } else if (letter =="."){
      for (let i=0; i<document.getElementsByClassName(label).length;i++){
        console.log('get in for changes')
        document.getElementsByClassName(label)[i].style.display= 'none'
        console.log('changes')
      }
    } else {
      for (let i=0; i< document.getElementsByTagName(input).length;i++){
        document.getElementsByTagName(input)[i].style.display= 'none'
      }
    }
  },

  show: function(input){
    let element = input.split("")
    let letter = element.shift()
    let label = element.join("")
    if(letter == "#"){
      document.getElementById(label).style.display= 'block'
    } else if (letter =="."){
      for (let i=0; i<document.getElementsByClassName(label).length;i++){
        console.log('get in for changes')
        document.getElementsByClassName(label)[i].style.display= 'block'
        console.log('changes')
      }
    } else {
      for (let i=0; i< document.getElementsByTagName(input).length;i++){
        document.getElementsByTagName(input)[i].style.display= 'block'
      }
    }
  },

  addClass: function(input, addition){
    let element = input.split("")
    let letter = element.shift()
    let label = element.join("")
    if(letter == "#"){
      document.getElementById(label).className += " " + addition
    } else if (letter =="."){
      for (let i=0; i<document.getElementsByClassName(label).length;i++){
        console.log('get in for changes')
        document.getElementsByClassName(label)[i].className += " " + addition
        console.log('changes')
      }
    } else {
      for (let i=0; i< document.getElementsByTagName(input).length;i++){
        document.getElementsByTagName(input)[i].className += " " +addition
      }
    }
  },

  removeClass: function(input, deletion){
    let element = input.split("")
    let letter = element.shift()
    let label = element.join("")
    if(letter == "#"){
      document.getElementById(label).className= document.getElementById(label).className.replace(deletion, "")
    } else if (letter =="."){
      for (let i=0; i<document.getElementsByClassName(label).length;i++){
        console.log('get in for changes')
        document.getElementsByClassName(label)[i].className= document.getElementsByClassName(label)[i].className.replace(deletion, "")
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
    let element = input.split("")
    let letter = element.shift()
    let label = element.join("")
    if(letter == "#"){
      document.getElementById(label).addEventListener(action, callback)
    } else if (letter =="."){
      for (let i=0; i<document.getElementsByClassName(label).length;i++){
        document.getElementsByClassName(label)[i].addEventListener(action, callback)
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
let ajaxWrapper = {
  request: function(input){
    let xhr = new XMLHttpRequest()
    xhr.open(input.type, input.url, true)
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
    xhr.responseType = 'json'
    xhr.send()

    xhr.onload = function(e){
      let datas = e.target.response
      input.success(datas)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
