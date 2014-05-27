$(document).ready(function() {
		$(".call-button").on("click", function() {
		$(".call-to-action").slideToggle();
		});

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}


$("#downClick").click(function() {
   scrollToAnchor('works');
});
$("#intouche").click(function() {
   scrollToAnchor('callme');
});

});