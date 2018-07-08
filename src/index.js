var Circle = require('./circle');
var Triangle = require('./triangle');
var withMaskImages = document.getElementsByClassName('with-mask');
Array.prototype.forEach.call(withMaskImages, function (el) {
    var wave = new Triangle(el);
    wave.onload = function (svg) {
        var parent = el.parentElement;
        parent.innerHTML = '';
        parent.appendChild(svg);
    }
});