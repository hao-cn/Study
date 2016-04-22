var picture = require('cat-picture')
var src = picture.src
var image = require('lightning-image-poly')
picture.remove()
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})