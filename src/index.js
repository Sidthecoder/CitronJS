var err = console.log('There was an error with your code, please open an issue here: https://github.com/CitronJS/CitronJS/issues/new');
var canvas = document.getElementById('citron');

if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
}