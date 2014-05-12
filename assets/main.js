$("section").click(function(event) {
  var clickedSectionId = this.id;
  if($(this).hasClass("col-md-1")) {

    $(this).addClass("col-md-12");
    $(this).removeClass("col-md-1");

    $('section').not(this).each(function(){ $(this).fadeOut(100);});

    setTimeout(function() {
      $("#"+clickedSectionId + " .content-header").fadeIn(500);
      $("#"+clickedSectionId + " .section-details").fadeIn(500);
    }, 2000);
  } else {
    $("#"+clickedSectionId + " .content-header").fadeOut(100);
    $("#"+clickedSectionId + " .section-details").fadeOut(100);
    $('section').not(this).each(function(){ $(this).fadeIn(1900);});
    $(this).removeClass("col-md-12");
    $(this).addClass("col-md-1");
  }
});
