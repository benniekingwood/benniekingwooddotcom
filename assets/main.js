$("section").click(function(event) {
  var contentFadeIn = ($.browser.desktop) ? 500 : 250;
  var contentFadeOut = ($.browser.desktop) ? 100 : 50;
  var sectionFadeIn = ($.browser.desktop) ? 1900 : 500;
  var sectionFadeInTimeout = ($.browser.desktop) ? 2000 : 550;
  
  var clickedSectionId = this.id;
  if($(this).hasClass("col-md-1")) {

    $(this).addClass("col-md-12");
    $(this).removeClass("col-md-1");

    $('section').not(this).each(function(){ $(this).fadeOut(contentFadeOut);});

    setTimeout(function() {
      $("#"+clickedSectionId + " .content-header").fadeIn(contentFadeIn);
      $("#"+clickedSectionId + " .section-details").fadeIn(contentFadeIn);
    }, sectionFadeInTimeout);
  } else {
    $("#"+clickedSectionId + " .content-header").fadeOut(contentFadeOut);
    $("#"+clickedSectionId + " .section-details").fadeOut(contentFadeOut);
    $('section').not(this).each(function(){ $(this).fadeIn(sectionFadeIn);});
    $(this).removeClass("col-md-12");
    $(this).addClass("col-md-1");
    if($.browser.mobile) $(document).scrollTop($("#"+clickedSectionId ).position().top);
  }
});
