$('.hover-img').on('click',function(){
    $(this).css('background-color','white');
    $(this).css('opacity', '0.7');
});

$( '.change-element' ).on('click',function() {
  $(this).animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
});