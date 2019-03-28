/**
	Iportei uma classe Slide do arquivo slide.js
	Obs.: Isso só é possivel pq esse script é do tipo module la no 
arquivo html/php.
*/
import Slide from './slide.js';

/**
	Instancio um objeto Slide passando como parametro 2 strings
*/
const slide = new Slide('.slide', '.wrapper');

/**
	Função que inicia a usabilidade da minha classe. Essa classe é
essencialmente uma classe de eventos.
*/
slide.intit();