/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
let SweetSelector = {
    select: function(input) {
        let element = input.split("")
        let element1 = element.shift()
        let joint = element.join("")
            //console.log(joint);

        //console.log(joint);
        if (element1 == "#") {
            return document.getElementById(joint)
        } else if (element1 == ".") {
            return document.getElementsByClassName(joint)
        } else if (element1 == "a") {
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
        hide: function(input) {
            let element = input.split("")
            let element1 = element.shift()
            let joint = element.join("")
            if (element1 == "#") {
                document.getElementById(joint).style.display = 'none'
            } else if (element1 == ".") {
                for (let i = 0; i < document.getElementsByClassName(joint).length; i++) {
                    document.getElementsByClassName(joint)[i].style.display = 'none'
                }
            } else {
                for (let i = 0; i < document.getElementsByTagName(input).length; i++) {
                    document.getElementsByTagName(input)[i].style.display = 'none'
                }
            }
        },
        show: function(input) {
            let element = input.split("")
            let element1 = element.shift()
            let joint = element.join("")
            if (element1 == "#") {
                document.getElementById(joint).style.display = 'block'
            } else if (element1 == ".") {
                for (let i = 0; i < document.getElementsByClassName(joint).length; i++) {
                    document.getElementsByClassName(joint)[i].style.display = 'block'
                }
            } else {
                for (let i = 0; i < document.getElementsByTagName(input).length; i++) {
                    document.getElementsByTagName(input)[i].style.display = 'block'
                }
            }
        },
        addClass: function(input, addition) {
            let element = input.split("")
            let element1 = element.shift()
            let joint = element.join("")
            if (element1 == "#") {

                document.getElementById(joint).className += " " + addition
            } else if (element1 == ".") {
                for (let i = 0; i < document.getElementsByClassName(joint).length; i++) {
                    document.getElementsByClassName(joint)[i].className += " " + addition
                }
            } else {
                for (let i = 0; i < document.getElementsByTagName(input).length; i++) {
                    document.getElementsByTagName(input)[i].className += " " + addition
                }
            }
        },

        removeClass: function(input, deletion) {
            let element = input.split("")
            let element1 = element.shift()
            let joint = element.join("")
            if (element1 == "#") {
                document.getElementById(joint).className = document.getElementById(joint).className.replace(deletion, "")
            } else if (element1 == ".") {
                for (let i = 0; i < document.getElementsByClassName(joint).length; i++) {
                    document.getElementsByClassName(joint)[i].className = document.getElementsByClassName(joint)[i].className.replace(deletion, "")
                }
            } else {
                for (let i = 0; i < document.getElementsByTagName(input).length; i++) {
                    document.getElementsByTagName(input)[i].className = document.getElementsByTagName(input)[i].className.replace(deletion, "")
                }
            }
        }
    }


    function myFunction(event) {
    	alert("myFunction type=" + event.type);
    }
/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
let EventDispatcher = {
  on: function(input, action, callback){
    let element = input.split("")
    let element1 = element.shift()
    let joint = element.join("")
    if(element1 == "#"){
       document.getElementById(joint).addEventListener(action, callback)
    } else if (element1 =="."){
      for (let i=0; i<document.getElementsByClassName(joint).length;i++){
        document.getElementsByClassName(joint)[i].addEventListener(action, callback)
      }
    } else {
      for (let i=0; i< document.getElementsByTagName(input).length;i++){
        document.getElementsByTagName(input)[i].addEventListener(action, callback)
      }
    }
  }
}

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
