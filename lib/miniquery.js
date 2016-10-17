/*!
 * miniquery
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
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */


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
