var Mask = require('./mask');
var vector = require('./vector');

function Triangle(element, attributes) {
    Mask.call(this, element);
    this.attributes = attributes || {};
    this.loadImage(vector.triangle);
}

Triangle.prototype = Object.create(Mask.prototype);

module.exports = Triangle;