/**
	Exporto a classe ( em js APARENTEMENTE não há como importar uma 
classe que não foi exportada ).
*/
export default class Slide {

	/** 
		Algo interessante que eu notei no sistema de classes, de js,
	é que ele não necessariamente precisa de atributos em suas 
	classes. Podendo "declarar" esses atributos via construtor.
		Nesse construtor em questão, ele recebe 2 strings para que 
	com elas ele possa selecionar os elementos (no arquivo html/php)
	que possuam os querySelector equivalentes a essas Strings.
		Obs.: A palavra chave 'this' quase sempre será usada para
	se referir ao objeto instanciado por essa classe. Exceto na 
	chamada de eventos.
	*/
	constructor(slide, wrapper){
		this.slide = document.querySelector(slide);
		this.wrapper = document.querySelector(wrapper);
		this.distance = {
			finalPosition: 0,
			startX: 0,
			movement: 0,
			currentPosition: null,

			overflowEnd: false,
			overflowEndDistance: 0,
			overflowStart: false,
			overflowStartDistance: 0
		};
	}

	/**
		Metodo que irá previnir o default e adicionará um evento 
	de mousemove quando pressionar o mouse.
		Obs.: O 'this' de 'this.onMove' não se refere ao objeto
	e sim ao evento e isso é um problema.
	*/
	onPress(event){
		event.preventDefault();
		this.distance.startX = event.clientX;
		this.wrapper.addEventListener('mousemove', this.onMove);
	}

	/**
		Metodo que tem basicamente o mesmo efeito do metodo a cima
	só que para versão mobile (Ou seja, o touch).
	*/
	onTouch(event){
		this.distance.startX = event.changedTouches[0].clientX;
		this.wrapper.addEventListener('touchmove', this.onMoveT);
	}

	/**
		Metodo que removerá um evento de mousemove quando despressionar 
	o mouse.
		Obs.: O 'this' de 'this.onMove' não se refere ao objeto
	e sim ao evento e isso é um problema.
	*/
	onDepress(event){
		this.wrapper.removeEventListener('mousemove', this.onMove);
		this.distance.finalPosition = this.distance.currentPosition;
	}

	/**
		Metodo que tem, basicamente, o mesmo efeito do metodo acima
	só que para a versão mobile.
	*/
	onUntouched(event){
		this.wrapper.removeEventListener('touchmove', this.onMoveT);
		this.distance.finalPosition = this.distance.currentPosition;
	}

	/**
		Metodo que atualiza a posição do slide.
		Parametros: O valor da posição no eixo X do cursor.
		Retorna: A posição final do cursor - a distancia percorrida.
		Obs.: A constante '1.5' é referente a velocidade de movimento
	das imagens em relação ao cursor. ( no caso as imagens se movem 
	1.5 vezes a velocidade do cursor ).
	*/
	updatePosition(clientX){
		this.distance.movement = (this.distance.startX - clientX) * 1.5;
		return this.distance.finalPosition - this.distance.movement;
	}

	/**
		Metodo que altera o estilo das imagens para que se movam.
		Parametros: distancia percorrida em X.
	*/
	moveSlide(distanceX){
		if(this.distance.overflowEnd){
			distanceX = distanceX - this.distance.overflowEndDistance;
			this.distance.overflowEnd = false;

		} else if(this.distance.overflowStart) {
			distanceX -= this.distance.overflowStartDistance;
			this.distance.overflowStart = false;
		}
		this.distance.currentPosition = distanceX;
		this.slide.style.transform = "translate3d(" + distanceX +"px,0,0)";
	}

	/**
		Metodo que servirá como callback para o evento de mousemove.
	*/
	onMove(event){
		const finalPosition = this.updatePosition(event.clientX);

		if(finalPosition  < -this.calcSizeSlideList()){
			this.distance.overflowEndDistance = finalPosition + this.calcSizeSlideList();
			this.distance.overflowEnd = true;
		} else if(finalPosition > 0) {
			this.distance.overflowStartDistance = finalPosition
			this.distance.overflowStart = true;
		}
		this.moveSlide(finalPosition);
	}

	/**
		Metodo que fará o mesmo que o metodo acima, entretanto para
	o touch.
	*/
	onMoveT(event){
		const finalPosition = this.updatePosition(event.changedTouches[0].clientX);

		if(finalPosition  < -this.calcSizeSlideList()){
			this.distance.overflowEndDistance = finalPosition + this.calcSizeSlideList();
			this.distance.overflowEnd = true;
		} else if(finalPosition > 0) {
			this.distance.overflowStartDistance = finalPosition
			this.distance.overflowStart = true;
		
		}
		this.moveSlide(finalPosition);
	}

	/**
		Metodo de chamada de todos os eventos feitos.
	*/
	addSlideEvent(){
		this.wrapper.addEventListener('mousedown', this.onPress);
		this.wrapper.addEventListener('mouseup', this.onDepress);
		this.wrapper.addEventListener('touchstart', this.onTouch);
		this.wrapper.addEventListener('touchend', this.onUntouched);
	}

	/** 
		Metodo que irá dar bind em todos os this: Basicamente,
	ele ta fazendo com que os this que n apontam para o objeto 
	passem a apontar.
	*/
	bindEvents(){
		// Mouse
		this.onPress = this.onPress.bind(this);
		this.onMove = this.onMove.bind(this);
		this.onDepress = this.onDepress.bind(this);

		// Touch
		this.onTouch = this.onTouch.bind(this);
		this.onMoveT = this.onMoveT.bind(this);
		this.onUntouched = this.onUntouched.bind(this);
	}

	calcSizeSlideList(){
		const wrapperSize = this.wrapper.offsetWidth;
		const listSize = this.slide.children.length;
		//Margin left de cada slide
		const slidemargin = 13;
		const slideSize = this.slide.children[0].offsetWidth;
		
		return listSize*(slideSize+2*slidemargin) - (wrapperSize + 2*slidemargin);
	}

	/**
		Inicia a funcionalidade do objeto.
		Retorna o proprio objeto.
	*/
	intit(){
		this.bindEvents();
		this.addSlideEvent();
		this.calcSizeSlideList();
		return this;
	}
}