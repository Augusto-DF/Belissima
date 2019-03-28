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
			currentPosition: null
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
		this.distance.currentPosition = distanceX;
		this.slide.style.transform = "translate3d(" + distanceX +"px,0,0)";
	}

	/**
		Metodo que servirá como callback para o evento de mousemove.
	*/
	onMove(event){
		const finalPosition = this.updatePosition(event.clientX);
		this.moveSlide(finalPosition);
	}

	/**
		Metodo de chamada de todos os eventos feitos.
	*/
	addSlideEvent(){
		this.wrapper.addEventListener('mousedown', this.onPress);
		this.wrapper.addEventListener('mouseup', this.onDepress);
	}

	/** 
		Metodo que irá dar bind em todos os this: Basicamente,
	ele ta fazendo com que os this que n apontam para o objeto 
	passem a apontar.
	*/
	bindEvents(){
		this.onPress = this.onPress.bind(this);
		this.onMove = this.onMove.bind(this);
		this.onDepress = this.onDepress.bind(this);
	}

	/**
		Inicia a funcionalidade do objeto.
		Retorna o proprio objeto.
	*/
	intit(){
		this.bindEvents();
		this.addSlideEvent();
		return this;
	}
}