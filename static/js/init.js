import $ from 'jquery'
require('../bower_components/materialize/dist/js/materialize')
export default {
  mounted() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    console.log(firebase)
    // const dbRef = firebase.database().ref().child('email')
    // console.log(dbRef)
    // dbRef.on('value', snap => console.log(snap.val()))
    // console.log($('.button-collapse'))
  }
}
// (function($){
//   $(function(){



//   }); // end of document ready
// })(jQuery); // end of jQuery name space
