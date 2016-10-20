let SweetSelector = {
  select: function(userinput){
    let element = userinput.split("")
    let letter = element.shift()
    let label = element.join("")
    if(letter == "#"){
      return document.getElementById(label)
    } else if (letter =="."){
      return document.getElementsByClassName(label)
    } else {
      return document.getElementsByTagName(userinput)
    }
  }
}

let DOM = {
  hide: function(userinput){
    let element = userinput.split("")
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
      for (let i=0; i< document.getElementsByTagName(userinput).length;i++){
        document.getElementsByTagName(userinput)[i].style.display= 'none'
      }
    }
  },

  show: function(userinput){
    let element = userinput.split("")
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
      for (let i=0; i< document.getElementsByTagName(userinput).length;i++){
        document.getElementsByTagName(userinput)[i].style.display= 'block'
      }
    }
  },

  addClass: function(userinput, addition){
    let element = userinput.split("")
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
      for (let i=0; i< document.getElementsByTagName(userinput).length;i++){
        document.getElementsByTagName(userinput)[i].className += " " +addition
      }
    }
  },

  removeClass: function(userinput, deletion){
    let element = userinput.split("")
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
      for (let i=0; i< document.getElementsByTagName(userinput).length;i++){
        document.getElementsByTagName(userinput)[i].className=document.getElementsByTagName(userinput)[i].className.replace(deletion,"")
      }
    }
  }
}

let EventDispatcher = {
  on: function(userinput, action, callback){
    let element = userinput.split("")
    let letter = element.shift()
    let label = element.join("")
    if(letter == "#"){
      document.getElementById(label).addEventListener(action, callback)
    } else if (letter =="."){
      for (let i=0; i<document.getElementsByClassName(label).length;i++){
        document.getElementsByClassName(label)[i].addEventListener(action, callback)
      }
    } else {
      for (let i=0; i< document.getElementsByTagName(userinput).length;i++){
        document.getElementsByTagName(userinput)[i].addEventListener(action, callback)
      }
    }
  }
}

let ajaxWrapper = {
  request: function(userinput){
    let xhr = new XMLHttpRequest()
    xhr.open(userinput.type, userinput.url, true)
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
    xhr.responseType = 'json'
    xhr.send()

    xhr.onload = function(e){
      let alldatas = e.target.response
      userinput.success(alldatas)
    }
  }
}
