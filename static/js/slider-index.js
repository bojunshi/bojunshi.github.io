var initSlider = initSlider || {},
    cssAnimationSupported = cssAnimationSupported || {};

cssAnimationSupported = function () {
  var animation = false,
      animationstring = 'animation',
      keyframeprefix = '',
      domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
      pfx  = '',
      elm = document.createElement('div');

  if( elm.style.animationName !== undefined ) { animation = true; }    

  if( animation === false ) {
    for( var i = 0; i < domPrefixes.length; i++ ) {
      if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
        pfx = domPrefixes[ i ];
        animationstring = pfx + 'Animation';
        keyframeprefix = '-' + pfx.toLowerCase() + '-';
        animation = true;
        break;
      }
    }
  }
  return animation;
}

initSlider = function() {
  var animationSupported = cssAnimationSupported();
  
  jQuery('.full-slider').each( function () {
    var as = jQuery(this).find('.all-slides'),
        count = as.find('> *').length,
        ff, fs, fl;
    
    // if css animation is supported and there's more between one and 6 items
    if (animationSupported && (count > 1) && (count <= 6)){
      // add class with numbers of items
      as.addClass('count' + count);
    
      // add fake elements and animate
      ff = as.find('> *:nth-child(1)').clone();
      fs = as.find('> *:nth-child(2)').clone();
      fl = as.find('> *:last-child').clone();
      as.prepend(fl).append(ff).append(fs);
      jQuery(this).addClass('anim');
    } 
    
    // If not supported or there are more items
    else if ((count > 6) || (!animationSupported && (count > 1))) {
      // adapt container & items width
      as.css('width', (count * 100) + '%');
      as.find('> *').css('width', (100 / count) + '%');
    }
    
  })
}

jQuery(document).ready(function(){
  initSlider();
});