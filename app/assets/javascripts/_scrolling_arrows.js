// Testimonial section
$(document).on('click', '.test-right-arrow', function(e) {
  $(".test-line-one").addClass("hidden");
	$(".test-line-two").removeClass("hidden");
	$(".test-right-arrow").addClass("hidden");
	$(".test-left-arrow").removeClass("hidden");
	e.preventDefault();
});
$(document).on('click', '.test-left-arrow', function(e) {
	$(".test-line-one").removeClass("hidden");
	$(".test-line-two").addClass("hidden");
	$(".test-left-arrow").addClass("hidden");
	$(".test-right-arrow").removeClass("hidden");
	e.preventDefault();
});

// Logos section
$(document).on('click', '.logos-right-arrow', function(e) {
 	$(".logos-line-one").addClass("hidden");
 	$(".logos-line-two").removeClass("hidden");
	e.preventDefault();
});
$(document).on('click', '.logos-left-arrow-two', function(e) {
 	$(".logos-line-one").removeClass("hidden");
 	$(".logos-line-two").addClass("hidden");
	e.preventDefault();
});
$(document).on('click', '.logos-right-arrow-two', function(e) {
 	$(".logos-line-two").addClass("hidden");
 	$(".logos-line-three").removeClass("hidden");
	e.preventDefault();
});
$(document).on('click', '.logos-left-arrow-three', function(e) {
 	$(".logos-line-two").removeClass("hidden");
 	$(".logos-line-three").addClass("hidden");
	e.preventDefault();
});
