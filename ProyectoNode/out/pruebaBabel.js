"use strict";

function prueba() {
	var y = "nuevo";
	var x = "codigo de ejemplo ${y}";
	alert(x + y);
	return y;
}
prueba();

function suma(x, y) {
	return x + y;
}
suma(5, 7);