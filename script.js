$(document).ready(function() {

  $('.sentence').mouseover(function() {
    alert("wow!");// $('#log').append('<div>Handler for .mouseover() called.</div>');
  });

  // // document.getElementByClass('myElement').style.cursor = 'pointer';

  // $('.sentence').style.cursor = 'pointer';
  
  $.fn.dontScrollParent = function () {
    return this.bind("mousewheel DOMMouseScroll", function (e) {
      var t;
      return t = e.originalEvent.wheelDelta || -e.originalEvent.detail, t > 0 && $(this).scrollTop() <= 0 ? !1 : t < 0 && $(this).scrollTop() >= this.scrollHeight - $(this).height() ? !1 : !0
    })
  };
  
  $('.wrapper').dontScrollParent()

});
