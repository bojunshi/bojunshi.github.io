import $ from 'jquery'
require('../bower_components/materialize/dist/js/materialize')
export default {
  mounted() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    // $('.collapsible').collapsible();

    console.log($('.button-collapse'))
  }
}
// (function($){
//   $(function(){



//   }); // end of document ready
// })(jQuery); // end of jQuery name space
