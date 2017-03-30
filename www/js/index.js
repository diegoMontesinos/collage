/* globals $ */
'use strict';

var b = 123;

function onMouseMove (event) {
  var width  = $(event.target).width();
  var height = $(event.target).height();

  var x = event.offsetX - (width * 0.5);
  var y = event.offsetY - (height * 0.5);

  $('.layer').each(function (i, layerElem) {
    var amtX = parseFloat($(layerElem).attr('data-x') || 0);
    var amtY = parseFloat($(layerElem).attr('data-y') || 0);

    var mX = x * amtX;
    var mY = y * amtY;

    $(layerElem).css({
      'transform' : 'translate3d(' + mX + 'px,' + mY + 'px, 0px)'
    });
  });
}

$(document).ready(function () {

  // Registrar el evento mouse move sobre el main-container
  $('#collage-container').on('mousemove', onMouseMove);

});
