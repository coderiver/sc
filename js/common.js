$(document).ready(function() {

//choice city
function select() {
	var el = $('.js-select');
	var el_title = el.find('span');
	var item = el.find('li');
	var list = el.find('ul');
	el_title.click(function() {	
		if ($(this).parent().hasClass('is-open')) {
			$(this).parent().removeClass('is-open');
		}
		else {
			el.removeClass('is-open');
			$(this).parent().addClass('is-open');
		};
	});
	item.click(function() {
		var val = $(this).text();
		$(this).parent().prev().addClass('is-selected');
		$(this).parent().prev().html(val + '<i></i>');
		el.removeClass('is-open');
	});
	el_title.click(function(event){
	  event.stopPropagation();
	});
};
select();

//faq accos
$('.js-accos').click(function() {
	$(this).next().slideToggle();
})

//click document
$(document).click(function() {
	$('.js-select').removeClass('is-open');	
});


});