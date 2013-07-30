$(document).ready(function() {

//choice city
function select() {
	var el = $('.js-select');
	var city = el.find('span');
	var item = el.find('li');
	var list = el.find('ul');
	city.click(function() {
		el.removeClass('is-open');
		list.hide();
		$(this).parent().toggleClass('is-open');
		$(this).next().toggle();
	});
	item.click(function() {
		var val = $(this).text();
		$(this).parent().prev().addClass('is-selected');
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
select();

//click document
$(document).click(function() {
	$('.js-select').removeClass('is-open');
	$('.js-select ul').hide();
});


});