$(document).ready(function(){
	$('#menu-sandwich').click(function(e){
		e.preventDefault();

		if($('.menu').hasClass('menu-active')){
			$('.menu').removeClass('menu-active');
			$('#menu-sandwich').removeClass('menu-sw-active');
			/*$('.menu').addClass('menu-out');*/
		}else{
			/*$('.menu').removeClass('menu-out');*/
			$('.menu').addClass('menu-active');
			$('#menu-sandwich').addClass('menu-sw-active');
		}

		$('#m-sobre').on("click", function(ev){
			$('.menu').removeClass('menu-active');
			/*$('.menu').addClass('menu-out');*/
		});

		$('#m-projetos').click(function(ev){
			$('.menu').removeClass('menu-active');
			/*$('.menu').addClass('menu-out');*/
		});

		$('#m-contato').click(function(ev){
			$('.menu').removeClass('menu-active');
			/*$('.menu').addClass('menu-out');*/
		});
	});

	$('#form-submit').click(function(){
		$('.bg-form').addClass('form-send');
	});		
});