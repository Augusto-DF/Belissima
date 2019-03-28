
$(document).ready(function(){
// Efeito menu mobile
	$('#menu-sandwich').click(function(e){
		e.preventDefault();

		if($('.menu').hasClass('menu-active')){
			document.querySelector('.menu').classList.remove('menu-active');
			document.querySelector('#menu-sandwich').classList.remove('menu-sw-active');
			document.querySelector('.menu-sandwich').classList.remove('change');
		}else{
			/*$('.menu').removeClass('menu-out');*/
			document.querySelector('.menu').classList.add('menu-active');
			document.querySelector('#menu-sandwich').classList.add('menu-sw-active');
			document.querySelector('.menu-sandwich').classList.add('change');
		}
	});
// Formulario
	$('#form-submit').click(function(){
		$('.bg-form').addClass('form-send');
	});		
// Funções: 
	/* Scroll suave até a distancia definida */
	function roll(distance){
		window.scroll({
			top: distance,
			left: 0,
			behavior: 'smooth'
		});
	}
// Scroll Suave 
	{
		//Não é o jeito mais interessante de fazer mas.. 
		//Guardei a altura do container a cima do alvo que eu queria.
		let heightIntro = document.querySelector('.intro-bg').offsetHeight;

		//Vetor com todos os data-svcScroll
		let svc = document.querySelectorAll('[data-svcScroll]');
		for(let ii = 0; ii < svc.length; ++ii){
			svc[ii].addEventListener('click', function(ev){
				ev.preventDefault();
				if (screen.width <= 670) {
					document.querySelector('.menu').classList.remove('menu-active');
					document.querySelector('#menu-sandwich').classList.remove('menu-sw-active');
					document.querySelector('.menu-sandwich').classList.remove('change');
				}
				roll(heightIntro);
			});
		}
	}
});
