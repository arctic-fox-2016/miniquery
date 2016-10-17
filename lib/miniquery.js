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
    let element=input.substring(0,1)
    let parse
    if(element=='#'){
      parse = input.substring(1,input.length)
      return document.getElementById(parse);
    }
    if(element=='.'){
      parse = input.substring(1,input.length)
      return document.getElementsByClassName(parse);
    }
    if(element=='a'){
      parse = input.substring(1,input.length)
      return document.getElementsByTagName(input)
      //return document.getElementsByTagName(parse+"p");
    }



  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
let DOM = {
  hide:function(input){
    let element=input.substring(0,1)
    let parse
    if(element=='.'){
      parse = input.substring(1,input.length)
      document.getElementsByClassName(parse)[0].style.display='none'
    }
  },
  show:function(input){
    let element=input.substring(0,1)
    let parse
    if(element=='.'){
      parse = input.substring(1,input.length)
      document.getElementsByClassName(parse)[0].style.display='block'
    }
  },
  removeClass:function(input){

  },
  addClass:function(input){
    
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
