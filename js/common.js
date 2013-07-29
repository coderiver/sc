$(document).ready(function() {

//choice city
function choice_city() {
	var el = $('.js-city');
	var city = el.find('span');
	var item = el.find('li');
	city.click(function() {
		$(this).parent().toggleClass('is-open');
		$(this).next().toggle();
	});
	item.click(function() {
		var val = $(this).text();
		$(this).parent().prev().html(val + '<i></i>');
		$(this).parent().hide();
		el.removeClass('is-open');
	});
	el.click(function(event){
	    event.stopPropagation();
	});
};

//faq accos
$('.js-accos').click(function() {
	$(this).next().slideToggle();
})

//init
choice_city();

//click document
$(document).click(function() {
	$('.js-city').removeClass('is-open');
	$('.js-city ul').hide();
});


});